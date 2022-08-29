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

const lorem = () => {
	return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
};

const projectRainApp = {
	name: "Will it rain",
	liveSite: "https://moromichele.github.io/weather-it-will-rain-react/",
	gitHub: "https://github.com/moromichele/weather-it-will-rain-react",
	desc: "A minimal-accuracy weather app",
	imgSrc: "/rain-screenshot.webp",
	tags: ["React", "API", "Axios"]
};

const projectMemoryGame = {
	name: "Memory game",
	liveSite: "https://moromichele.github.io/memory-game-react/",
	gitHub: "https://github.com/moromichele/memory-game-react",
	desc: "A simple memory game",
	imgSrc: "/memory-screenshot.webp",
	tags: ["React", "Game"]
};

const projectPortfolio = {
	name: "Portfolio website",
	desc: "This website",
	imgSrc: "/portfolio-screenshot.webp",
	tags: ["NextJS", "Framer-Motion", "Tailwind"]
};

export default function Home() {
	const [toggleNightMode, setToggleNightMode] = useState(false);

	const { scrollYProgress } = useScroll();

	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);

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
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (event) => {
				const colorScheme = event.matches ? true : false; //true: its dark mode
				setToggleNightMode(colorScheme);
			});
	}, []);

	return (
		<div className={toggleNightMode ? "dark" : ""}>
			<div className="flex flex-col items-center break-words bg-slate-100 dark:bg-slate-900">
				<Head>
					<title>Create Next App</title>
					<meta name="description" content="Generated by create next app" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					></meta>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<header className="sticky top-0 flex items-center justify-end p-5 w-full h-[60px] bg-slate-100 dark:bg-slate-700 z-[2] shadow-lg">
					<motion.div
						style={{ scaleX: scroll1.scrollYProgress }}
						className="fixed top-[20px] left-[2%] h-[20px] w-1/4 bg-amber-400 dark:bg-amber-500 origin-[0%] z-[5]"
					/>
					<motion.div
						style={{ scaleX: scroll2.scrollYProgress }}
						className="fixed top-[20px] left-[27%] h-[20px] w-1/4 bg-green-500 dark:bg-green-600 origin-[0%] right-0 z-[5]"
					/>
					<motion.div
						style={{ scaleX: scroll3.scrollYProgress }}
						className="fixed top-[20px] left-[52%] h-[20px]  w-1/4 bg-fuchsia-500 dark:bg-fuchsia-600 origin-[0%] right-0 z-[5]"
					/>
					<Link
						activeClass="active"
						to="edu_exp"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
						className="cursor-pointer"
					>
						<p className="fixed sm:left-[26.5%] left-[25.5%] top-[20px] h-[18px] w-[18px] leading-[18px] rounded-full text-[18px] font-bold bg-white border-[1px] border-black text-center box-content text-black z-[6]">
							E
						</p>
					</Link>
					<Link
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
						className="cursor-pointer"
					>
						<p className="fixed sm:left-[51.5%] left-[50.5%] top-[20px] h-[18px] w-[18px] leading-[18px] rounded-full text-[18px] font-bold bg-white border-[1px] border-black text-center box-content text-black z-[6]">
							P
						</p>
					</Link>
					<Link
						activeClass="active"
						to="infos"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
						className="cursor-pointer"
					>
						<p className="fixed sm:left-[76.5%] left-[75.5%] top-[20px] h-[18px] w-[18px] leading-[18px] rounded-full text-[18px] font-bold bg-white border-[1px] border-black text-center box-content text-black z-[6]">
							A
						</p>
					</Link>
					<div className="fixed bg-slate-900 dark:bg-slate-200 h-[20px] xl:w-[96%] md:w-[94%] w-[90%] top-[20px] left-[2%] z-[3]" />
					<button
						className="bg-slate-50 dark:bg-slate-900 text-black dark:text-white rounded-xl border-black dark:border-white border-2 shadow-[3px_3px_0px_0px_black] hover:scale-105 z-[4]"
						onClick={() => {
							setToggleNightMode((s) => !s);
						}}
					>
						<CgDarkMode className="text-[35px]" />
					</button>
				</header>

				<main className="2xl:w-[1536px] max-w-full text-slate-900 dark:text-slate-100  transition-colors duration-500">
					<div className="xl:w-[1280px] m-[0_auto] text-black dark:text-white min-h-[90vh] bg-slate-50 dark:bg-slate-700">
						<div className="grid md:grid-cols-2 grid-cols-1 max-w-fll md:min-h-[90vh] min-h-[180vh]">
							<div className="h-full flex flex-col">
								<UserBanner nightMode={toggleNightMode} />
								<nav className="md:h-5/6 h-[85%]">
									<ul className="grid grid-cols-3 h-full">
										<BigNavObject
											title="Education and work experience"
											light={colors.amber[400]}
											dark={colors.amber[500]}
											isDark={toggleNightMode}
											to="edu_exp"
										/>
										<BigNavObject
											title="Projects"
											light={colors.green[500]}
											dark={colors.green[600]}
											to="projects"
											isDark={toggleNightMode}
										/>
										<BigNavObject
											title="About me"
											light={colors.fuchsia[500]}
											dark={colors.fuchsia[600]}
											to="infos"
											isDark={toggleNightMode}
										/>
									</ul>
								</nav>
							</div>
							<div className="dark:animate-lights  flex items-center justify-center xl:text-9xl lg:text-8xl md:text-7xl sm:text-8xl text-6xl text-white leading-tight subpixel-antialiased dark:[text-shadow:0px_0px_7px_white] bg-red-500 dark:bg-red-700">
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
						className="xl:w-[1280px] m-[0_auto] text-black dark:text-white bg-slate-50 dark:bg-slate-700"
					>
						<StationNavigator />
						<div className="min-h-[90vh]">
							<StationHeader
								title="Education and work experience"
								light={colors.amber[400]}
								dark={colors.amber[500]}
								isDark={toggleNightMode}
							/>
							<div className="grid md:grid-cols-2 gap-4 grid-cols-1 max-w-fll md:min-h-[80vh] min-h-[100vh] p-4">
								<section className="">
									<h2 className="text-7xl">Education</h2>
									<p className="text-5xl">
										Bachelor&apos;s degree in computer engineering at the
										University of Siena, Italy
										<br />
										Graduated in July 2021
									</p>
									<Image
										src="/computer_kurayami_man.webp"
										alt="man at a computer at night"
										width="100"
										height="100"
										className="float-right"
									/>
								</section>
								<section className="">
									<h2 className="text-7xl">Work experience</h2>
									<p className="text-5xl">
										Junior full stack developer from october 2021 to july 2022
									</p>
									<Image
										src="/computer_kurayami_man.webp"
										alt="man at a computer at night"
										width="100"
										height="100"
									/>
								</section>
							</div>
						</div>
					</div>

					<div
						id="projects"
						ref={ref2}
						className="xl:w-[1280px] m-[0_auto] bg-slate-50 dark:bg-slate-700"
					>
						<StationNavigator />
						<div className="min-h-[90vh]">
							<StationHeader
								title="Projects"
								light={colors.green[500]}
								dark={colors.green[600]}
								isDark={toggleNightMode}
							/>
							<div className="p-4">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch justify-items-stretch">
									<Project prObject={projectRainApp} oneD />
									<Project prObject={projectMemoryGame} oneD />
									<Project prObject={projectPortfolio} />
								</div>
							</div>
						</div>
					</div>
					<div
						ref={ref3}
						id="infos"
						className="xl:w-[1280px] m-[0_auto] bg-slate-50 dark:bg-slate-700"
					>
						<StationNavigator />
						<div className="min-h-[80vh]">
							<StationHeader
								title="About me"
								light={colors.fuchsia[500]}
								dark={colors.fuchsia[600]}
								isDark={toggleNightMode}
							/>
							<div className="grid md:grid-cols-2 gap-4 grid-cols-1 max-w-fll md:min-h-[80vh] min-h-[100vh] p-4">
								<section className="text-center">
									<h2 className="text-7xl">Foto mia</h2>
									<p className="text-5xl">
										im from italy i like classic cars and skateboarding
										<br />
										
									</p>
								</section>
								<section className="text-center">
									<h2 className="text-7xl">Contacts</h2>
									<p className="text-5xl">
										lista puntata con icone
									</p>
									
								</section>
							</div>
						</div>
					</div>
				</main>
				<footer className="min-h-[100px] bg-red-500 w-full">ci vuole un footer fatto con nextjs</footer>
			</div>
		</div>
	);
}
