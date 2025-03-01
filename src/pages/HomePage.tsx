import Button from "../components/Button";
import Logo from "../components/Logo";
import Dropdown from "../components/Dropdown"

const HomePage = () => {
    return (
        <div className="flex flex-row gap-5">
             <Logo onClick={()=>{}}/>
             <Dropdown label="Review" options={[{ text: "write a Review", link: "https://www.google.com" },]}/>
             <Dropdown label="Discover"options={[ { text: "Google", link: "https://www.google.com" },{ text: "Alert", onClick: () => alert("Button Clicked!") } ]}/>
             <Button text="Login" buttonClass="bg-blue-400 px-5 py-2 rounded-md cursor-pointer w-20 h-10" textClass="text-sm  text-white "  onClick={()=>{}} />
             <Button text="Sign Up" buttonClass="bg-blue-400 px-5 py-2 rounded-md cursor-pointer  w-25 h-10" textClass="text-sm  text-white "  onClick={()=>{}} />
        </div>
    );
}
export default HomePage;