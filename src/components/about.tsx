import { Canvas2 } from "./canvas";

export default function About() {
    return (
        <section id="about" className="mt-12 relative">
            <Canvas2 className=""></Canvas2>
            <article className="w-4/5 p-8 drop-shadow-2xl space-y-2 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <h2 className="text-slate-200 text-5xl md:text-7xl sm:text-6xl text-center drop-shadow-lg font-bold">
                    About me
                </h2>
                <h3 className="text-slate-200 text-[5vw] md:text-3xl text-center drop-shadow-lg ">
                    I love making creative and innovative projects. I&apos;m
                    passionate about learning new technologies and building cool
                    stuff. I&apos;m currently a student at Dalhousie University
                    studying Computer Science. I&apos;m always looking for new
                    opportunities to learn and grow as a developer.
                </h3>
            </article>
        </section>
    );
}
