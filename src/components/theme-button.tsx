"use client";
import { useTheme, useThemeStore } from "@/utils/state";
import { RiColorFilterLine } from "react-icons/ri";

export default function ThemeButton() {
    const theme = useTheme();
    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    return (
        <button id="theme-button">
            <RiColorFilterLine
                className="text-white text-4xl cursor-pointer rounded-md mx-2 absolute top-2 right-0 hover:opacity-70"
                style={{
                    background: `linear-gradient(
                      to right,
                      rgb(${theme[0].join(",")}),
                      rgb(${theme[1].join(",")}),
                      rgb(${theme[2].join(",")})
                      )`,
                }}
                onClick={toggleTheme}
            />
        </button>
    );
}
