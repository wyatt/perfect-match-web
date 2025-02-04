interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    bgColor?: 'bg-pmred-500' | 'bg-red-500' | 'bg-blue-500' | 'bg-white' | string;
    textColor?: 'text-white' | 'text-black' | 'text-red' | 'text-pmred-500' | string;
    px?: number;
    py?: number;
    border?: number;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, bgColor, textColor, px, py, border, className }) => {
    return (
        <button
            onClick={onClick}
            className={`
                    mt-6
                    px-${px || 6}
                    py-${py || 2}
                    rounded-full
                    ${bgColor || 'bg-white'}
                    ${textColor || 'text-pmred-500'}
                    border-${border || 4}
                    border-pmblue-500 
                    font-bold
                    shadow-[6px_6px_0px_0px_rgba(36,67,141,1)]
                    transition-all
                    hover:translate-x-[4px]
                    hover:translate-y-[4px]
                    hover:shadow-[2px_2px_0px_0px_rgba(36,67,141,1)]
                    active:translate-x-[6px]
                    active:translate-y-[6px] 
                    active:shadow-none 
                    ${className || ''}
                `}
        >
            {children || ''}
        </button>
    );
}

export default Button;