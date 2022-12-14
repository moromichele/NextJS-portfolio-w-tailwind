import Image from "next/image";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";

const Project = ({ prObject, isDark }) => {
	const GitHubIcon = () => {
		return (
			<a
				href={prObject.gitHub}
				className="text-[40px] desktophover:hover:scale-105"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Github link to project"
			>
				<FaGithubSquare className="fill-neutral-800" />
			</a>
		);
	};
	const LiveSiteIcon = () => {
		return (
			<a
				href={prObject.liveSite}
				className="text-[37px] desktophover:hover:scale-105"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Link to project live website"
			>
				<FaExternalLinkAlt className="fill-neutral-800" />
			</a>
		);
	};
	return (
		<div className="border-[1px] border-neutral-400 dark:border-neutral-800 w-full max-w-md rounded-xl overflow-hidden shadow-lg m-[0_auto] bg-neutral-200 dark:bg-slate-500">
			<div className="relative w-full min-h-[400px] bg-neutral-50 dark:bg-neutral-200">
				<Image
					src={
						isDark
							? prObject.darkImgSrc
								? prObject.darkImgSrc
								: prObject.imgSrc
							: prObject.imgSrc
					}
					alt="project preview"
					layout="fill"
					className="object-scale-down lg:object-scale-cover"
				/>
			</div>
			<div className="px-6 py-4">
				<div className="text-neutral-900 dark:text-neutral-300 font-bold text-xl mb-2 flex justify-between items-center">
					{prObject.name}
					<div className="flex gap-2">
						{prObject.gitHub ? <GitHubIcon /> : ""}
						{prObject.liveSite ? <LiveSiteIcon /> : ""}
					</div>
				</div>
				<div className="text-neutral-700 dark:text-neutral-200 text-base">
					{prObject.desc ? <p>{prObject.desc}</p> : ""}
					{!prObject.quoteDesc ? (
						""
					) : (
						<figure>
							<blockquote cite="https://developer.mozilla.org/samples/html/figure.html">
								{prObject.quoteDesc.quote}
							</blockquote>
							<figcaption className="text-right text-sm">
								-{prObject.quoteDesc.author}
							</figcaption>
						</figure>
					)}
				</div>
				<div className="text-neutral-700 dark:text-neutral-200 text-base">
					{prObject.noDark ? isDark ? <div className="flex items-center gap-2 text-yellow-400"><IoIosWarning/>Bright, no dark mode available</div> : "" : ""}
				</div>
			</div>
			<div className="px-6 pt-4 pb-2">
				{prObject.tags.map((tag, index) => {
					return (
						<span
							key={index}
							className="inline-block bg-slate-300 dark:bg-neutral-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-green-100 mr-2 mb-2"
						>
							#{tag}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default Project;
