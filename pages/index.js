import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Project from "../components/Project.js";
import BigNavObject from "../components/BigNavObject.js";
import colors from "tailwindcss/colors";
import UserBanner from "../components/UserBanner.js";
import { motion, useScroll } from "framer-motion";
import StationHeader from "../components/StationHeader.js";
import StationNavigator from "../components/StationNavigator.js";
import { CgDarkMode } from "react-icons/cg";
import { Link } from "react-scroll";
import { MdSchool, MdOutlineMail, MdWork } from "react-icons/md";
import { RiLinkedinBoxLine, RiLinkedinFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { SiTokyometro } from "react-icons/si";

const linkedinProfile = "https://www.linkedin.com/in/michele-moro-07a81a21b/";
const githubProfile = "https://github.com/moromichele";
const myEmail = "moro.michele1997@gmail.com";

const lorem = () => {
	return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
};

const projectRainApp = {
	name: "Will it rain",
	liveSite: "https://moromichele.github.io/weather-it-will-rain-react/",
	gitHub: "https://github.com/moromichele/weather-it-will-rain-react",
	desc: "A minimal-accuracy weather app",
	imgSrc: "/rain-screenshot.webp",
	tags: ["React", "API", "Axios"],
	noDark : true,
};

const projectMemoryGame = {
	name: "Memory game",
	liveSite: "https://moromichele.github.io/memory-game-react/",
	gitHub: "https://github.com/moromichele/memory-game-react",
	desc: "A simple memory game",
	imgSrc: "/memory-screenshot.webp",
	tags: ["React", "Game"],
};

const projectPortfolio = {
	name: "Portfolio website",
	quoteDesc: {
		quote: "I've got to get me one of those",
		author: "Me looking at other people's websites",
	},
	gitHub: "https://github.com/moromichele/NextJS-portfolio-w-tailwind",
	imgSrc: "/portfolio-l-screenshot.webp",
	darkImgSrc: "/portfolio-d-screenshot.webp",
	tags: ["NextJS", "Framer-Motion", "Tailwind"],
};

const projectsArray = [projectRainApp, projectMemoryGame, projectPortfolio];

const experienceStation = {
	light: colors.yellow[500],
	dark: colors.yellow[600],
	title: "Education and work experience",
	to: "edu_exp",
};

const projectStation = {
	light: colors.green[500],
	dark: colors.green[600],
	title: "Projects",
	to: "projects",
};

const aboutStation = {
	light: colors.indigo[500],
	dark: colors.indigo[600],
	title: "Informations",
	to: "about",
};

const stationsArray = [experienceStation, projectStation, aboutStation];

export default function Home() {
	const [toggleNightMode, setToggleNightMode] = useState(false);

	const { scrollYProgress } = useScroll();

	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);

	const refArr = [ref1, ref2, ref3];
	const scroll1 = useScroll({
		target: ref1,
		offset: ["start center", "start"],
	});
	const scroll2 = useScroll({
		target: ref2,
		offset: ["start center", "start"],
	});
	const scroll3 = useScroll({
		target: ref3,
		offset: ["start end", "start center"],
	});

	useEffect(() => {
		//defaults to dark/light mode from device
		const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

		setToggleNightMode(defaultDark)
	}, []);

	return (
		<div className={toggleNightMode ? "dark" : ""}>
			<div className="flex flex-col items-center break-words bg-neutral-100 dark:bg-neutral-900">
				<Head>
					<title>Michele Moro - Personal website</title>
					<meta
						name="description"
						content="Personal website, generated by create next app and styled with tailwindcss"
					/>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					></meta>
					<link rel="icon" href="/icon.ico" />
				</Head>

				<header className="sticky top-0 flex items-center justify-end p-5 w-full h-[60px] bg-slate-100 dark:bg-slate-700 z-[2] shadow-lg">
					<motion.div
						style={{
							scaleX: scroll1.scrollYProgress,
							backgroundColor: toggleNightMode
								? experienceStation.dark
								: experienceStation.light,
						}}
						className="fixed top-[20px] left-[2%] h-[20px] w-1/4 origin-[0%] z-[5]"
					/>
					<motion.div
						style={{
							scaleX: scroll2.scrollYProgress,
							backgroundColor: toggleNightMode
								? projectStation.dark
								: projectStation.light,
						}}
						className="fixed top-[20px] left-[27%] h-[20px] w-1/4 origin-[0%] right-0 z-[5]"
					/>
					<motion.div
						style={{
							scaleX: scroll3.scrollYProgress,
							backgroundColor: toggleNightMode
								? aboutStation.dark
								: aboutStation.light,
						}}
						className="fixed top-[20px] left-[52%] h-[20px]  w-1/4 origin-[0%] right-0 z-[5]"
					/>
					<Link
						activeClass="active"
						to={experienceStation.to}
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
						className="cursor-pointer"
						aria-label="Go to experience section"
					>
						<p
							style={{
								borderColor: toggleNightMode
									? experienceStation.dark
									: experienceStation.light,
							}}
							className="desktophover:hover:scale-110 fixed sm:left-[26.5%] left-[25.5%] top-[17px] h-[18px] w-[18px] leading-[18px] rounded-full text-[18px] font-bold bg-white border-[5px] text-center box-content text-black z-[6]"
						>
							{experienceStation.title[0].toUpperCase()}
						</p>
					</Link>
					<Link
						activeClass="active"
						to={projectStation.to}
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
						className="cursor-pointer"
						aria-label="Go to projects section"
					>
						<p
							style={{
								borderColor: toggleNightMode
									? projectStation.dark
									: projectStation.light,
							}}
							className="desktophover:hover:scale-110 fixed sm:left-[51.5%] left-[50.5%] top-[17px] h-[18px] w-[18px] leading-[18px] rounded-full text-[18px] font-bold bg-white border-[5px] border-black text-center box-content text-black z-[6]"
						>
							{projectStation.title[0].toUpperCase()}
						</p>
					</Link>
					<Link
						activeClass="active"
						to={aboutStation.to}
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
						className="cursor-pointer"
						aria-label="Go to informations section"
					>
						<p
							style={{
								borderColor: toggleNightMode
									? aboutStation.dark
									: aboutStation.light,
							}}
							className="desktophover:hover:scale-110 fixed sm:left-[76.5%] left-[75.5%] top-[17px] h-[18px] w-[18px] leading-[18px] rounded-full text-[18px] font-bold bg-white border-[5px] border-black text-center box-content text-black z-[6]"
						>
							{aboutStation.title[0].toUpperCase()}
						</p>
					</Link>
					<div className="fixed bg-slate-900 dark:bg-slate-200 h-[16px] xl:w-[96%] md:w-[94%] w-[90%] top-[22px] left-[2%] z-[3]" />
					<button
						className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 rounded-xl border-black dark:border-white border-2 shadow-[3px_3px_0px_0px_black] desktophover:hover:scale-105 z-[4]"
						onClick={() => {
							setToggleNightMode((s) => !s);
						}}
						aria-label="Toggle night mode"
					>
						<CgDarkMode className="text-[35px]" />
					</button>
				</header>

				<main className="rounded-b-xl max-w-full text-slate-900 dark:text-slate-100  transition-colors duration-500 shadow-[0px_0px_10px_0px_#94a3b8] dark:shadow-sm">
					<div className="xl:w-[1280px] m-[0_auto] min-h-[90vh] bg-slate-50 dark:bg-slate-700">
						<div className="grid md:grid-cols-2 grid-cols-1 max-w-fll md:min-h-[90vh] min-h-[180vh] bg-red-900 dark:bg-red-900">
							<div className="h-full flex flex-col">
								<UserBanner nightMode={toggleNightMode} />
								<nav className="md:h-5/6 h-[85%]">
									<ul className="grid grid-cols-3 h-full">
										{stationsArray.map((s, i) => (
											<BigNavObject
												station={s}
												key={i}
												isDark={toggleNightMode}
											/>
										))}
									</ul>
								</nav>
							</div>
							<div className="font-istok dark:animate-lights  flex items-center justify-center xl:text-9xl lg:text-8xl md:text-7xl sm:text-8xl text-6xl text-white leading-tight dark:[text-shadow:0px_0px_5px_white] bg-red-500 dark:bg-red-700 dark:shadow-[inset_0_0_15px_0px_black]">
								Benvenuti
								<br />
								Welcome
								<br />
								Bienvenue
								<br />
								ようこそ
								<br />
							</div>
						</div>
					</div>

					<div
						ref={ref1}
						id="edu_exp"
						className="border-red-900 border-t-[100px] -mt-[100px] xl:w-[1280px] m-[0_auto] text-stone-700 dark:text-stone-300 bg-stone-200 dark:bg-stone-900"
					>
						<div className="min-h-[90vh]">
							<StationHeader
								station={experienceStation}
								isDark={toggleNightMode}
							/>
							<div className="font-istok grid md:grid-cols-2 gap-4 grid-cols-1 max-w-fll md:min-h-[80vh] min-h-[100vh] p-5">
								<section className="">
									<MdSchool
										size={150}
										className="fill-stone-700 dark:fill-stone-300 mt-5"
									/>
									<div className="w-[80%]">
										<div className="w-[calc(100% + 5px)] h-[10px] bg-stone-700 dark:bg-stone-300 -ml-5" />
										<div
											style={{
												backgroundColor: toggleNightMode
													? experienceStation.dark
													: experienceStation.light,
											}}
											className="w-[calc(100% + 5px)] h-[30px] -ml-5"
										/>

										<div className="mt-5">
											<div className="flex justify-between mb-2">
												<div>
													<div className="text-2xl font-bold">
														Bachelor&apos;s degree
													</div>
													<div className="text-xl">Università di Siena</div>
												</div>
												<div className="h-fill flex items-end  text-right sm:text-5xl text-3xl">
													07-2021
												</div>
											</div>
											<div className="w-full h-[3px] bg-stone-700 dark:bg-stone-300" />
											<div className="w-full lg:text-[45px] text-[30px] text-right">
												Comp. Engineering
											</div>
										</div>
										<p className="text-2xl mt-5 font-thin pl-[5%] text-right">
											The computer engineering curriculum is very similar to
											computer science but with a little less code and a little
											more math and engineering
										</p>
									</div>
								</section>
								<section className="">
									<MdWork
										size={150}
										className="fill-stone-700 dark:fill-stone-300 mt-5 md:mr-0 md:ml-auto"
									/>
									<div className="w-[80%] md:ml-auto">
										<div className="w-[calc(100% + 5px)] h-[10px] bg-stone-700 dark:bg-stone-300 md:-mr-5 md:md-0 md:ml-0 -ml-5" />
										<div
											style={{
												backgroundColor: toggleNightMode
													? experienceStation.dark
													: experienceStation.light,
											}}
											className="w-[calc(100% + 5px)] h-[30px]  md:-mr-5 -ml-5 md:ml-auto"
										/>

										<div className="w-full mt-5 md:mr-auto">
											<div className="flex justify-between mb-2">
												<div className="flex flex-col justify-between">
													<div className="text-2xl font-bold">
														Future Technologies S.r.l
													</div>
													<div className="text-xl">
														Castel del Piano, Italy - Full time
													</div>
												</div>
												<div>
													<div className="h-fill flex items-end sm:text-4xl text-3xl">
														09-2021
													</div>
													<div className="h-fill flex items-end sm:text-4xl text-3xl">
														07-2022
													</div>
												</div>
											</div>
											<div className="w-fill h-[3px] bg-stone-700 dark:bg-stone-300" />
											<div className="w-fill sm:text-[47px] text-[40px] md:text-left text-right">
												Full-stack Developer
											</div>
										</div>
										<p className="text-2xl mt-5 font-thin md:pr-[5%] md:pl-0 pl-[5%] md:text-left text-right">
											Developed a RESTful web app for a client using React with Chakra
											UI, Spring Boot and PostgreSQL
										</p>
										<p className="text-2xl mt-5 font-thin md:pr-[5%] md:pl-0 pl-[5%] md:text-left text-right">
											Maintained and completely restyled the company&apos;s main
											legacy web app <br />
											(GWT, XML, CSS)
										</p>
									</div>
								</section>
							</div>
						</div>
					</div>

					<div
						id={projectStation.to}
						ref={ref2}
						className="xl:w-[1280px] m-[0_auto] bg-neutral-50 dark:bg-neutral-700"
					>
						<StationNavigator
							down={stationsArray.slice(2)}
							isDark={toggleNightMode}
						/>
						<div className="min-h-[90vh]">
							<StationHeader
								station={projectStation}
								isDark={toggleNightMode}
							/>
							<div className="p-4">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch justify-items-stretch">
									{projectsArray.map((p, i) => (
										<Project key={i} prObject={p} isDark={toggleNightMode}/>
									))}
								</div>
							</div>
						</div>
					</div>
					<div
						ref={ref3}
						id={aboutStation.to}
						className="rounded-b-xl xl:w-[1280px] m-[0_auto] bg-slate-50 dark:bg-slate-700 "
					>
						<StationNavigator
							up={[stationsArray[0]]}
							isDark={toggleNightMode}
						/>
						<div className="rounded-b-xl">
							<StationHeader station={aboutStation} isDark={toggleNightMode} />
							<div className="rounded-b-xl py-10 relative grid md:grid-cols-2 gap-4 grid-cols-1 md:grid-rows-[1fr] grid-rows-[1fr_1fr] p-3 bg-slate-100 dark:bg-slate-700">
								<section className="text-center rounded shadow-xl p-6 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-300 z-[1]">
									<div className="relative float float-left rounded-full border-slate-900 overflow-hidden w-[170px] h-[170px] bg-slate-50 dark:bg-slate-200 shadow-[0px_0px_1px_2px_gray] dark:shadow-[0px_0px_1px_2px_black]">
										<Image
											src="/profile_pic.webp"
											alt="picture of me"
											layout="fill"
											className="object-cover lg:object-scale-cover scale-125 translate-y-[10px]"
										/>
									</div>
									<p className="font-istok text-1xl text-right">
										<strong>Hi I&apos;m Michele Moro</strong>, I grew up in a
										small town in the italian region of Tuscany, the one with
										the good looking hills and cypress trees. I&apos;ve always
										been interested in technology, at 14 years old I built my
										first computer and started learning to program in C++ from
										youtube tutorials.
										<br />
										<br />
										<strong>Outside programming</strong>, I have a big passion
										for cars, especially classic race cars. I grew up dreaming
										about becoming a car designer, now I do car photography as a
										hobby.
										<br />I also like to skateboard and to play basketball, even
										though Tuscany is not the best place for both of these
										things.
										<br />
										<br />
										<strong>What&apos;s next?</strong>
										<br />
										I&apos;ve decided to quit my job here in Italy and to move
										outside of the italian countryside. I would like to focus my
										career on the frontend side of web programming, as I found
										it to be the most interesting for me at my last job.
									</p>
								</section>
								<div className=""></div>
								<div
									style={{
										backgroundColor: toggleNightMode
											? aboutStation.dark
											: aboutStation.light,
									}}
									className="top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 absolute w-[80%] md:h-[70%] h-[90%] rounded shadow-lg"
								>
									<div className="font-istok grid md:grid-cols-2 gap-4 grid-cols-1 md:grid-rows-[1fr] grid-rows-[1fr_1fr] h-full">
										<div>
											The cake is a lie. Fun fact: the town I grew up in has
											around 40 people and no shops of any kind.
										</div>
										<div className="h-full md:w-full sm:w-[80%] w-[90%] md:p-3 p-1 text-slate-100 dark:text-slate-300 mx-auto xsm:pt-5 pt-20 flex flex-col justify-around">
											<h1 className="md:text-6xl text-5xl mb-4 text-center">
												Contacts
											</h1>
											<nav>
												<ul className="sm:text-2xl text-[18px] md:space-y-10 sm:space-y-4 space-y-10 font-bold break-all">
													<li className="flex sm:flex-row flex-col gap-2 items-center ">
														<a
															aria-label="Send me an email"
															target="_blank"
															rel="noopener noreferrer"
															href={`mailto:${myEmail}`}
															className="flex sm:flex-row flex-col gap-2 items-center border-l-4 pl-1 border-transparent desktophover:hover:border-white"
														>
															<MdOutlineMail size={50} />
															<address className="not-italic ">
																moro.michele1997@gmail.com
															</address>
														</a>
													</li>
													<li className="flex sm:flex-row flex-col gap-2 items-center ">
														<a
															aria-label="Linked profile link"
															target="_blank"
															rel="noopener noreferrer"
															href={linkedinProfile}
															className="flex sm:flex-row flex-col gap-2 items-center border-l-4 pl-1 border-transparent desktophover:hover:border-white"
														>
															<RiLinkedinBoxLine size={50} />
															<p className="">Linkedin profile</p>
														</a>
													</li>
													<li className="flex sm:flex-row flex-col gap-2 items-center ">
														<a
															aria-label="Github profile link"
															target="_blank"
															rel="noopener noreferrer"
															href={githubProfile}
															className="flex sm:flex-row flex-col gap-2 items-center border-l-4 pl-1 border-transparent desktophover:hover:border-white"
														>
															<FiGithub size={50} />
															<p className="">GitHub moromichele</p>
														</a>
													</li>
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<footer className="mt-20 font-istok min-h-[100px] bg-zinc-300 dark:bg-zinc-800 w-full text-zinc-900 dark:text-zinc-200 p-5 grid sm:grid-rows-2 sm:grid-cols-2 grid-rows-4 grid-cols-1 items-center text-center">
					<p>&copy; 2022, Michele Moro</p>
					<p>
						Created with{" "}
						<a
							href="https://nextjs.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							NextJS
						</a>
						{" / "}
						<a
							href="https://tailwindcss.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							TailwindCSS
						</a>
						{" / "}
						<a
							href="https://www.framer.com/motion/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Framer Motion
						</a>
					</p>

					<p className="flex justify-center gap-1">
						Design inspired by the
						<a
							href="https://www.tokyometro.jp/en/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1"
						>
							Tokyo Metro
							<span className="rounded p-1 bg-cyan-500 dark:bg-cyan-600">
								<SiTokyometro className="fill-white" />
							</span>
						</a>
					</p>
					<p className="flex justify-center gap-4 text-[22px]">
						<a
							href={`mailto:${myEmail}`}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1"
							aria-label="Send me an email"
						>
							<MdOutlineMail className="dark:fill-slate-200 fill-slate-900" />
						</a>
						<a
							href={linkedinProfile}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1"
							aria-label="Linkedin profile link"
						>
							<RiLinkedinFill className="dark:fill-slate-200 fill-slate-900" />
						</a>
						<a
							href={githubProfile}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1"
							aria-label="Github profile link"
						>
							<FiGithub className="dark:text-slate-200 text-slate-900 fill-none" />
						</a>
					</p>
				</footer>
			</div>
		</div>
	);
}
