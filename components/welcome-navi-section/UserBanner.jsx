import { BiUserCircle } from "react-icons/bi"
import { useTheme } from "../../context/ThemeContext"

export function UserBanner() {
	const { isDarkMode } = useTheme()

	return (
		<div className="bg-slate-100 dark:bg-slate-900 md:h-1/6 sm:h-[20%] h-[15%] flex p-4 md:gap-3 gap-5 items-center shadow-[inset_0_0_6px_0px_gray] dark:shadow-[inset_0_0_6px_0px_black]">
			<div className="bg-red-600 w-[30px] max-h-[100%] h-[100px] rounded"></div>
			<div className="rounded-xl  border-red-600 dark:border-0 dark:bg-white w-[100px] max-h-[100%]  h-[100px] flex items-center justify-center">
				<BiUserCircle className="font-[100px] w-[100%] h-[100%] fill-slate-900" />
			</div>
			<div
				className={`${
					isDarkMode && "animate-softlights"
				} dark:[text-shadow:0px_0px_1px_white] leading-none`}
			>
				<div className="flex flex-col sm:flex-row gap-0 sm:gap-[20px]">
					<h1 className="lg:text-3xl xsm:text-2xl text-2xl" style={{wordBreak:"keep-all"}}>Michele Moro</h1>
					<h1 className="lg:text-3xl xsm:text-2xl text-2xl" style={{wordBreak:"keep-all"}}>ミケレ・モロ</h1>
				</div>
				<h2 className="lg:text-2xl sm:text-base text-base">
					Full stack developer
				</h2>
			</div>
		</div>
	)
}
