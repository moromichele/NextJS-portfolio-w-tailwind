import { StationHeader } from "/components/StationHeader"
import { projectStation } from "../constants"
import { ProjectCard } from "/components/ProjectCard"
import { projectsArray } from "../constants"
import { useTheme } from "../context/ThemeContext"

export function ProjectsSection({ scrollRef }) {
	const { isDarkMode } = useTheme()

	return (
		<div
			id={projectStation.scrollID}
			ref={scrollRef}
			className="xl:w-[1280px] m-[0_auto] bg-neutral-50 dark:bg-neutral-700"
		>
			<StationHeader
				title={projectStation.title}
				color={projectStation.getColorByTheme(isDarkMode)}
			/>
			<div className="p-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch justify-items-stretch">
					{projectsArray.map((project) => (
						<ProjectCard
							key={project.name}
							projectObj={project}
							imgSrc={
								isDarkMode && project.darkImgSrc
									? project.darkImgSrc
									: project.imgSrc
							}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
