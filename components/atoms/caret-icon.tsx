import type React from 'react';

type CaretIconProps = {
  isOpen: boolean;
};

const CaretIcon: React.FC<CaretIconProps> = ({isOpen}) => (
	<svg
		className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
		width="10"
		height="10"
		viewBox="0 0 10 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1 4L5 8L9 4" 
			stroke="currentColor" 
			strokeWidth="2" 
			strokeLinecap="round" 
			strokeLinejoin="round"
		/>
	</svg>
);

export default CaretIcon;