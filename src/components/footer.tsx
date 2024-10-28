"use client";
import { useTheme } from "@/utils/state";

export default function Footer({ children }: { children: React.ReactNode }) {
    const theme = useTheme();
    return (
        <footer
            id="footer"
            className="text-slate-200 px-8 pb-8 pt-44 mt-24"
            style={{
                background: `linear-gradient(to top, rgba(${theme[2].join(
                    ","
                )}, 0.7) 0%, transparent 100%)`,
            }}
        >
            {children}
        </footer>
    );
}
