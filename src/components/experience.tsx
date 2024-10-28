import { experience, technologyIcons, technologyLinks } from "@/utils/content";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
    return (
        <section className="w-3/4 mx-auto pt-16" id="experience">
            <h2
                style={{
                    textShadow: "0 0 10px #ffffff90",
                }}
                className="text-slate-200 font-bold text-center text-[13vw] md:text-9xl drop-shadow-lg mb-4"
            >
                Experience
            </h2>
            {Object.values(experience).map((job) => (
                <article key={job.company} className="space-y-4 mb-12">
                    <div className="flex gap-2 items-center flex-wrap">
                        <Image
                            className="w-24"
                            width={500}
                            height={500}
                            src={job.logo}
                            alt={job.company}
                        ></Image>
                        <h3 className="text-slate-200 text-5xl font-semibold">
                            <a href={job.website}>{job.company}</a>
                        </h3>
                    </div>
                    <h4 className="text-slate-200 text-2xl md:text-4xl font-medium italic">
                        {job.position}
                    </h4>
                    <h4 className="text-slate-200 text-2xl">
                        {job.startDate} - {job.endDate ?? "Present"}
                    </h4>

                    <ul className="flex gap-2 items-center">
                        {job.technologies?.map((technology) => (
                            <li
                                key={technology}
                                className="text-3xl cursor-pointer"
                                title={technology}
                            >
                                <Link href={technologyLinks[technology]}>
                                    {technologyIcons[technology]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="text-slate-200 text-2xl drop-shadow-lg space-y-2">
                        {job.bulletPoints.map((bullet, index) => (
                            <li key={index}>
                                {"• "}
                                {bullet}
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    );
}
