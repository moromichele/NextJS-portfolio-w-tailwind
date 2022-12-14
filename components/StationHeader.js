const StationHeader = ({ station, isDark }) => {
	const { dark, light, title } = station;
	return (
		<div
			style={{ backgroundColor: isDark ? dark : light }}
			className="w-100 h-[90px] flex items-center p-2 sm:gap-5 gap-2 text-white shadow-md"
		>
			<div className="bg-white rounded-lg flex items-center justify-center text-center p-1">
				<div
					style={{ borderColor: isDark ? dark : light }}
					className="h-[35px] w-[35px] leading-[35px] rounded-full sm:text-[30px] text-[28px] font-bold bg-white sm:border-[12px] border-[10px] box-content text-black"
				>
					{title[0].toUpperCase()}
				</div>
			</div>
			<p className="lg:text-[45px] sm:text-[35px] text-[25px]">{title}</p>
		</div>
	);
};

export default StationHeader;
