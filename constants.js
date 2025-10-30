import colors from "tailwindcss/colors"

export const experienceStation = {
	getColorByTheme: (isDarkMode) =>
		isDarkMode ? colors.yellow[600] : colors.yellow[500],
	title: "Education and work experience",
	scrollID: "EXP_STATION",
}

export const projectStation = {
	getColorByTheme: (isDarkMode) =>
		isDarkMode ? colors.green[600] : colors.green[500],
	title: "Projects",
	scrollID: "PRJ_STATION",
}

export const aboutStation = {
	getColorByTheme: (isDarkMode) =>
		isDarkMode ? colors.indigo[600] : colors.indigo[500],
	title: "Informations",
	scrollID: "INF_STATION",
}

const projectF1StandingsV2 = {
	name: "F1 Standings - V2",
	liveSite: "https://moromichele.github.io/Formula-1-2/",
	gitHub: "https://github.com/moromichele/Formula-1-2/",
	desc: "Historical F1 standings data, (\"A list, rendered from an API\")",
	imgSrc: "/formula-1-2-l.webp",
	darkImgSrc: "/formula-1-2-d.webp",
	tags: [
		"TypeScript",
		"React",
		"TanStack Query",
		"API",
		"Axios",
		"CSS Modules",
		"Vite",
		"2025",
	],
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

export const projectsArray = [projectF1StandingsV2, projectPortfolio]

export const MY_EMAIL = "moro.michele1997@gmail.com"
export const LINKEDIN_PROFILE =
	"https://www.linkedin.com/in/michele-moro-07a81a21b/"
export const GITHUB_PROFILE = "https://github.com/moromichele"

export const WORK_EXPERIENCES = [
	{
		title: "Full stack Developer",
		location: "Prague, Czech Republic - Full time",
		company: "Emplifi inc.",
		url: "https://www.emplifi.io/",
		date: "02-2023",
		endDate: "Present",
		urlAriaLabel: "Link to Emplifi's website",
		descriptionParagraphs: [
			<>
				Utilized <span>TypeScript + React</span> on frontend and{" "}
				<span>Node</span> on backend to help maintain and develop new features
				on a large enterprise-level social media management platform
			</>,
			<>
				Worked as part of a small <span>Agile</span> team, following the{" "}
				<span>Scrum</span> methodology, directly collaborating with project
				managers, product owners, designers and other teams in case of
				company-wide initiatives
			</>,
		],
	},
	{
		title: "Full stack Developer",
		location: "Castel del Piano, Italy - Full time",
		company: "Future Technologies S.r.l",
		url: "https://www.ftonweb.com/",
		date: "09-2021",
		endDate: "07-2022",
		urlAriaLabel: "Link to Future Technologies S.r.l website",
		descriptionParagraphs: [
			<>
				Developed a RESTful web app for a client using <span>React</span> with
				Chakra UI, Spring Boot and PostgreSQL
			</>,
			<>
				Maintained and completely restyled the company&apos;s main legacy web
				app <br />
				(GWT, XML, CSS)
			</>,
		],
	},
]

export const HEADER_HEIGHT_PX = 60