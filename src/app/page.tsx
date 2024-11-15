import About from "@/components/about";
import { Canvas1 } from "@/components/canvas";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import { ProfilePic } from "@/components/profile-pic";
import Projects from "@/components/projects";
import ThemeButton from "@/components/theme-button";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Canvas1 className="absolute top-0 left-0 w-full h-full z-0"></Canvas1>
      <header className="p-4 flex flex-col gap-24 h-screen">
        <div className="flex justify-between z-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-7xl font-semibold">
              <Link className="hover:no-underline" href="/">
                Théo Bourgeois
              </Link>
            </h1>
            <nav className="flex items-center space-x-2 md:space-x-4 font-medium">
              <Link href="#about" className="text-white">
                About me
              </Link>
              <Link href="#experience" className="text-white">
                Experience
              </Link>
              <Link href="#projects" className="text-white">
                Projects
              </Link>
              <Link href="#footer" className="text-white">
                Contact me
              </Link>
            </nav>
          </div>
          <ThemeButton />
        </div>

        <section className="w-3/4 mx-auto space-y-4">
          <ProfilePic>
            <Image
              width={500}
              height={500}
              src="/profile.png"
              className="absolute rounded-full w-44 h-44 object-cover select-none z-10"
              alt="Théo Bourgeois - Software Engineer in Halifax"
            ></Image>
          </ProfilePic>
          <div>
            <h2 className="text-slate-200 text-[38px] md:text-6xl font-bold drop-shadow-lg">
              Hi, my name is Théo!
            </h2>
            <h3 className="text-slate-200 text-2xl md:text-3xl drop-shadow-lg">
              I&apos;m a <b>Fullstack Software Engineer</b> based
              in <b>Halifax Nova Scotia, Canada</b>
            </h3>
          </div>
          <div className="mt-12 mx-auto w-full flex justify-center">
            <a href="#about">
              <IoIosArrowDown className="text-white text-5xl animate-bounce" />
            </a>
          </div>
        </section>
      </header>
      <main>
        <About />
        <Experience />
        <Projects />
        <Footer>
          <div className="flex flex-col items-center space-y-4 drop-shadow-lg">
            <h2 className="text-4xl font-semibold text-center">
              Théo Bourgeois
            </h2>
            <p className="text-xl">Software Engineer</p>
            <a href="https://gallery.theobourgeois.com" className="text-2xl mt-2">
              Photo Gallery
            </a>
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
            </div>

            <p className="text-sm text-center">
              &copy; {new Date().getFullYear()} Théo Bourgeois.
              All rights reserved.
            </p>
          </div>
        </Footer>
      </main >
    </>
  );
}
