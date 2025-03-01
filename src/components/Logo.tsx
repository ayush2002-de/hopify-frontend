import logo from "./../assets/logo.svg"; // Adjust the path as needed

interface LogoProps {
  onClick: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick}) => {
  return (
    <img
      src={logo}
      alt="Logo"
      onClick={onClick}
      className={`cursor-pointer w-20 h-10 flex items-center`}
    />
  );
};

export default Logo;