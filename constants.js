import colors from "tailwindcss/colors"

export const experienceStation = {
    getColorByTheme: (isDarkMode) =>
        isDarkMode ? colors.yellow[600] : colors.yellow[500],
    title: "Education and work experience",
    to: "edu_exp",
}

export const projectStation = {
    getColorByTheme: (isDarkMode) =>
        isDarkMode ? colors.green[600] : colors.green[500],
    title: "Projects",
    to: "projects",
}

export const aboutStation = {
    getColorByTheme: (isDarkMode) =>
        isDarkMode ? colors.indigo[600] : colors.indigo[500],
    title: "Informations",
    to: "about",
}

const projectF1StandingsV2 = {
	name: "F1 Standings - V2",
	liveSite: "https://moromichele.github.io/Formula-1-2/",
	gitHub: "https://github.com/moromichele/Formula-1-2/",
	desc: "Historical F1 standings data, with a better stack",
	imgSrc: "/formula-1-2-screen.webp",
	tags: [
		"TypeScript",
		"React",
		"TanStack Query",
		"API",
		"Axios",
		"CSS Modules",
		"2025",
	],
	noDark: true,
}

const projectF1Standings = {
	name: "F1 Standings",
	liveSite: "https://moromichele.github.io/F1-Standings/",
	gitHub: "https://github.com/moromichele/F1-standings/",
	desc: "Historical F1 standings data",
	imgSrc: "/f1-screenshot.webp",
	darkImgSrc: "/f1-d-screenshot.webp",
	tags: [
		"TypeScript",
		"React",
		"Redux-Toolkit",
		"API",
		"RTK Query",
		"Styled-Components",
		"2022",
	],
}

const projectRainApp = {
	name: "Will it rain",
	liveSite: "https://moromichele.github.io/weather-it-will-rain-react/",
	gitHub: "https://github.com/moromichele/weather-it-will-rain-react",
	desc: "A minimal-accuracy weather app",
	imgSrc: "/rain-screenshot.webp",
	tags: ["React", "API", "Axios", "2022"],
	noDark: true,
}

const projectPortfolio = {
	name: "Portfolio website",
	quoteDesc: {
		quote: "I've got to get me one of those",
		author: "Me looking at other people's websites",
	},
	gitHub: "https://github.com/moromichele/NextJS-portfolio-w-tailwind",
	imgSrc: "/portfolio-l-screenshot.webp",
	darkImgSrc: "/portfolio-d-screenshot.webp",
	tags: ["NextJS", "Framer-Motion", "TailwindCSS"],
}

export const projectsArray = [
    projectF1StandingsV2,
    projectF1Standings,
    projectRainApp,
    projectPortfolio,
]

export const MY_EMAIL = "moro.michele1997@gmail.com"
export const LINKEDIN_PROFILE = "https://www.linkedin.com/in/michele-moro-07a81a21b/"
export const GITHUB_PROFILE = "https://github.com/moromichele"