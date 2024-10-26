import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { renderCanvas1, renderCanvas2 } from "./utils/render";
import { Font, renderCodeCanvas } from "./utils/textincode";
import { RiColorFilterLine } from "react-icons/ri";
import {
    experience,
    projects,
    technologyIcons,
    technologyLinks,
} from "./utils/content";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
    FaEnvelope,
    FaExternalLinkAlt,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import renderCanvas, { useWindowDimensions } from "./utils/custom-hooks";

const colorThemes = {
    fade: [
        [255, 0, 0],
        [255, 165, 0],
        [238, 130, 238],
    ],

    ocean: [
        [0, 105, 148],
        [0, 168, 232],
        [0, 204, 255],
        [0, 255, 255],
        [102, 255, 255],
    ],

    bluegreen: [
        [0, 240, 0],
        [0, 165, 240],
        [0, 130, 238],
    ],

    rainbow: [
        [255, 0, 0], // Red
        [255, 127, 0], // Orange
        [255, 255, 0], // Yellow
        [0, 255, 0], // Green
        [0, 0, 255], // Blue
        [75, 0, 130], // Indigo
        [148, 0, 211], // Violet
    ],
};
function App() {
    const [colorTheme, setColorTheme] =
        useState<keyof typeof colorThemes>("fade");
    const canvas1Ref = useRef<HTMLCanvasElement>(null);
    const canvas2Ref = useRef<HTMLCanvasElement>(null);
    const canvas3Ref = useRef<HTMLCanvasElement>(null);

    const dimensions = useWindowDimensions();
    const isMobile = dimensions.width < 600;

    const containerRef = useRef<HTMLDivElement>(null);

    const handleColorChange = () => {
        setColorTheme((prev) => {
            const keys = Object.keys(colorThemes);
            const index = keys.indexOf(prev);
            const nextIndex = (index + 1) % keys.length;
            return keys[nextIndex] as keyof typeof colorThemes;
        });
    };

    // Render Canvas1
    renderCanvas(
        canvas1Ref,
        (ctx, width, height) => {
            renderCanvas1(ctx, width, height, colorThemes[colorTheme]);
        },
        dimensions.width,
        dimensions.height,
        [colorTheme, isMobile, dimensions],
        isMobile ? 100000 : 10
    );

    // Render Canvas2
    renderCanvas(
        canvas2Ref,
        (ctx, width, height) => {
            renderCanvas2(ctx, width, height, colorThemes[colorTheme]);
        },
        dimensions.width,
        dimensions.height,
        [colorTheme, isMobile, dimensions],
        400
    );

    // Render Canvas3
    renderCanvas(
        canvas3Ref,
        (ctx, width, height) => {
            const fontSize = dimensions.width / 100;
            renderCodeCanvas(
                ctx,
                fontSize,
                Font.Monaco,
                "My Projects",
                width,
                height,
                colorThemes[colorTheme]
            );
        },
        dimensions.width,
        dimensions.height,
        [colorTheme, dimensions, isMobile],
        isMobile ? 10000 : 200
    );

    return (
        <div
            ref={containerRef}
            className="bg-slate-950 poppins-regular min-h-screen w-screen"
            style={{
                background: `linear-gradient(
              to bottom,
              rgb(2 6 23) 95%,
              rgba(${colorThemes[colorTheme][2].join(",")}, 0.4)
              )`,
            }}
        >
            <canvas
                className="absolute top-0 left-0 z-0 grayscale-[20%] w-full h-full"
                ref={canvas1Ref}
            ></canvas>
            <canvas
                style={{
                    top: window.innerHeight,
                }}
                className="absolute w-full "
                ref={canvas2Ref}
            ></canvas>
            <motion.canvas
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    top:
                        window.innerHeight * 2 -
                        (dimensions.width < 600 ? 350 : 200),
                    display: isMobile ? "none" : "block",
                }}
                className="absolute w-full"
                ref={canvas3Ref}
            ></motion.canvas>
            <header className="relative z-20 p-4 flex justify-between h-44">
                <div className="flex flex-col gap-2">
                    <h1 className="text-white text-7xl font-semibold">
                        <a className="hover:no-underline" href="/">
                            Théo Bourgeois
                        </a>
                    </h1>
                    <nav className="flex items-center space-x-2 md:space-x-4 font-medium">
                        <a href="#about" className="text-white">
                            About me
                        </a>
                        <a href="#experience" className="text-white">
                            Experience
                        </a>
                        <a href="#projects" className="text-white">
                            Projects
                        </a>
                        <a href="#footer" className="text-white">
                            Contact me
                        </a>
                    </nav>
                </div>
                <RiColorFilterLine
                    className="text-white text-4xl cursor-pointer rounded-md mx-2 absolute top-2 right-0"
                    style={{
                        background: `linear-gradient(
                      to right,
                      rgb(${colorThemes[colorTheme][0].join(",")}),
                      rgb(${colorThemes[colorTheme][1].join(",")}),
                      rgb(${colorThemes[colorTheme][2].join(",")})
                      )`,
                    }}
                    onClick={handleColorChange}
                />
            </header>
            <main className="w-3/4 mx-auto">
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-md flex flex-col relative z-20 gap-4 justify-center h-[calc(100vh-176px)]"
                >
                    <div className="w-max">
                        <motion.div
                            className="inset-0 w-48 h-48 rounded-full bg-gradient-to-r p-8 flex justify-center items-center"
                            style={{
                                filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))",
                            }}
                            animate={{
                                background: `linear-gradient(
                                to right,
                                rgb(${colorThemes[colorTheme][0].join(",")}),
                                rgb(${colorThemes[colorTheme][1].join(",")}),
                                rgb(${colorThemes[colorTheme][2].join(",")})
                            )`,
                            }}
                        >
                            <img
                                src="/profile.png"
                                className="absolute rounded-full w-44 h-44 object-cover"
                                alt="Profile picture"
                            />
                        </motion.div>
                    </div>
                    <div>
                        <h2 className="text-slate-200 text-2xl md:text-3xl drop-shadow-lg">
                            <b className="text-[44px] md:text-6xl">
                                Hi, my name is Théo!
                            </b>
                            <br></br> I'm a <b>Software Engineer</b> based in{" "}
                            <b>Halifax Nova Scotia, Canada</b>.
                        </h2>
                    </div>
                    <div className="mt-12 mx-auto">
                        <a href="#about">
                            <IoIosArrowDown className="text-white text-5xl animate-bounce" />
                        </a>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1 }}
                    className="rounded-md relative z-20 h-screen flex items-center"
                    id="about"
                >
                    <div className="p-8 drop-shadow-2xl space-y-2">
                        <h2 className="text-slate-200 text-7xl text-center drop-shadow-lg font-bold">
                            About me
                        </h2>
                        <h3 className="text-slate-200 text-[5vw] md:text-3xl text-center drop-shadow-lg ">
                            I love making creative and innovative projects. I'm
                            passionate about learning new technologies and
                            building cool stuff. I'm currently a student at
                            Dalhousie University studying Computer Science. I'm
                            always looking for new opportunities to learn and
                            grow as a developer.
                        </h3>
                    </div>
                </motion.section>

                {!isMobile && (
                    <div
                        id="projects"
                        style={{
                            height:
                                window.innerHeight -
                                (dimensions.width < 600 ? 750 : 400),
                        }}
                    ></div>
                )}

                <motion.section
                    id={isMobile ? "projects" : ""}
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {isMobile && (
                        <h2
                            className="text-7xl text-center h-44 flex w-full items-center justify-center font-bold"
                            style={{
                                background: `linear-gradient(
                            to right,
                            rgb(${colorThemes[colorTheme][0].join(",")}),
                            rgb(${colorThemes[colorTheme][1].join(",")}),
                            rgb(${colorThemes[colorTheme][2].join(",")})
                        )`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                padding: "0 1rem",
                                overflow: "visible",
                                textShadow: `0 0 10px rgba(${colorThemes[
                                    colorTheme
                                ][0].join(",")}, 0.7), 
                                             0 0 10px rgba(${colorThemes[
                                                 colorTheme
                                             ][1].join(",")}, 1), 
                                             0 0 10px rgba(${colorThemes[
                                                 colorTheme
                                             ][2].join(",")}, 1),
                                             0 0 10px rgba(0, 0, 0, 1)`,
                                fontFamily: Font.Monaco,
                            }}
                        >
                            MY PROJECTS
                        </h2>
                    )}
                    {Object.values(projects).map((project, index) => (
                        <motion.div
                            viewport={{ once: true }}
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="w-full h-full flex flex-col gap-2 items-start relative z-20"
                        >
                            <motion.div
                                className="absolute w-screen h-full -left-[17%]"
                                animate={{
                                    background: `linear-gradient(
                                  to bottom,
                                  transparent 30%,
                                  ${project.color} 70%,
                                  transparent 90%
                                )`,
                                }}
                            ></motion.div>
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
                                            <a
                                                href={
                                                    technologyLinks[technology]
                                                }
                                            >
                                                {technologyIcons[technology]}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <ul className="text-slate-200 text-2xl drop-shadow-lg space-y-2">
                                {project.bulletPoints.map((bullet) => (
                                    <li
                                        dangerouslySetInnerHTML={{
                                            __html: "• " + bullet,
                                        }}
                                        key={bullet}
                                    ></li>
                                ))}
                            </ul>

                            <Carousel className="md:w-4/5 w-full mx-auto aspect-video mt-4">
                                {project.image.map((image) => (
                                    <div key={image}>
                                        <img
                                            src={image}
                                            alt={project.title}
                                        ></img>
                                    </div>
                                ))}
                            </Carousel>
                        </motion.div>
                    ))}
                </motion.section>
                <motion.section
                    id="experience"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1 }}
                    className="rounded-md relative z-20 flex flex-col gap-4"
                >
                    <h2 className="text-slate-200 font-bold text-center text-[13vw] md:text-9xl drop-shadow-lg">
                        Experience
                    </h2>
                    {Object.values(experience).map((job) => (
                        <motion.div
                            key={job.company}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            className="space-y-4 mb-12"
                        >
                            <div className="flex gap-2 items-center flex-wrap">
                                <img
                                    className="w-24"
                                    src={job.logo}
                                    alt={job.company}
                                ></img>
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
                                        <a href={technologyLinks[technology]}>
                                            {technologyIcons[technology]}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="text-slate-200 text-2xl drop-shadow-lg space-y-2">
                                {job.bulletPoints.map((bullet) => (
                                    <li
                                        dangerouslySetInnerHTML={{
                                            __html: "• " + bullet,
                                        }}
                                        key={bullet}
                                    ></li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.section>

                <footer id="footer" className="text-slate-200 p-8 mt-24">
                    <div className="flex flex-col items-center space-y-4 drop-shadow-lg">
                        <h2 className="text-4xl font-semibold">
                            Théo Bourgeois
                        </h2>
                        <p className="text-xl">Software Engineer</p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/theobourgeois"
                                className="text-3xl hover:text-blue-400"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="mailto:theoobourgeois@gmail.com"
                                className="text-3xl hover:text-blue-400"
                            >
                                <FaEnvelope />
                            </a>
                            <a
                                href="https://twitter.com/_theobourgeois"
                                className="text-3xl hover:text-blue-400"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://github.com/theobourgeois"
                                className="text-3xl hover:text-blue-400"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.youtube.com/c/theobourgeois"
                                className="text-3xl hover:text-blue-400"
                            >
                                <FaYoutube />
                            </a>
                        </div>

                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Théo Bourgeois.
                            All rights reserved.
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default App;
