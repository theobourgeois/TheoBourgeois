"use client";
import {
    Font,
    renderCanvas1,
    renderCanvas2,
    renderCodeCanvas,
} from "@/utils/canvas-render-fns";
import { renderCanvas, useWindowDimensions } from "@/utils/custom-hooks";
import { useTheme } from "@/utils/state";
import { useRef } from "react";

type CanvasProps = {
    className: string;
};

export function Canvas1(props: CanvasProps) {
    const ref = useRef<HTMLCanvasElement>(null);
    const dimensions = useWindowDimensions();
    const theme = useTheme();

    renderCanvas(
        ref,
        (ctx, width, height) => {
            renderCanvas1(ctx, width, height, theme);
        },
        dimensions.width,
        dimensions.height,
        [theme, dimensions.isMobile, dimensions],
        dimensions.isMobile ? 100000 : 10
    );

    return <canvas className={props.className} ref={ref}></canvas>;
}

export function Canvas2(props: CanvasProps) {
    const ref = useRef<HTMLCanvasElement>(null);
    const dimensions = useWindowDimensions();
    const theme = useTheme();

    renderCanvas(
        ref,
        (ctx, width, height) => {
            renderCanvas2(ctx, width, height, theme);
        },
        dimensions.width,
        dimensions.height,
        [theme, dimensions.isMobile, dimensions],
        200
    );

    return <canvas className={props.className} ref={ref}></canvas>;
}

export default function Canvas3(props: CanvasProps) {
    const ref = useRef<HTMLCanvasElement>(null);
    const dimensions = useWindowDimensions();
    const theme = useTheme();

    renderCanvas(
        ref,
        (ctx, width, height) => {
            const fontSize = dimensions.width / 100;
            renderCodeCanvas(
                ctx,
                fontSize,
                Font.Monaco,
                "My Projects",
                width,
                height,
                theme
            );
        },
        dimensions.width,
        dimensions.height,
        [theme, dimensions, dimensions.isMobile],
        dimensions.isMobile ? 10000 : 200
    );

    return <canvas className={props.className} ref={ref}></canvas>;
}
