import Button from '../components/Button';
import Logo from '../components/Logo';
import Dropdown from '../components/Dropdown';
import Search from '../components/Search';
import {
  reviewDropdownOptions,
  discoverDropdownOptions,
} from '../data/dropdownData';
import homeImage from '../assets/homImage.jpg';
import ImageCart from '../components/Hospital';

const HomePage = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <Logo onClick={() => {}} />
        <div className="flex gap-5">
          <Dropdown label="Review" options={reviewDropdownOptions} />
          <Dropdown label="Discover" options={discoverDropdownOptions} />
        </div>
        <div className="flex gap-3">
          <Button
            text="Login"
            buttonClass="bg-blue-500 w-20 h-10 rounded-md"
            textClass="text-sm text-white"
            onClick={() => {}}
          />
          <Button
            text="Sign Up"
            buttonClass="bg-blue-500 w-24 h-10 rounded-md"
            textClass="text-sm text-white"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-full mt-10">
        <div className="flex flex-row gap-5 w-102 my-2">
          <a
            href="/hospitals"
            className="text-black no-underline cursor-pointer hover:scale-105  hover:underline"
          >
            Hospitals
          </a>
          <a
            href="/hospitals"
            className="text-black no-underline cursor-pointer hover:scale-105 hover:underline"
          >
            Treatments
          </a>
        </div>
        <Search onSearch={handleSearch} />
      </div>
      <div className="my-15 max-w-6xl w-full">
        <img
          className="w-full h-80 rounded-md object-cover"
          src={homeImage}
          alt="Descriptive Alt Text"
        />
      </div>
      <div className="">
        <h1 className="w-280"> Best hospital choices are there !</h1>
        <ImageCart />
      </div>
    </div>
  );
};

export default HomePage;
