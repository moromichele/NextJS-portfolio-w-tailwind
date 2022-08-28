const StationHeader = ({ title, isDark, light, dark }) => {
	return (
		<div
			style={{ backgroundColor: isDark ? dark : light }}
			className="w-100 h-[90px] flex items-center p-2 sm:gap-5 gap-2 text-white"
		>
			<div className="bg-white rounded-lg h-[70px] w-[70px] flex items-center justify-center text-center">
				<div
					style={{ borderColor: isDark ? dark : light}}
					className="h-[35px] w-[35px] leading-[35px] rounded-full sm:text-[30px] text-[28px] font-bold bg-white sm:border-[12px] border-[10px] box-content text-black"
				>
					{title[0].toUpperCase()}
				</div>
			</div>
			<p className="sm:text-[35px] text-[25px]">{title}</p>
		</div>
	);
};

export default StationHeader;
