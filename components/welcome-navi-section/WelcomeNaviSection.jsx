import { UserBanner } from "./UserBanner"
import { WelcomeNavButton } from "./WelcomeNavButton"
import { experienceStation, projectStation, aboutStation } from "../../constants"
import { useTheme } from "../../context/ThemeContext"

const stationsArray = [experienceStation, projectStation, aboutStation]

export function WelcomeNaviSection() {
	const { isDarkMode } = useTheme()

	return (
		<div className="xl:w-[1280px] m-[0_auto] min-h-[90vh] bg-slate-50 dark:bg-slate-700">
			<div className="grid md:grid-cols-2 grid-cols-1 max-w-fll md:min-h-[90vh] min-h-[180vh] bg-red-900 dark:bg-red-900">
				<div className="h-full flex flex-col">
					<UserBanner isDarkMode={isDarkMode} />
					<nav className="md:h-5/6 h-[85%]">
						<ul className="grid grid-cols-3 h-full">
							{stationsArray.map((s) => (
								<WelcomeNavButton
									title={s.title}
									color={s.getColorByTheme(isDarkMode)}
									to={s.to}
									key={s.to}
								/>
							))}
						</ul>
					</nav>
				</div>
				<div className="dark:animate-lights  flex flex-col items-center justify-center text-center xl:text-9xl lg:text-8xl md:text-7xl sm:text-8xl text-7xl text-white dark:[text-shadow:0px_0px_5px_white] bg-red-500 dark:bg-red-700 dark:shadow-[inset_0_0_15px_0px_black] gap-2 py-[60px]">
					<div>ようこそ</div>
					<div>Benvenuti</div>
					<div>Welcome</div>
					<div>Vítejte</div>
				</div>
			</div>
		</div>
	)
}
