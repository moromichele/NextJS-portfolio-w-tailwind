import { useEffect, useRef } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { EduAndWorkSection } from "../components/EduAndWorkSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { InfoSection } from "../components/InfoSection"
import { WelcomeNaviSection } from "../components/welcome-navi-section/WelcomeNaviSection"
import { aboutStation, experienceStation } from "../constants"
import { useTheme } from "../context/ThemeContext"
import { StationsDirectionSign } from "../components/StationsDirectionSign"
import { useScroll } from "framer-motion"

export default function Home() {
	const { isDarkMode, setIsDarkMode } = useTheme()

	useEffect(() => {
		//defaults to dark/light mode from device
		setIsDarkMode(window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches)
	}, [setIsDarkMode])

	const firstStationRef = useRef(null)
	const secondStationRef = useRef(null)
	const thirdStationRef = useRef(null)

	const { scrollYProgress: station1ScrollProgress } = useScroll({target: firstStationRef,
		offset: ["start end", "start 0.15"],
	})
	const { scrollYProgress: station2ScrollProgress } = useScroll({target: secondStationRef,
		offset: ["start end", "start 0.15"],
	})
	const { scrollYProgress: station3ScrollProgress } = useScroll({target: thirdStationRef,
		offset: ["start end", "start 0.15"],
	})

	return (
		<>
			<div className={isDarkMode ? "dark" : ""}>
				<div id="page_top"/>
				<div className="flex flex-col items-center break-words bg-neutral-100 dark:bg-neutral-900">
					<Header station1ScrollProgress={station1ScrollProgress} station2ScrollProgress={station2ScrollProgress} station3ScrollProgress={station3ScrollProgress} />
					<main className="rounded-b-xl max-w-full text-slate-900 dark:text-slate-100  transition-colors duration-500 shadow-[0px_0px_10px_0px_#94a3b8] dark:shadow-sm">
						<WelcomeNaviSection />
						<EduAndWorkSection scrollRef={firstStationRef} />
						<StationsDirectionSign downArr={[aboutStation]} />
						<ProjectsSection scrollRef={secondStationRef} />
						<StationsDirectionSign upArr={[experienceStation]} />
						<InfoSection scrollRef={thirdStationRef}/>
					</main>
					<Footer />
				</div>
			</div>
		</>
	)
}
