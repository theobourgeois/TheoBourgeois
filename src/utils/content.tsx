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
import { FaNodeJs, FaPython } from "react-icons/fa";
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
    python: "https://www.python.org/",
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
    python: <FaPython className="h-full w-full text-blue-600" />,
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
    dalsearch: {
        color: "#d49e0b",
        title: "DalSearch",
        description:
            "A video generator that creates a video from a list of images.",
        website: "https://dalsearch.app/",
        github: "https://github.com/theobourgeois/DalSearch",
        image: ["/dalsearch1.png", "/dalsearch2.png", "/dalsearch3.png"],
        technologies: ["nextjs", "nodejs", "react", "python", "ts", "tailwind"],
        bulletPoints: [
            <>
                <strong>DalSearch</strong> a web-based search tool that allows
                students to search for courses and retreive information about
                course shedules, professors and more.
            </>,
            <>
                Gathered data from mutliple sources, including{" "}
                <a href="https://dal.ca">Dalhousie University</a>{" "}
                <a href="https://ratemyprofessors.com">Rate my Professors</a>{" "}
                using a{" "}
                <a href={technologyLinks.nodejs}>
                    <b>NodeJs</b>
                </a>{" "}
                and{" "}
                <a href={technologyLinks.python}>
                    <b>Python</b>
                </a>{" "}
                web scraper, and stored it in a JSON file for easy access and
                search.
            </>,
            <>
                Built with{" "}
                <strong>
                    <a href={technologyLinks.nextjs}>NextJS</a>
                </strong>{" "}
                for fast server-side data access, rendering and SEO compliance{" "}
            </>,
            <>
                Maintained an active open-source community, collaborating with a
                host of developers to enhance user experience and functionality.
            </>,
        ],
    },
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
                <strong>TrackRack</strong> is a digital workspace designed for
                real-time music collaboration, enabling users to effortlessly
                share, organize, and edit song elements.
            </>,
            <>
                Tracks are systematically organized by type (stems, demos, etc.)
                and stored within projects such as albums or EPs, empowering
                musicians to enhance their work through centralized feedback.
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
                <strong>
                    <a href={technologyLinks.uploadthing}>UploadThing</a>
                </strong>{" "}
                managing file storage for optimal performance.
            </>,
            <>
                This app boosts collaboration by providing an ergonomic solution
                to organize and streamline the music creation process.
            </>,
        ],
    },
    tgames: {
        color: "#3272D0",
        title: "TGames",
        description: "Games made to teach coding, music concepts and more",
        github: "https://github.com/theobourgeois/TGames",
        image: ["/tgames.png", "/tgames2.png"],
        technologies: ["react", "ts", "tailwind", "nextjs"],
        website: "https://tgames.theobourgeois.com/",
        bulletPoints: [
            <>
                <strong>TGames</strong> is a game platform showcasing
                interactive educational and technology-focused games, designed
                to make learning engaging and fun.
            </>,
            <>
                My collection of <strong>interactive games</strong> spans across
                technology, music, and education, providing users with hands-on
                learning experiences through gamification.
            </>,
            <>
                Each game is thoughtfully crafted to blend{" "}
                <strong>educational content</strong> with entertaining gameplay
                mechanics, making complex concepts accessible and enjoyable for
                players of all skill levels.
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
                <strong>TSynth</strong> is a web-based digital synthesizer that
                features two oscillators, an LFO, an envelope, and a filter for
                diverse sound design.
            </>,
            <>
                It supports MIDI device connectivity, session recording, and
                download capabilities, along with multiple customizable themes.
            </>,
            <>
                Built with{" "}
                <strong>
                    <a href={technologyLinks.react}>React</a>
                </strong>{" "}
                for the user interface and{" "}
                <strong>
                    <a href={technologyLinks.zustand}>Zustand</a>
                </strong>{" "}
                for state management, ensuring a smooth user experience.
            </>,
            <>
                Leverages <strong>JavaScript Audio Worklets</strong> to provide
                full control over oscillators within the synth engine, enhancing
                audio manipulation.
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
                Led front-end development of an enterprise-level fish counting
                application using{" "}
                <strong>
                    <a href={technologyLinks.react}>React.js</a>
                </strong>{" "}
                and{" "}
                <strong>
                    <a href={technologyLinks.ts}>TypeScript</a>
                </strong>
                , implementing responsive design patterns and{" "}
                <strong>
                    <a href={technologyLinks.gql}>GraphQL</a>
                </strong>{" "}
                data integration.
            </>,
            <>
                Engineered scalable backend solutions utilizing{" "}
                <strong>
                    <a href={technologyLinks.spring}>Java Spring Boot</a>
                </strong>{" "}
                and{" "}
                <strong>
                    <a href={technologyLinks.postgresql}>PostgreSQL</a>
                </strong>
                , achieving comprehensive test coverage through rigorous unit
                and integration testing.
            </>,
            <>
                Built a{" "}
                <strong>
                    <a href={technologyLinks.kafka}>Kafka consumer</a>
                </strong>{" "}
                in{" "}
                <strong>
                    <a href={technologyLinks.nodejs}>Node.js</a>
                </strong>{" "}
                with{" "}
                <strong>
                    <a href={technologyLinks.docker}>Docker</a>
                </strong>{" "}
                to route trajectory data to the backend, facilitating customized
                product testing.
            </>,
            <>
                Ensured a type-safe schema for GraphQL queries and mutations by
                leveraging{" "}
                <strong>
                    <a href={technologyLinks.ts}>Postgraphile</a>,
                </strong>
                ensuring data integrity and consistency across the application.
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
                established course rubric and standards.
            </>,
            <>
                Tutored students in computer science at{" "}
                <strong>
                    <a href="https://www.dal.ca/">Dalhousie University</a>
                </strong>
                , covering foundational topics like algorithms, data structures,
                and software development practices through personalized
                one-on-one sessions.
            </>,
        ],
    },
};
