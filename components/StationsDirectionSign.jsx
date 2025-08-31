import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"
import { Link } from "react-scroll"

function mapArrToSign (stationsArray, ArrowIcon, isDark) {
	if (!stationsArray || stationsArray.length === 0) return null

	return (
		<div className="lg:p-2 md:p-1 p-2 flex gap-1 items-center align-center overflow-hidden">
			<ArrowIcon className="h-[100%] lg:min-w-[80px] md:min-w-[50px] min-w-[80px] text-[50px]" />
			{stationsArray.map((station) => {
				return (
					<Link
						activeClass="active"
						to={station.to}
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
						className="cursor-pointer flex gap-1 items-center align-center"
						key={station.to}
					>
						<div className="dark:bg-white rounded-lg flex items-center justify-center text-center p-1">
							<div
								style={{ borderColor: station.getColorByTheme(isDark) }}
								className="text-slate-900 h-[38px] w-[38px] leading-[41px] rounded-full sm:text-[30px] text-[28px] font-bold dark:bg-white sm:border-[12px] border-[10px] box-content"
							>
								{station.title[0].toUpperCase()}
							</div>
						</div>
						<div className="overflow-hidden whitespace-nowrap text-[35px]">
							{station.title.length > 12 ? (
								<p className="md:animate-none animate-scrollText md:p-left[0%] p-left-[100%] sm:block hidden max-h-[100px] md:max-w-none max-w-[300px]">
									{station.title}
								</p>
							) : (
								<p className="sm:block hidden max-h-[100px]">
									{station.title}
								</p>
							)}
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export function StationsDirectionSign({ isDark, upArr, downArr }) {
	return (
		<div className="border-slate-900 dark:border-black border-x-[7px] border-y-[1px]  flex lg:gap-2 gap-1 md:justify-start justify-around items-center align-center bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white shadow-[inset_0_0_7px_0px_gray] dark:shadow-[inset_0_0_7px_1px_black]">
			{mapArrToSign(upArr, AiOutlineArrowUp, isDark)}
			{mapArrToSign(downArr, AiOutlineArrowDown, isDark)}
		</div>
	)
}
