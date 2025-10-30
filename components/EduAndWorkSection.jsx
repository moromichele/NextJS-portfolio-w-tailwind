import { MdSchool, MdWork } from "react-icons/md"
import { StationHeader } from "/components/StationHeader"
import { experienceStation } from "../constants"
import { useTheme } from "../context/ThemeContext"
import { WorkExperience } from "./WorkExperience"
import { WORK_EXPERIENCES } from "../constants"

export function EduAndWorkSection({ scrollRef }) {
	const { isDarkMode } = useTheme()

	return (
		<div
			ref={scrollRef}
			id={experienceStation.scrollID}
			className="border-red-900 xl:w-[1280px] m-[0_auto] text-stone-700 dark:text-stone-300 bg-stone-200 dark:bg-stone-900"
		>
			<StationHeader
				title={experienceStation.title}
				color={experienceStation.getColorByTheme(isDarkMode)}
			/>
			<div className="grid md:grid-cols-2 grid-cols-1 max-w-fll md:min-h-[80vh] min-h-[100vh]">
				<section>
					<MdWork
						size={150}
						className="fill-stone-700 dark:fill-stone-300 mt-5 ml-3"
					/>
					{WORK_EXPERIENCES.map((workExp) => (
						<WorkExperience
							key={workExp.company + "%" + workExp.date}
							{...workExp}
						/>
					))}
				</section>
				<section>
					<MdSchool
						size={150}
						className="fill-stone-700 dark:fill-stone-300 mt-5 mr-3 ml-auto"
					/>
					<div className="md:w-[85%] w-[95%] ml-auto">
						<div className="w-[calc(100% + 5px)] h-[10px] bg-stone-700 dark:bg-stone-300 md-0 ml-0" />
						<div
							style={{
								backgroundColor: experienceStation.getColorByTheme(isDarkMode),
							}}
							className="w-[calc(100% + 5px)] h-[30px] ml-0 ml-auto"
						/>
						<div className="pr-5 pt-5 pb-5">
							<a
								href="https://www.unisi.it/"
								target="_blank"
								rel="noreferrer"
								aria-label="Link to Università di Siena's website"
							>
								<div className="grid grid-cols-2 mb-2">
									<div className="flex flex-col">
										<div className="text-2xl font-bold">
											Bachelor&apos;s degree
										</div>
										<div className="text-xl">Università di Siena</div>
									</div>
									<div className="flex flex-col items-end">
										<div className="h-fill xl:text-5xl md:text-4xl sm:text-5xl text-3xl">
											07-2021
										</div>
									</div>
								</div>
							</a>

							<div className="w-fill h-[3px] bg-stone-700 dark:bg-stone-300" />
							<div className="w-fill sm:text-[47px] text-[40px]">
								Computer Engineering
							</div>

							<p className="text-2xl mt-5 font-thin [&>span]:font-semibold text-left">
								<span>Thesis title</span>: Using NLP libraries in python to
								analyze the grammatical structure of crosswords puzzles.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}
