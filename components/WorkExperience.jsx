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
		<div className="md:w-[85%] w-[95%]">
			<div className="w-[calc(100% + 5px)] h-[10px] bg-stone-700 dark:bg-stone-300" />
			<div
				style={{
					backgroundColor: experienceStation.getColorByTheme(isDarkMode),
				}}
				className="w-[calc(100% + 5px)] h-[30px]"
			/>
			<div className="pl-5 pt-5 pb-5">
				<a
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
				</a>
				<div className="w-full h-[3px] bg-stone-700 dark:bg-stone-300" />
				<div className="w-full w-fill sm:text-[47px] text-[40px] text-right">
					{title}
				</div>
				{descriptionParagraphs.map((p, i) => {
					return (
						<p
							key={i}
							className="text-2xl mt-5 font-thin [&>span]:font-semibold text-right"
						>
							{p}
						</p>
					)
				})}
			</div>
		</div>
	)
}
