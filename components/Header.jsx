import { motion } from "framer-motion"
import { CgDarkMode } from "react-icons/cg"
import { Link } from "react-scroll"
import { experienceStation, projectStation, aboutStation } from "../constants"
import { useTheme } from "../context/ThemeContext"

export function Header({ scrolls: [scroll1, scroll2, scroll3] }) {
	const { isDarkMode, setIsDarkMode } = useTheme()

	return (
		<header className="sticky top-0 flex items-center justify-end p-5 w-full h-[60px] bg-slate-100 dark:bg-slate-700 z-[2] shadow-lg">
			<motion.div
				style={{
					scaleX: scroll1.scrollYProgress,
					backgroundColor: experienceStation.getColorByTheme(isDarkMode),
				}}
				className="fixed top-[20px] left-[2%] h-[20px] w-1/4 origin-[0%] z-[5] rounded-l"
			/>
			<motion.div
				style={{
					scaleX: scroll2.scrollYProgress,
					backgroundColor: projectStation.getColorByTheme(isDarkMode),
				}}
				className="fixed top-[20px] left-[27%] h-[20px] w-1/4 origin-[0%] right-0 z-[5]"
			/>
			<motion.div
				style={{
					scaleX: scroll3.scrollYProgress,
					backgroundColor: aboutStation.getColorByTheme(isDarkMode),
				}}
				className="fixed top-[20px] left-[52%] h-[20px]  w-1/4 origin-[0%] right-0 z-[5]"
			/>
			<Link
				activeClass="active"
				to={experienceStation.to}
				offset={0}
				duration={500}
				className="cursor-pointer"
				aria-label="Go to experience section"
				spy
				smooth
			>
				<p
					style={{
						borderColor: experienceStation.getColorByTheme(isDarkMode),
					}}
					className="desktophover:hover:scale-110 fixed sm:left-[26.5%] left-[25.5%] top-[17px] h-[18px] w-[18px] leading-[19px] rounded-full text-[18px] font-bold bg-white border-[5px] text-center box-content text-black z-[6]"
				>
					{experienceStation.title[0].toUpperCase()}
				</p>
			</Link>
			<Link
				activeClass="active"
				to={projectStation.to}
				offset={0}
				duration={500}
				className="cursor-pointer"
				aria-label="Go to projects section"
				spy
				smooth
			>
				<p
					style={{
						borderColor: projectStation.getColorByTheme(isDarkMode),
					}}
					className="desktophover:hover:scale-110 fixed sm:left-[51.5%] left-[50.5%] top-[17px] h-[18px] w-[18px] leading-[19px] rounded-full text-[18px] font-bold bg-white border-[5px] border-black text-center box-content text-black z-[6]"
				>
					{projectStation.title[0].toUpperCase()}
				</p>
			</Link>
			<Link
				activeClass="active"
				to={aboutStation.to}
				offset={0}
				duration={500}
				className="cursor-pointer"
				aria-label="Go to informations section"
				spy
				smooth
			>
				<p
					style={{
						borderColor: aboutStation.getColorByTheme(isDarkMode),
					}}
					className="desktophover:hover:scale-110 fixed sm:left-[76.5%] left-[75.5%] top-[17px] h-[18px] w-[18px] leading-[19px] rounded-full text-[18px] font-bold bg-white border-[5px] border-black text-center box-content text-black z-[6]"
				>
					{aboutStation.title[0].toUpperCase()}
				</p>
			</Link>
			<div className="fixed bg-slate-900 dark:bg-slate-200 h-[16px] xl:w-[96%] md:w-[94%] w-[90%] top-[22px] left-[2%] z-[3] rounded" />
			<button
				className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 rounded-xl border-black dark:border-white border-2 shadow-[2px_2px_0px_0px_black] dark:shadow-[3px_3px_0px_0px_black] desktophover:hover:scale-105 z-[4]"
				onClick={() => {
					setIsDarkMode((s) => !s)
				}}
				aria-label="Toggle night mode"
			>
				<CgDarkMode className="text-[35px]" />
			</button>
		</header>
	)
}
