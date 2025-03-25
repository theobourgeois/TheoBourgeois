import { projects, technologyIcons, technologyLinks } from "@/utils/content";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Carousel from "./carousel";
import React from "react";
import Canvas3 from "./canvas";
import Link from "next/link";

export default function Projects() {
    return (
        <section
            id="projects"
            className="flex flex-col lg:gap-24 relative h-full"
        >
            <Canvas3 className="hidden lg:block w-full lg:h-[18%] lg:-top-[100px] absolute"></Canvas3>
            <div className="hidden lg:block w-full relative lg:h-[600px]"></div>
            <h2
                style={{
                    textShadow: "0 0 10px #ffffff90",
                }}
                className="text-slate-200 block mb-8 lg:hidden font-bold text-center text-[13vw] md:text-9xl drop-shadow-lg"
            >
                My Projects
            </h2>
            <div className="space-y-12">
                {Object.values(projects).map((project, index) => (
                    <article className="relative" key={index}>
                        <div
                            className="w-full absolute top-0 left-0 h-full"
                            style={{
                                background: `linear-gradient(
                                  to bottom,
                                  transparent 30%,
                                  ${project.color} 70%,
                                  transparent 100%
                                )`,
                            }}
                        ></div>
                        <div
                            key={index}
                            className="h-full flex flex-col gap-2 items-start w-5/6 sm:w-3/4 mx-auto"
                        >
                            <div className="space-y-2">
                                <div className="flex gap-4 items-center">
                                    <h2 className="text-slate-200 sm:text-5xl text-3xl font-semibold">
                                        {project.title}
                                    </h2>
                                    <div className="flex gap-2 items-center">
                                        {project.website && (
                                            <a
                                                href={project.website}
                                                className="text-slate-200 text-2xl sm:text-3xl drop-shadow-lg hover:text-blue-400"
                                            >
                                                <FaExternalLinkAlt />
                                            </a>
                                        )}
                                        <a
                                            href={project.github}
                                            className="text-slate-200 text-2xl sm:text-3xl drop-shadow-lg hover:text-blue-400"
                                        >
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                                <ul className="flex gap-2 items-center flex-wrap">
                                    {project.technologies.map((technology) => (
                                        <li
                                            key={technology}
                                            className="text-xl sm:text-3xl cursor-pointer hover:text-blue-400"
                                            title={technology}
                                        >
                                            <Link
                                                href={
                                                    technologyLinks[technology]
                                                }
                                            >
                                                {technologyIcons[technology]}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <ul className="text-slate-200 text-lg sm:text-2xl drop-shadow-lg space-y-2 flex flex-col gap-2">
                                {project.bulletPoints.map((bullet, index) => (
                                    <li key={index}>
                                        {"• "}
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            <Carousel className="md:w-4/5 w-full mx-auto aspect-video mt-4">
                                {project.image.map((image) => (
                                    <div className="embla__slide" key={image}>
                                        <Image
                                            width={1000}
                                            height={1000}
                                            src={image}
                                            alt={project.description}
                                        ></Image>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
