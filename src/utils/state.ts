import { create } from 'zustand'

function hexToRgb(hex: string) {
  const bigint = parseInt(hex, 16);
  return [bigint >> 16, (bigint >> 8) & 255, bigint & 255];
}

export const colorThemes = {

  fade: [
    [255, 0, 0],
    [255, 165, 0],
    [238, 130, 238],
  ],

  gordaculous: [
    hexToRgb('35126a'),
    hexToRgb('ff8e44'),
    hexToRgb('f91362'),
  ],



  bodiatuous: [
    [31, 24, 40],
    [219, 221, 215],
    [207, 67, 107],
  ],

  ocean: [
    [0, 105, 148],
    [0, 168, 232],
    [0, 204, 255],
    [0, 255, 255],
    [102, 255, 255],
  ],

  bluegreen: [
    [0, 240, 0],
    [0, 165, 240],
    [0, 130, 238],
  ],

  rainbow: [
    [255, 0, 0], // Red
    [255, 127, 0], // Orange
    [255, 255, 0], // Yellow
    [0, 255, 0], // Green
    [0, 0, 255], // Blue
    [75, 0, 130], // Indigo
    [148, 0, 211], // Violet
  ],
};

type ThemeStore = {
  theme: keyof typeof colorThemes;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'fade',
  toggleTheme: () => set((state) => {
    const themes = Object.keys(colorThemes)
    const index = themes.indexOf(state.theme)
    const nextIndex = (index + 1) % themes.length
    return { theme: themes[nextIndex] as keyof typeof colorThemes }
  })
}))

export const useTheme = () => colorThemes[useThemeStore(state => state.theme)]
