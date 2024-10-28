import { projects, technologyIcons, technologyLinks } from "@/utils/content";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Carousel from "./carousel";
import React from "react";
import Canvas3 from "./canvas";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col gap-8 relative h-full">
            <Canvas3 className="w-full h-[25%] -top-[330px] lg:h-[28%] lg:-top-[100px] sm:-top-[300px] md:-top-[200px] absolute"></Canvas3>
            <div className="w-full relative h-[100px] md:h-[200px] lg:h-[600px]"></div>
            {Object.values(projects).map((project, index) => (
                <article className="relative" key={project.color}>
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
                        className="h-full flex flex-col gap-2 items-start w-3/4 mx-auto"
                    >
                        <div className="space-y-2">
                            <div className="flex gap-4 items-center">
                                <h2 className="text-slate-200 text-5xl drop-shadow-lg font-bold">
                                    {project.title}
                                </h2>
                                <div className="flex gap-2 items-center">
                                    {project.website && (
                                        <a
                                            href={project.website}
                                            className="text-slate-200 text-3xl drop-shadow-lg hover:text-blue-400"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                    <a
                                        href={project.github}
                                        className="text-slate-200 text-3xl drop-shadow-lg hover:text-blue-400"
                                    >
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                            <ul className="flex gap-2 items-center">
                                {project.technologies.map((technology) => (
                                    <li
                                        key={technology}
                                        className="text-3xl cursor-pointer"
                                        title={technology}
                                    >
                                        <a href={technologyLinks[technology]}>
                                            {technologyIcons[technology]}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <ul className="text-slate-200 text-2xl drop-shadow-lg space-y-2">
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
        </section>
    );
}
