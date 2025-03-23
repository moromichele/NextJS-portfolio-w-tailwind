import { MdSchool, MdWork } from "react-icons/md"
import { StationHeader } from "/components/StationHeader"
import { experienceStation } from "../constants"
import { useTheme } from "../context/ThemeContext"

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
				<div className="font-istok grid md:grid-cols-2 gap-4 grid-cols-1 max-w-fll md:min-h-[80vh] min-h-[100vh] p-5">
					<section>
						<MdSchool
							size={150}
							className="fill-stone-700 dark:fill-stone-300 mt-5"
						/>
						<div className="w-[80%]">
							<div className="w-[calc(100% + 5px)] h-[10px] bg-stone-700 dark:bg-stone-300 -ml-5" />
							<div
								style={{
									backgroundColor:
										experienceStation.getColorByTheme(isDarkMode),
								}}
								className="w-[calc(100% + 5px)] h-[30px] -ml-5"
							/>

							<a
								className="mt-5 block"
								href="https://www.unisi.it/"
								target="_blank"
								rel="noreferrer"
								aria-label="Link to University of Siena's website"
							>
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
								<div className="w-full w-fill sm:text-[47px] text-[40px] text-right">
									Computer Engineering
								</div>
							</a>
						</div>
					</section>
					<section>
						<MdWork
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
								href="https://www.emplifi.io/"
								target="_blank"
								rel="noreferrer"
								aria-label="Link to Emplifi Inc. website"
							>
								<div className="flex justify-between mb-2">
									<div className="flex flex-col justify-between">
										<div className="text-2xl font-bold">Emplifi Inc.</div>
										<div className="text-xl">
											Prague, Czech Republic - Full time
										</div>
									</div>
									<div>
										<div className="h-fill flex items-end text-right sm:text-4xl text-3xl">
											02-2023
										</div>
										<div className="h-fill flex items-end sm:text-4xl text-3xl">
											Present
										</div>
									</div>
								</div>
								<div className="w-fill h-[3px] bg-stone-700 dark:bg-stone-300" />
								<div className="w-fill sm:text-[47px] text-[40px]">
									Full stack Developer
								</div>
							</a>
							<p className="text-2xl mt-5 font-thin pr-[5%] [&>span]:font-semibold">
								Utilized <span>TypeScript + React</span> on fronted and{" "}
								<span>Node</span> on backend to help maintain and develop new
								features on a large, enterprise level social media management
								platform
							</p>
							<p className="text-2xl mt-5 font-thin pr-[5%] [&>span]:font-semibold">
								Worked as part of a small <span>agile team</span>, in direct
								contact with project managers, product, designers and other teams in case
								of company wide initiatives
							</p>
						</div>
						<div className="w-[80%] ml-auto">
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
								href="https://www.ftonweb.com/"
								target="_blank"
								rel="noreferrer"
								aria-label="Link to Future Technologies S.r.l website"
							>
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
								<div className="w-fill sm:text-[47px] text-[40px]">
									Full stack Developer
								</div>
							</a>
							<p className="text-2xl mt-5 font-thin pr-[5%]">
								Developed a RESTful web app for a client using React with Chakra
								UI, Spring Boot and PostgreSQL
							</p>
							<p className="text-2xl mt-5 font-thin pr-[5%]">
								Maintained and completely restyled the company&apos;s main
								legacy web app <br />
								(GWT, XML, CSS)
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
