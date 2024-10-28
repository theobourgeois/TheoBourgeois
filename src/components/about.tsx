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
                    I am a passionate developer dedicated to creating{" "}
                    <strong>innovative and creative projects</strong>. My
                    enthusiasm for learning new technologies drives me to build
                    exciting solutions that solve real-world problems.
                    Currently, I am pursuing a{" "}
                    <strong>Bachelor&apos;s degree in Computer Science</strong>{" "}
                    at{" "}
                    <strong>
                        <a href="https://www.dal.ca/">Dalhousie University</a>
                    </strong>
                    , where I am honing my skills and expanding my knowledge
                    base.
                </h3>
                <h3 className="text-slate-200 text-[5vw] md:text-3xl text-center drop-shadow-lg ">
                    I thrive on new challenges and actively seek opportunities
                    to grow both personally and professionally. Whether
                    it&apos;s through collaborative projects, internships, or
                    personal initiatives, I am committed to evolving as a
                    developer and contributing meaningfully to the tech
                    community.
                </h3>
            </article>
        </section>
    );
}
