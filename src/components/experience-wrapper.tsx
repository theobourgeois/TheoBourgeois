"use client";
import { useTheme } from "@/utils/state";

export default function ExperienceWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const theme = useTheme();
    return (
        <section
            className="py-16"
            id="experience"
            style={{
                background: `linear-gradient(to bottom, var(--background) 10%, transparent 30%, transparent 70%, var(--background) 90%), linear-gradient(to right, rgba(${theme[0].join(
                    ","
                )}, 0.2) 10%, transparent 30%, transparent 70%, rgba(${theme[2].join(
                    ","
                )}, 0.2) 90%)`,
            }}
        >
            {children}
        </section>
    );
}
