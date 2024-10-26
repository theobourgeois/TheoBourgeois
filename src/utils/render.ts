import { Font, getImageArrayFromText } from "./textincode";

const MAX_FREQ = 0.001;
const MIN_FREQ = 0.0007;

let freq = MIN_FREQ;
let increment = 0.0000001;

function colorChannelMixer(
  colorChannelA: number,
  colorChannelB: number,
  amountToMix: number
) {
  const channelA = colorChannelA * amountToMix;
  const channelB = colorChannelB * (1 - amountToMix);
  return channelA + channelB;
}

export function colorMixer(
  rgbA: number[],
  rgbB: number[],
  amountToMix: number
) {
  const r = colorChannelMixer(rgbA[0], rgbB[0], amountToMix);
  const g = colorChannelMixer(rgbA[1], rgbB[1], amountToMix);
  const b = colorChannelMixer(rgbA[2], rgbB[2], amountToMix);
  return [r, g, b];
}

export function renderCanvas1(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  colors: number[][]
) {
  ctx.clearRect(0, 0, width, height);

  if (freq > MAX_FREQ || freq < MIN_FREQ) {
    increment *= -1;
  }

  const frequency = (freq += increment);

  for (let i = 0; i < height; i++) {
    // Calculate color index based on the current row
    const colorIndex = Math.floor((i / height) * colors.length);

    const blend = (i / height) * colors.length - colorIndex;

    const [r, g, b] = colorMixer(
      colors[(colorIndex + 1) % colors.length],
      colors[colorIndex],
      blend
    );
    const color = `rgb(${r}, ${g}, ${b})`;

    ctx.fillStyle = color;

    // Add glow effect
    ctx.shadowBlur = 20;
    ctx.shadowColor = color;

    const offset =
      Math.tan(frequency * 10_000 * Math.sin(i * frequency)) *
      (width / 6);
    ctx.fillRect(width / 4 + offset, i, width / 4, 1);
  }
}

const letters = "é♪π♫￥ƒ➫☮é♪π♫￥ƒ➫é♪π♫￥ƒ➫Ⓣ✎☻⁺‧₊˚ ཐི⋆♱⋆ཋྀ ˚₊‧∀⁺π♫♫♫";
const LETTER_SIZE = 20;

let letterList: string[][] = [];
let imageArray: number[] = [];

export function renderCanvas2(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  colors: number[][]
) {
  ctx.clearRect(0, 0, width, height);

  const numOfColumns = Math.ceil(width / LETTER_SIZE);

  if (letterList.length === 0 || letterList.length !== numOfColumns) {
    letterList = Array(numOfColumns)
      .fill(0)
      .map(() => {
        return letters.split("").map(() => {
          return letters.charAt(
            Math.floor(Math.random() * letters.length)
          );
        });
      });
  }
  if (imageArray.length === 0 || imageArray.length !== numOfColumns * letters.length) {
    imageArray = getImageArrayFromText(
      "théo",
      letterList.length,
      letters.length,
      Font.ComicSans
    );
  }

  for (let i = 0; i < letterList.length; i++) {
    const randLetters = letterList[i];
    for (let j = 0; j < letters.length; j++) {
      const letter = randLetters[j];

      const colorIndex = Math.floor((j / letters.length) * colors.length);
      const blend = (j / letters.length) * colors.length - colorIndex;

      const [r, g, b] = colorMixer(
        colors[(colorIndex + 1) % colors.length],
        colors[colorIndex],
        blend
      );

      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 10;
      let alpha = Math.max(j / letters.length, 0.3);
      const isImage = imageArray[i + j * letterList.length] === 1;
      if (isImage) {
        alpha = 0.3;
      }

      const color = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      ctx.shadowColor = color;
      ctx.fillStyle = color;

      ctx.font = `${LETTER_SIZE}px Arial`;
      ctx.fillText(
        isImage ? letters[0] : letter,
        i * LETTER_SIZE,
        LETTER_SIZE * j
      );
    }
  }

  //shift letters down
  for (let i = 0; i < numOfColumns; i++) {
    for (let j = 0; j < (letterList[i].length ?? 0); j++) {
      if (Math.random() > 0.9) {
        letterList[i][j] = letters.charAt(
          Math.floor(Math.random() * letterList.length - 1)
        );
      }
    }
  }
}
