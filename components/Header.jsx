import { motion } from "framer-motion"
import { CgDarkMode, CgHomeAlt } from "react-icons/cg"
import { Link } from "react-scroll"
import { experienceStation, projectStation, aboutStation } from "../constants"
import { useTheme } from "../context/ThemeContext"
import { HEADER_HEIGHT_PX } from "../constants"

export function Header({ station1ScrollProgress, station2ScrollProgress, station3ScrollProgress }) {
	const { isDarkMode, setIsDarkMode } = useTheme()

	return (
		<header className="sticky top-0 w-full h-[60px] bg-slate-100 dark:bg-slate-700 z-[4] shadow-lg">
			<div className="w-[95%] grid relative items-center h-full m-auto">
				<div className="absolute top-0 left-0 row-1 col-1 flex m-auto items-center justify-between w-full h-full z-[5]">
					<Link
						className="cursor-pointer bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 rounded-xl border-black dark:border-white border-2 shadow-[2px_2px_0px_0px_black] dark:shadow-[3px_3px_0px_0px_black] desktophover:hover:scale-105 z-[6] h-[38px] w-[38px]"
						to="page_top"
						aria-label="Go to top"
						activeClass="active"
						duration={500}
						spy
						smooth
					>
						<CgHomeAlt className="text-[30px] m-auto h-full" />
					</Link>
					<Link
						activeClass="active"
						to={experienceStation.scrollID}
						duration={500}
						offset={-HEADER_HEIGHT_PX}
						className="cursor-pointer w-[38px]"
						aria-label="Go to experience section"
						spy
						smooth
					>
						<p
							style={{
								borderColor: experienceStation.getColorByTheme(isDarkMode),
							}}
							className="desktophover:hover:scale-110 m-auto h-[18px] w-[18px] leading-[20px] rounded-full text-[17px] font-bold bg-white border-[5px] text-center box-content text-black"
						>
							{experienceStation.title[0].toUpperCase()}
						</p>
					</Link>
					<Link
						activeClass="active"
						to={projectStation.scrollID}
						duration={500}
						offset={-HEADER_HEIGHT_PX}
						className="cursor-pointer w-[38px]"
						aria-label="Go to projects section"
						spy
						smooth
					>
						<p
							style={{
								borderColor: projectStation.getColorByTheme(isDarkMode),
							}}
							className="desktophover:hover:scale-110 m-auto h-[18px] w-[18px] leading-[20px] rounded-full text-[18px] font-bold bg-white border-[5px] border-black text-center box-content text-black"
						>
							{projectStation.title[0].toUpperCase()}
						</p>
					</Link>
					<Link
						activeClass="active"
						to={aboutStation.scrollID}
						duration={500}
						offset={-HEADER_HEIGHT_PX}
						className="cursor-pointer w-[38px]"
						aria-label="Go to informations section"
						spy
						smooth
					>
						<p
							style={{
								borderColor: aboutStation.getColorByTheme(isDarkMode),
							}}
							className="desktophover:hover:scale-110 m-auto h-[18px] w-[18px] leading-[20px] rounded-full text-[18px] font-bold bg-white border-[5px] border-black text-center box-content text-black"
						>
							{aboutStation.title[0].toUpperCase()}
						</p>
					</Link>
					<button
						className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 rounded-xl border-black dark:border-white border-2 shadow-[2px_2px_0px_0px_black] dark:shadow-[3px_3px_0px_0px_black] desktophover:hover:scale-105 z-[4] h-[38px] w-[38px]"
						onClick={() => {
							setIsDarkMode((s) => !s)
						}}
						aria-label="Toggle night mode"
					>
						<CgDarkMode className="text-[35px] m-auto" />
					</button>
				</div>
				<div className="absolute top-0 left-0 row-1 col-1 flex w-full h-full z-[3]">
					<motion.div
						style={{
							scaleX: station1ScrollProgress,
							backgroundColor: experienceStation.getColorByTheme(isDarkMode),
						}}
						className="h-[18px] w-full origin-[0%] m-auto"
					/>
					<motion.div
						style={{
							scaleX: station2ScrollProgress,
							backgroundColor: projectStation.getColorByTheme(isDarkMode),
						}}
						className="h-[18px] w-full origin-[0%] m-auto"
					/>
					<motion.div
						style={{
							scaleX: station3ScrollProgress,
							backgroundColor: aboutStation.getColorByTheme(isDarkMode),
						}}
						className="h-[18px] w-full origin-[0%] m-auto"
					/>
					<div className="w-full" />
				</div>
				<div className="absolute top-[50%-8px] left-0 row-1 col-1 m-auto bg-slate-900 dark:bg-slate-200 h-[16px] w-full z-[2] rounded " />
			</div>
		</header>
	)
}
