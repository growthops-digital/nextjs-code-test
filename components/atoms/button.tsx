import type React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({className, onClick, onKeyDown, children, ...props}) => (
	<button
		type="button"
		className={className}
		onClick={onClick}
		onKeyDown={onKeyDown}
		{...props}
	>
		{children}
	</button>
);

export default Button;