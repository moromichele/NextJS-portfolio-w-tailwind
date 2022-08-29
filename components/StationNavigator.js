import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const StationNavigator = ({ isDark, light, dark }) => {
	return (
		<div className="flex items-center align-center w-100 h-[80px] bg-slate-800 dark:bg-slate-900 text-white">
			<AiOutlineArrowUp className="text-white sm:text-[55px] text-[55px]" />
			<div className="bg-white rounded-lg flex items-center justify-center text-center p-1">
				<div
					style={{ borderColor: isDark ? "red" : "red" }}
					className="h-[35px] w-[35px] leading-[35px] rounded-full sm:text-[30px] text-[28px] font-bold bg-white sm:border-[12px] border-[10px] box-content text-black"
				>
					M
				</div>
			</div>
			<p className="text-[40px]"><strong>Mamma mia</strong></p>
			<AiOutlineArrowDown className="text-white sm:text-[55px] text-[55px]" />
			<div className="bg-white rounded-lg flex items-center justify-center text-center p-1">
				<div
					style={{ borderColor: isDark ? "green" : "green" }}
					className="h-[35px] w-[35px] leading-[35px] rounded-full sm:text-[30px] text-[28px] font-bold bg-white sm:border-[12px] border-[10px] box-content text-black"
				>
					S
				</div>
			</div>
			<p className="text-[40px]"> <strong>Spaghetti</strong></p>
		</div>
	);
};

export default StationNavigator;
