import Image from "next/image";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ prObject }) => {
	const gitHubIcon = () => {
		return (
			<a
				href={prObject.gitHub}
				className="text-[40px] hover:scale-105"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaGithubSquare />
			</a>
		);
	};
    const liveSiteIcon = () => {
		return (
			<a
				href={prObject.liveSite}
				className="text-[37px] hover:scale-105"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaExternalLinkAlt />
			</a>
		);
	};
	return (
		<div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg m-[0_auto] bg-slate-200 dark:bg-slate-500">
			<div className="relative w-full min-h-[400px] bg-slate-50 dark:bg-slate-200">
				<Image
					src={prObject.imgSrc}
					alt="project preview"
					layout="fill"
					
					className="object-scale-down lg:object-scale-cover"
				/>
			</div>
			<div className="px-6 py-4">
				<div className="text-slate-900 font-bold text-xl mb-2 flex justify-between items-center">
					{prObject.name}
                    <div className="flex gap-2">
					{prObject.gitHub ? gitHubIcon() : ""}
                    {prObject.liveSite ? liveSiteIcon() : ""}
                    </div>
				</div>
				<p className="text-gray-700 dark:text-slate-200 text-base">
					{prObject.desc}
				</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				{prObject.tags.map((tag, index) => {
					return (
						<span
							key={index}
							className="inline-block bg-slate-300 dark:bg-slate-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-yellow-400 mr-2 mb-2"
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
