import { SiTokyometro } from "react-icons/si"
import { MdOutlineMail } from "react-icons/md"
import { RiLinkedinFill } from "react-icons/ri"
import { FiGithub } from "react-icons/fi"
import { LINKEDIN_PROFILE, MY_EMAIL, GITHUB_PROFILE } from "../constants"

export function Footer() {
	return (
		<footer className="mt-20 font-istok min-h-[100px] bg-zinc-300 dark:bg-zinc-800 w-full text-zinc-900 dark:text-zinc-200 p-5 grid sm:grid-rows-2 sm:grid-cols-2 grid-rows-4 grid-cols-1 items-center text-center">
			<p>&copy; 2025, Michele Moro</p>
			<p>
				Created with{" "}
				<a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
					NextJS
				</a>
				{" / "}
				<a
					href="https://tailwindcss.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					TailwindCSS
				</a>
				{" / "}
				<a
					href="https://www.framer.com/motion/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Framer Motion
				</a>
			</p>

			<p className="flex justify-center gap-1">
				Design inspired by the
				<a
					href="https://www.tokyometro.jp/en/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1"
				>
					Tokyo Metro
					<span className="rounded p-1 bg-cyan-500 dark:bg-cyan-600">
						<SiTokyometro className="fill-white" />
					</span>
				</a>
			</p>
			<p className="flex justify-center gap-4 text-[22px]">
				<a
					href={`mailto:${MY_EMAIL}`}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1"
					aria-label="Send me an email"
				>
					<MdOutlineMail className="dark:fill-slate-200 fill-slate-900" />
				</a>
				<a
					href={LINKEDIN_PROFILE}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1"
					aria-label="Linkedin profile link"
				>
					<RiLinkedinFill className="dark:fill-slate-200 fill-slate-900" />
				</a>
				<a
					href={GITHUB_PROFILE}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1"
					aria-label="Github profile link"
				>
					<FiGithub className="dark:text-slate-200 text-slate-900 fill-none" />
				</a>
			</p>
		</footer>
	)
}
