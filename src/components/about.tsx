import Link from "next/link";
import { Canvas2 } from "./canvas";

export default function About() {
    return (
        <section id="about" className="mt-12 relative">
            <Canvas2 className="" />
            <article className="sm:w-4/5 w-full p-8 drop-shadow-2xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                <h2 className="text-slate-200 text-5xl md:text-7xl sm:text-6xl font-bold drop-shadow-lg">
                    About Me
                </h2>
                <p className="text-slate-200 text-[6vw] md:text-3xl drop-shadow-lg">
                    Passionate developer creating{" "}
                    <strong>innovative projects</strong>. Pursuing a
                    <strong> Computer Science degree </strong> at
                    <Link
                        href="https://www.dal.ca/"
                        className="font-bold hover:underline"
                    >
                        {" "}
                        Dalhousie University
                    </Link>
                    . Constantly learning, growing, and tackling new challenges.
                </p>
            </article>
        </section>
    );
}
