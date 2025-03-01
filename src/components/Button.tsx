interface ButtonProps {
    text: string;
    buttonClass: string;
    textClass: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, buttonClass, textClass, onClick }) => {
    return (
        <button className={buttonClass} onClick={onClick}>
            <p className={textClass}>{text}</p>
        </button>
    );
};

export default Button;