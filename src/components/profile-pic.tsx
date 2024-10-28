"use client";
import { useTheme } from "@/utils/state";

export function ProfilePic({ children }: { children: React.ReactNode }) {
    const theme = useTheme();
    return (
        <div
            className="inset-0 w-48 h-48 rounded-full bg-gradient-to-r p-8 flex justify-center items-center"
            style={{
                filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))",
                background: `linear-gradient(
                                to right,
                                rgb(${theme[0].join(",")}),
                                rgb(${theme[1].join(",")}),
                                rgb(${theme[2].join(",")})
                            )`,
            }}
        >
            {children}
        </div>
    );
}
