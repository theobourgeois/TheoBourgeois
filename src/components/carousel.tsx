"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Carousel({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    return (
        <section ref={emblaRef} className={className + " embla"}>
            <div className="embla__container">{children}</div>
        </section>
    );
}
