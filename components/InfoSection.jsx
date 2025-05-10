import { aboutStation } from "../constants"
import { StationHeader } from "/components/StationHeader"
import { MY_EMAIL, LINKEDIN_PROFILE, GITHUB_PROFILE } from "../constants"
import { MdOutlineMail } from "react-icons/md"
import { RiLinkedinBoxLine } from "react-icons/ri"
import { FiGithub } from "react-icons/fi"
import Image from "next/image"
import { useTheme } from "../context/ThemeContext"

export function InfoSection({ scrollRef }) {
	const { isDarkMode } = useTheme()

	return (
		<div
			ref={scrollRef}
			id={aboutStation.to}
			className="rounded-b-xl xl:w-[1280px] m-[0_auto] bg-slate-50 dark:bg-slate-700 "
		>
			<div className="rounded-b-xl">
				<StationHeader
					title={aboutStation.title}
					color={aboutStation.getColorByTheme(isDarkMode)}
				/>
				<div className="rounded-b-xl py-10 relative grid md:grid-cols-2 gap-4 grid-cols-1 md:grid-rows-[1fr] grid-rows-[1fr_1fr] p-3 bg-slate-100 dark:bg-slate-700">
					<section className="text-center rounded shadow-xl p-6 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-300 z-[1]">
						<div className="relative float float-left rounded-full border-slate-900 overflow-hidden w-[170px] h-[170px] bg-slate-50 dark:bg-slate-200 shadow-[0px_0px_1px_2px_gray] dark:shadow-[0px_0px_1px_2px_black]">
							<Image
								src="/profile_pic.webp"
								alt="picture of me"
								className="object-cover lg:object-scale-cover scale-125 translate-y-[10px]"
								sizes="170px"
								fill
							/>
						</div>
						<p className="text-1xl text-right">
							<strong>Hi I&apos;m Michele Moro</strong>, I grew up in a small
							town in the italian region of Tuscany, the one with the good
							looking hills and cypress trees. I&apos;ve always been interested
							in technology, at 14 years old I built my first computer and
							started learning to program in C++ from youtube tutorials.
							
							<br />
							<br />
							After graduating and a nine months work experience in Italy, I decided to move abroad and I&apos;ve been working as a Full Stack developer in the beautiful city of Prague, Czech Republic, since 2023.
							<br />
							<br />
							<strong>Outside programming</strong>, I have a big passion for
							cars, especially classic race cars. I grew up dreaming about
							becoming a car designer, now I do car photography as a hobby.
							<br />I also like to skateboard, playing basketball and I study Japanese in my free time.
							<br />
							<br />
						</p>
					</section>
					<div />
					<div
						style={{
							backgroundColor: aboutStation.getColorByTheme(isDarkMode),
						}}
						className="top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 absolute w-[80%] md:h-[70%] h-[90%] rounded shadow-lg"
					>
						<div className="grid md:grid-cols-2 gap-4 grid-cols-1 md:grid-rows-[1fr] grid-rows-[1fr_1fr] h-full">
							<div>
								The cake is a lie. Fun fact: the town I grew up in has a
								population of around 40 people and no shops of any kind.
							</div>
							<div className="h-full md:w-full sm:w-[80%] w-[90%] md:p-3 p-1 text-slate-100 dark:text-slate-300 mx-auto xsm:pt-5 pt-20 flex flex-col justify-around">
								<h1 className="md:text-6xl text-5xl mb-4 text-center">
									Contacts
								</h1>
								<nav>
									<ul className="flex flex-col sm:text-2xl text-[18px] gap-3 font-bold break-all">
										<li className="flex sm:flex-row flex-col gap-2 items-center ">
											<a
												aria-label="Send me an email"
												target="_blank"
												rel="noopener noreferrer"
												href={`mailto:${MY_EMAIL}`}
												className="flex sm:flex-row flex-col gap-2 items-center border-l-4 pl-1 border-transparent desktophover:hover:border-white desktophover:hover:text-white"
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
												href={LINKEDIN_PROFILE}
												className="flex sm:flex-row flex-col gap-2 items-center border-l-4 pl-1 border-transparent desktophover:hover:border-white desktophover:hover:text-white"
											>
												<RiLinkedinBoxLine size={50} />
												<p>Linkedin profile</p>
											</a>
										</li>
										<li className="flex sm:flex-row flex-col gap-2 items-center ">
											<a
												aria-label="Github profile link"
												target="_blank"
												rel="noopener noreferrer"
												href={GITHUB_PROFILE}
												className="flex sm:flex-row flex-col gap-2 items-center border-l-4 pl-1 border-transparent desktophover:hover:border-white desktophover:hover:text-white"
											>
												<FiGithub size={50} />
												<p>GitHub moromichele</p>
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
	)
}
