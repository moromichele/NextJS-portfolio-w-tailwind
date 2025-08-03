import { Link } from "react-scroll"
import { AiOutlineArrowRight } from "react-icons/ai"
import { useRef } from "react"

export function WelcomeNavButton ({color, title, to}) {
	const inputRef = useRef(null)

	return (
		<li>
			<div
				style={{ backgroundColor: color }}
				className="w-full h-full transition-transform cursor-pointer text-center text-neutral-100 dark:text-white p-2 desktophover:hover:scale-105 desktophover:hover:shadow-[3px_3px_0px_0px_black] dark:desktophover:hover:shadow-[3px_3px_0px_0px_black_,_inset_0_0_3px_0px_black] dark:shadow-[inset_0_0_3px_0px_black]"
			>
				<Link
					activeClass="active"
					to={to}
					offset={0}
					duration={500}
					delay={1}
					aria-label={`Go to ${title}`}
					ref={inputRef}
					spy
					smooth
				>
					<button className="w-full h-full" aria-label={`Go to ${title}`}>
						<div className="flex flex-col items-end h-full">
							<div className="md:h-[240px] h-[30vh]"></div>
							<AiOutlineArrowRight className="md:text-8xl text-7xl" />
							<div className="border-2 border-white rounded-full">
								<div
									style={{ borderColor: "unset", color: color }}
									className="h-[35px] w-[35px] rounded-full text-[27px] font-bold bg-white border-[12px] box-content"
								>
									{title[0].toUpperCase()}
								</div>
							</div>
							<p className="sm:text-2xl xsm:text-[22px] text-right">
								{title}
							</p>
						</div>
					</button>
				</Link>
			</div>
		</li>
	)
}
