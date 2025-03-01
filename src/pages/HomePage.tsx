import Button from "../components/Button";
import Logo from "../components/Logo";

const HomePage = () => {
    return (
        <div className="flex flex-row gap-5">
             <Logo onClick={()=>{}}/>
             <Button text="Login" buttonClass="bg-blue-400 px-5 py-2 rounded-md cursor-pointer w-20 h-10" textClass="text-sm  text-white "  onClick={()=>{}} />
             <Button text="Sign Up" buttonClass="bg-blue-400 px-5 py-2 rounded-md cursor-pointer  w-25 h-10" textClass="text-sm  text-white "  onClick={()=>{}} />
        </div>
    );
}
export default HomePage;