import { BiUserCircle } from "react-icons/bi";

const UserBanner = ({ nightMode }) => {
	return (
		<div className="bg-slate-100 dark:bg-slate-900 md:h-1/6 sm:h-[20%] h-[13%] flex p-4 md:gap-3 gap-5 items-center">
			<div className="bg-red-600 w-[30px] h-[100%]"></div>
			<div className="rounded-xl  border-red-600 dark:border-0 dark:bg-white w-[70px] h-[70px] flex items-center justify-center">
				<BiUserCircle size={80} className="fill-slate-900" />
			</div>

			<div
				className={`${
					nightMode ? "animate-softlights" : ""
				} dark:[text-shadow:0px_0px_2px_white]`}
			>
				<h1 className="lg:text-4xl xsm:text-2xl text-1xl">Michele Moro</h1>
				<h1 className="lg:text-4xl sm:text-2xl text-1xl">ミケレ・モロ</h1>
				<h2 className="lg:text-2xl sm:text-base text-bae">
					{" "}
					Junior frontend developer
				</h2>
			</div>
		</div>
	);
};

export default UserBanner;
