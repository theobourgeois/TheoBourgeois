import { experience, technologyIcons, technologyLinks } from "@/utils/content";
import Image from "next/image";
import Link from "next/link";
import ExperienceWrapper from "./experience-wrapper";
import { BiCalendar } from "react-icons/bi";

export default function Experience() {
    return (
        <ExperienceWrapper>
            <div className="w-5/6 sm:w-3/4 mx-auto">
                <h2
                    style={{
                        textShadow: "0 0 10px #ffffff90",
                    }}
                    className="text-slate-200 font-bold text-center text-[13vw] md:text-9xl drop-shadow-lg mb-8"
                >
                    Experience
                </h2>
                <div className="space-y-8">
                    {Object.values(experience).map((job) => (
                        <article
                            key={job.company}
                            className="space-y-2 sm:space-y-4"
                        >
                            <div className="flex gap-2 items-center flex-wrap">
                                <Image
                                    className="sm:w-24 w-12"
                                    width={500}
                                    height={500}
                                    src={job.logo}
                                    alt={job.company}
                                ></Image>
                                <h3 className="text-slate-200 sm:text-5xl text-3xl font-semibold">
                                    <a href={job.website}>{job.company}</a>
                                </h3>
                            </div>
                            <h4 className="text-slate-200 text-xl md:text-4xl font-medium italic">
                                {job.position}
                            </h4>
                            <h4 className="text-slate-200 sm:text-2xl text-lg flex items-center gap-2">
                                {<BiCalendar />} {job.startDate} -{" "}
                                {job.endDate ?? "Present"}
                            </h4>

                            <ul className="flex gap-2 items-center flex-wrap">
                                {job.technologies?.map((technology) => (
                                    <li
                                        key={technology}
                                        className="text-xl sm:text-3xl cursor-pointer hover:text-blue-400"
                                        title={technology}
                                    >
                                        <Link
                                            href={technologyLinks[technology]}
                                        >
                                            {technologyIcons[technology]}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="text-slate-200 text-lg sm:text-2xl drop-shadow-lg space-y-2 flex flex-col gap-2">
                                {job.bulletPoints.map((bullet, index) => (
                                    <li key={index}>
                                        {"• "}
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </ExperienceWrapper>
    );
}
