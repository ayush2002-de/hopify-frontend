import Button from "../components/Button";
import Logo from "../components/Logo";
import Dropdown from "../components/Dropdown";
import { reviewDropdownOptions, discoverDropdownOptions } from "../data/dropdownData";

const HomePage = () => {
  return (
    <div className="flex flex-row gap-5 p-5">
      <Logo onClick={() => {}} />
      <Dropdown label="Review" options={reviewDropdownOptions} />
      <Dropdown label="Discover" options={discoverDropdownOptions} />
      <Button text="Login" buttonClass="bg-blue-400 w-20 h-10" textClass="text-sm text-white" onClick={() => {}} />
      <Button text="Sign Up" buttonClass="bg-blue-400 w-25 h-10" textClass="text-sm text-white" onClick={() => {}} />
    </div>
  );
};

export default HomePage;
