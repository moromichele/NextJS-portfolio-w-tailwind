import { Link } from "react-scroll";
import { AiOutlineArrowRight } from "react-icons/ai";
import colors from 'tailwindcss/colors'
const green = colors.green[600] // #16a34a

const BigNavObject = ({ title,light,dark,isDark, to}) => {

	const bgColorReal = isDark ? dark : light

	return (
		<li>
			<div
			style={{backgroundColor: bgColorReal}}
				className=" transition-transform cursor-pointer h-full text-center text-neutral-100 dark:text-white text-4xl p-2 hover:scale-105 hover:shadow-[3px_3px_0px_0px_black]"
			>
				<Link
					activeClass="active"
					to={to}
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
				>
					<div className="flex flex-col items-end h-full">
                        <div className="md:h-[240px] h-[30vh]"></div>
						<AiOutlineArrowRight className="md:text-8xl text-7xl" />
						<div className="border-2 border-white rounded-full">
							<div
                            style={{borderColor:"unset", color:bgColorReal}}
								className="h-[35px] w-[35px] leading-[35px] rounded-full text-[30px] font-bold bg-white border-[12px] box-content"
							>
								{title[0].toUpperCase()}
							</div>
						</div>
						<p className="xsm:text-2xl text-base">{title}</p>
					</div>
				</Link>
			</div>
		</li>
	);
};

export default BigNavObject;
