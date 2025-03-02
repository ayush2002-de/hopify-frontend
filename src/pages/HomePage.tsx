import Button from "../components/Button";
import Logo from "../components/Logo";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import { reviewDropdownOptions, discoverDropdownOptions } from "../data/dropdownData";

const HomePage = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-5">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <Logo onClick={() => {}} />
        <div className="flex gap-5">
          <Dropdown label="Review" options={reviewDropdownOptions} />
          <Dropdown label="Discover" options={discoverDropdownOptions} />
        </div>
        <div className="flex gap-3">
          <Button text="Login" buttonClass="bg-blue-500 w-20 h-10 rounded-md" textClass="text-sm text-white" onClick={() => {}} />
          <Button text="Sign Up" buttonClass="bg-blue-500 w-24 h-10 rounded-md" textClass="text-sm text-white" onClick={() => {}} />
        </div>
      </div>

      <div className="flex flex-col justify-start items-center w-full mt-40">
        <Search onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default HomePage;
