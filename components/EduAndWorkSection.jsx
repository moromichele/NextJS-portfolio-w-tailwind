import { MdSchool, MdWork } from "react-icons/md"
import { StationHeader } from "/components/StationHeader"
import { experienceStation } from "../constants"
import { useTheme } from "../context/ThemeContext"
import { WorkExperience } from "./WorkExperience"

const WORK_EXPERIENCES = [
	{
		title: "Full stack Developer",
		location: "Prague, Czech Republic - Full time",
		company: "Emplifi inc.",
		url: "https://www.emplifi.io/",
		date: "02-2023",
		endDate: "Present",
		urlAriaLabel: "Link to Emplifi's website",
		descriptionParagraphs: [
			<>
				Utilized <span>TypeScript + React</span> on frontend and{" "}
				<span>Node</span> on backend to help maintain and develop new features
				on a large enterprise-level social media management platform
			</>,
			<>
				Worked as part of a small <span>Agile</span> team, following the{" "}
				<span>Scrum</span> methodology, directly collaborating with project
				managers, product owners, designers and other teams in case of
				company-wide initiatives
			</>,
		],
	},
	{
		title: "Full stack Developer",
		location: "Castel del Piano, Italy - Full time",
		company: "Future Technologies S.r.l",
		url: "https://www.ftonweb.com/",
		date: "09-2021",
		endDate: "07-2022",
		urlAriaLabel: "Link to Future Technologies S.r.l website",
		descriptionParagraphs: [
			<>
				Developed a RESTful web app for a client using <span>React</span> with
				Chakra UI, Spring Boot and PostgreSQL
			</>,
			<>
				Maintained and completely restyled the company&apos;s main legacy web
				app <br />
				(GWT, XML, CSS)
			</>,
		],
	},
]

export function EduAndWorkSection({ scrollRef }) {
	const { isDarkMode } = useTheme()

	return (
		<div
			ref={scrollRef}
			id="edu_exp"
			className="border-red-900 border-t-[100px] -mt-[100px] xl:w-[1280px] m-[0_auto] text-stone-700 dark:text-stone-300 bg-stone-200 dark:bg-stone-900"
		>
			<div className="min-h-[90vh]">
				<StationHeader
					title={experienceStation.title}
					color={experienceStation.getColorByTheme(isDarkMode)}
				/>
				<div className="grid md:grid-cols-2 gap-4 grid-cols-1 max-w-fll md:min-h-[80vh] min-h-[100vh] p-5">
					<section>
						<MdWork
							size={150}
							className="fill-stone-700 dark:fill-stone-300 mt-5"
						/>
						{WORK_EXPERIENCES.map((workExp) => (
							<WorkExperience key={workExp.company+"%"+workExp.date} {...workExp} />
						))}
					</section>
					<section>
						<MdSchool
							size={150}
							className="fill-stone-700 dark:fill-stone-300 mt-5 mr-0 ml-auto"
						/>
						<div className="w-[80%] ml-auto mb-[30px]">
							<div className="w-[calc(100% + 5px)] h-[10px] bg-stone-700 dark:bg-stone-300 -mr-5 md-0 ml-0 -ml-5" />
							<div
								style={{
									backgroundColor:
										experienceStation.getColorByTheme(isDarkMode),
								}}
								className="w-[calc(100% + 5px)] h-[30px]  -mr-5 -ml-5 ml-auto"
							/>

							<a
								className="w-full mt-5 mr-auto block"
								href="https://www.unisi.it/"
								target="_blank"
								rel="noreferrer"
								aria-label="Link to Università di Siena's website"
							>
								<div className="flex justify-between mb-2">
									<div className="flex flex-col justify-between">
										<div className="text-2xl font-bold">Bachelor&apos;s degree</div>
										<div className="text-xl">Università di Siena</div>
									</div>
									<div>
										<div className="xl:text-5xl md:text-4xl sm:text-5xl text-3xl">
											07-2021
										</div>
									</div>
								</div>
								<div className="w-fill h-[3px] bg-stone-700 dark:bg-stone-300" />
								<div className="w-fill sm:text-[47px] text-[40px]">
									Computer Engineering
								</div>

								<p className="text-2xl mt-5 font-thin [&>span]:font-semibold text-left">
									<span>Thesis title</span>: Using NLP libraries in python to
									analyze the grammatical structure of crosswords puzzles.
								</p>
							</a>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
