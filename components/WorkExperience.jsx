import { MdSchool, MdWork } from "react-icons/md"
import { StationHeader } from "/components/StationHeader"
import { experienceStation } from "../constants"
import { useTheme } from "../context/ThemeContext"

export function WorkExperience({
	title,
	date,
	company,
	location,
	url,
	descriptionParagraphs = [],
	endDate,
	urlAriaLabel,
}) {
	const { isDarkMode } = useTheme()

	return (
		<div className="w-[80%] mb-3">
			<div className="w-[calc(100% + 5px)] h-[10px] bg-stone-700 dark:bg-stone-300 -ml-5" />
			<div
				style={{
					backgroundColor: experienceStation.getColorByTheme(isDarkMode),
				}}
				className="w-[calc(100% + 5px)] h-[30px] -ml-5"
			/>

			<a
				className="mt-5 block"
				href={url}
				target="_blank"
				rel="noreferrer"
				aria-label={urlAriaLabel}
			>
				<div className="grid grid-cols-2 mb-2">
					<div className="flex flex-col">
						<div className="text-2xl font-bold">{company}</div>
						<div className="text-xl">{location}</div>
					</div>
					<div className="flex flex-col items-end">
						<div className="h-fill xl:text-5xl md:text-4xl sm:text-5xl text-3xl">
							{date}
						</div>
						{endDate && (
							<div className="h-fill xl:text-5xl md:text-4xl sm:text-5xl text-3xl">
								{endDate}
							</div>
						)}
					</div>
				</div>
				<div className="w-full h-[3px] bg-stone-700 dark:bg-stone-300" />
				<div className="w-full w-fill sm:text-[47px] text-[40px] text-right">
					{title}
				</div>
				{descriptionParagraphs.map((p) => {
					return (
						<p className="text-2xl mt-5 font-thin [&>span]:font-semibold text-right">
							{p}
						</p>
					)
				})}
			</a>
		</div>
	)
}
