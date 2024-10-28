import {
    BiLogoTypescript,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoTailwindCss,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { SiTrpc } from "react-icons/si";
import { SiStorybook } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiDrizzle } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { SiFfmpeg } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { SiMysql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

export const technologyLinks = {
    react: "https://reactjs.org/",
    js: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ts: "https://www.typescriptlang.org/",
    tailwind: "https://tailwindcss.com/",
    nextjs: "https://nextjs.org/",
    gql: "https://graphql.org/",
    trpc: "https://trpc.io/",
    storybook: "https://storybook.js.org/",
    kafka: "https://kafka.apache.org/",
    postgresql: "https://www.postgresql.org/",
    nodejs: "https://nodejs.org/",
    drizzle: "https://www.trufflesuite.com/drizzle",
    gcloud: "https://cloud.google.com/",
    ffmpeg: "https://ffmpeg.org/",
    figma: "https://www.figma.com/",
    mysql: "https://www.mysql.com/",
    prisma: "https://www.prisma.io/",
    zustand: "https://github.com/pmndrs/zustand",
    uploadthing: "https://uploadthing.com/",
    java: "https://www.java.com/",
    spring: "https://spring.io/",
    docker: "https://www.docker.com/",
    aws: "https://aws.amazon.com/",
};

export const technologyIcons = {
    react: <BiLogoReact className="h-full w-full text-blue-400" />,
    js: <BiLogoJavascript className="h-full w-full text-yellow-500" />,
    ts: <BiLogoTypescript className="h-full w-full text-blue-600" />,
    tailwind: <BiLogoTailwindCss className="h-full w-full text-cyan-600" />,
    nextjs: <TbBrandNextjs className="h-full w-full text-white" />,
    gql: <GrGraphQl className="h-full w-full text-pink-600" />,
    trpc: <SiTrpc className="h-full w-full text-blue-500" />,
    storybook: <SiStorybook className="h-full w-full text-pink-600" />,
    kafka: <SiApachekafka className="h-full w-full text-white" />,
    postgresql: <BiLogoPostgresql className="h-full w-full text-blue-600" />,
    nodejs: <FaNodeJs className="h-full w-full text-green-600" />,
    drizzle: <SiDrizzle className="h-full w-full text-blue-600" />,
    gcloud: <SiGooglecloud className="h-full w-full text-blue-600" />,
    ffmpeg: <SiFfmpeg className="h-full w-full text-green-600" />,
    figma: <FiFigma className="h-full w-full text-pink-600" />,
    mysql: <SiMysql className="h-full w-full text-blue-600" />,
    prisma: <SiPrisma className="h-full w-full text-white" />,
    java: <FaJava className="h-full w-full text-red-600" />,
    spring: <SiSpring className="h-full w-full text-green-600" />,
    docker: <FaDocker className="h-full w-full text-blue-600" />,
    aws: <FaAws className="h-full w-full text-yellow-600" />,
};

type Technology = keyof typeof technologyIcons;

export const projects: Record<
    string,
    {
        title: string;
        description: string;
        website?: string;
        github: string;
        color: string;
        image: string[];
        technologies: Technology[];
        bulletPoints: React.ReactNode[];
    }
> = {
    vidgen: {
        title: "VidGen",
        color: "#A02B24",
        description:
            "A video generator that creates a video from a list of images.",
        website: "https://vidgen.5vid.net/",
        github: "https://github.com/theobourgeois/VidGen",
        image: ["/vidgen1.png", "/vidgen2.png"],
        technologies: [
            "react",
            "ts",
            "nextjs",
            "trpc",
            "drizzle",
            "gcloud",
            "postgresql",
            "tailwind",
            "ffmpeg",
        ],
        bulletPoints: [
            <>
                <strong>VidGen</strong> is a web-based video generation
                application that enables content creators to automatically
                create short-form video content for platforms like{" "}
                <a href="https://www.tiktok.com/">TikTok</a>,{" "}
                <a href="https://www.instagram.com/">Instagram</a>, and{" "}
                <a href="https://www.youtube.com/">YouTube</a>.
            </>,
            <>
                Built using modern web technologies including{" "}
                <a href={technologyLinks.react}>React</a>,{" "}
                <a href={technologyLinks.ts}>TypeScript</a>, and{" "}
                <a href={technologyLinks.nextjs}>Next.js</a>, to provide a
                seamless user experience for digital content creation.
            </>,
            <>
                Leverages{" "}
                <strong>
                    <a href={technologyLinks.gcloud}>Google Cloud Functions</a>
                </strong>{" "}
                and{" "}
                <strong>
                    <a href={technologyLinks.ffmpeg}>FFmpeg</a>
                </strong>{" "}
                for scalable, efficient video rendering.
            </>,
        ],
    },
    trackrack: {
        title: "TrackRack",
        color: "#5965B8",
        description:
            "A video generator that creates a video from a list of images.",
        github: "https://github.com/theobourgeois/TrackRack",
        image: ["/trackrack.png", "/trackrack2.png"],
        technologies: [
            "react",
            "ts",
            "nextjs",
            "trpc",
            "prisma",
            "mysql",
            "tailwind",
        ],
        bulletPoints: [
            <>
                <strong>TrackRack</strong> is a <em>digital workspace</em> for
                real-time music collaboration, allowing users to share,
                organize, and edit song elements.
            </>,
            <>
                Tracks are organized by type (stems, demos, etc.) and stored in
                projects like albums or EPs, helping musicians improve their
                work through centralized feedback.
            </>,
            <>
                Built using{" "}
                <strong>
                    <a href={technologyLinks.nextjs}>NextJS 14</a>
                </strong>
                ,{" "}
                <strong>
                    <a href={technologyLinks.trpc}>TRPC</a>
                </strong>
                , and{" "}
                <strong>
                    <a href={technologyLinks.prisma}>Prisma</a>
                </strong>
                , with{" "}
                <b>
                    <a href={technologyLinks.uploadthing}>UploadThing</a>
                </b>{" "}
                handling file storage.
            </>,
            <>
                The app enhances collaboration by offering an ergonomic way to
                organize and streamline music creation.
            </>,
        ],
    },
    tsynth: {
        color: "#24334D",
        title: "TSynth",
        description:
            "A video generator that creates a video from a list of images.",
        website: "https://tsynth.netlify.app/",
        github: "https://github.com/theobourgeois/TSynth",
        image: ["/tsynth.png", "/tsynth2.png"],
        technologies: ["react", "ts", "tailwind", "figma"],
        bulletPoints: [
            <>
                <strong>TSynth</strong> is a <em>digital synthesizer</em>{" "}
                developed for the web, featuring two oscillators, an LFO, an
                envelope, and a filter.
            </>,
            <>
                It supports <strong>MIDI device</strong> connectivity, allows
                session recording and download, and offers multiple themes.
            </>,
            <>
                Built with{" "}
                <strong>
                    <a href={technologyLinks.react}>React</a>
                </strong>{" "}
                for the UI and{" "}
                <strong>
                    <a href={technologyLinks.zustand}>Zustand</a>
                </strong>{" "}
                for state management.
            </>,
            <>
                Leverages{" "}
                <em>
                    <a href={technologyLinks.js}>JavaScript Audio Worklets</a>
                </em>{" "}
                for full control over oscillators in the synth engine.
            </>,
        ],
    },
};

export const experience: Record<
    string,
    {
        company: string;
        position: string;
        logo: string;
        startDate: string;
        endDate?: string;
        technologies?: Technology[];
        bulletPoints: React.ReactNode[];
        website: string;
    }
> = {
    reeldata: {
        logo: "reeldata.svg",
        website: "https://reeldata.ai/",
        company: "ReelData",
        position: "Software Engineer",
        startDate: "May 2023",
        endDate: "August 2024",
        technologies: [
            "react",
            "ts",
            "gql",
            "postgresql",
            "java",
            "spring",
            "docker",
            "aws",
            "kafka",
            "nodejs",
            "storybook",
            "figma",
        ],
        bulletPoints: [
            <>
                Developed a complete front-end for a state of the art fish
                counting product using <a href={technologyLinks.react}>React</a>
                , <a href={technologyLinks.ts}>TypeScript</a>, and{" "}
                <a href={technologyLinks.gql}>GraphQL</a>, enabling a{" "}
                <em>functional</em> and <strong>responsive interface</strong> in
                a short time.
            </>,
            <>
                Engineered scalable backend solutions using Java Spring Boot and
                PostgreSQL, achieving full test coverage through comprehensive
                unit and integration testing.
            </>,
            <>
                Built a <a href={technologyLinks.kafka}>Kafka</a> consumer in{" "}
                <a href={technologyLinks.nodejs}>Node.js</a> using{" "}
                <a href={technologyLinks.docker}>Docker</a> to route trajectory
                data to the backend, enabling{" "}
                <em>customized product testing</em>.
            </>,
        ],
    },
    dalhousie: {
        company: "Dalhousie University",
        position: "Tutor & Marker",
        logo: "dal.svg",
        website: "https://www.dal.ca/",
        startDate: "September 2024",
        bulletPoints: [
            <>
                Assessed and graded assignments for an Intro to Web Development
                course, providing detailed feedback to deepen students&apos;
                understanding of core concepts.
            </>,
            <>
                Ensured fair and consistent grading by adhering closely to the
                course rubric and standards.
            </>,
            <>
                Tutored students in computer science at Dalhousie University,
                covering foundational topics like algorithms, data structures,
                and software development practices in one-on-one sessions.
            </>,
        ],
    },
};
