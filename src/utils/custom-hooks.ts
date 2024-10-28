"use client"
import { useEffect, RefObject, useState } from "react";

type Dimensions = {
  width: number;
  height: number;
};


export function useWindowDimensions() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: window?.innerWidth,
    height: window?.innerHeight,
  });

  useEffect(() => {
    const handleSetDimensions = () => {
      const sidebar = document.getElementById("sidebar");
      const isMobile = window?.innerWidth < 768;

      setDimensions({
        width: window?.innerWidth - (!isMobile ? sidebar?.clientWidth ?? 0 : 0),
        height: window?.innerHeight,
      });
    };
    handleSetDimensions();
    window?.addEventListener("resize", handleSetDimensions);
    return () => {
      window?.removeEventListener("resize", handleSetDimensions);
    };
  }, []);

  return {
    ...dimensions,
    isMobile: dimensions.width < 768,
  }
}


// Define the types for the render function and the canvas reference
type RenderFunction = (ctx: CanvasRenderingContext2D, width: number, height: number) => void;

export const renderCanvas = (
  canvasRef: RefObject<HTMLCanvasElement>, // Reference to the canvas element
  renderFunction: RenderFunction, // Render function that takes context, width, and height
  width: number, // Canvas width
  height: number, // Canvas height
  dependencies: unknown[], // Dependencies array for useEffect
  throttleMs: number = 500,
): void => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    let animationFrameId: number;
    let lastRenderTime = 0;
    renderFunction(ctx, width, height);

    const renderLoop = (time: number) => {
      // Throttle rendering to run every `throttleMs` milliseconds
      if (time - lastRenderTime >= throttleMs) {
        lastRenderTime = time;
        renderFunction(ctx, width, height);
      }

      // Request the next frame
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    // Start the render loop
    animationFrameId = requestAnimationFrame(renderLoop);

    // Cleanup on unmount
    return () => cancelAnimationFrame(animationFrameId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

