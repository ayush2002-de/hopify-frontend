import Button from "../components/Button";
import Logo from "../components/Logo";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import {
  reviewDropdownOptions,
  discoverDropdownOptions,
} from "../data/dropdownData";
import homeImage from "../assets/homImage.jpg";
import ImageGrid from "../components/GeneralCart";
import hospitalImage from "../assets/hospital.jpg";
import Location1 from "../assets/delhi.jpeg"
import Location2 from "../assets/mumbai.jpg"


const Hospital = [
  { id: 1, image: hospitalImage, title: "Apollo1", description: "Hospital", link: "/hospital/apollo" ,rating: 5 },
  { id: 2, image: hospitalImage, title: "Apollo2", description: "Hospital", link: "/hospital/apollo" , rating:3 },
  { id: 3, image: hospitalImage, title: "Apollo3", description: "Hospital", link: "/hospital/apollo" },
  { id: 4, image: hospitalImage, title: "Apollo4", description: "Hospital", link: "/hospital/apollo" },
  { id: 5, image: hospitalImage, title: "Apollo5", description: "Hospital", link: "/hospital/apollo" },
  { id: 6, image: hospitalImage, title: "Apollo6", description: "Hospital", link: "/hospital/apollo" },
  { id: 7, image: hospitalImage, title: "Apollo7", description: "Hospital", link: "/hospital/apollo" },
  { id: 8, image: hospitalImage, title: "Apollo8", description: "Hospital", link: "/hospital/apollo" },
];

const Location = [
  { id: 1, image: Location1, title: "", description: "Find Best Hospital in Delhi", link: "/hospital/apollo" },
  { id: 2, image: Location2, title: "", description: "Find Best Hospital in Mumbai", link: "/hospital/apollo" },
  { id: 3, image: Location1, title: "", description: "Find Best Hospital in Delhi", link: "/hospital/apollo" },
  { id: 4, image: Location2, title: "", description: "Find Best Hospital in Mumbai", link: "/hospital/apollo" },
  { id: 5, image: Location1, title: "", description: "Find Best Hospital in Delhi", link: "/hospital/apollo" },
  { id: 6, image: Location1, title: "", description: "Find Best Hospital in Delhi", link: "/hospital/apollo" },
  { id: 7, image: Location1, title: "", description: "Find Best Hospital in Delhi", link: "/hospital/apollo" },
  { id: 8, image: Location1, title: "", description: "Find Best Hospital in Delhi", link: "/hospital/apollo" },
];


const HomePage = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
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
      <div className="w-full max-w-6xl text-center">
        <h1 className="text-xl font-bold mb-4 w-90">Best hospital choices are there!</h1>
        <ImageGrid items={Hospital} />
        <h1 className="text-xl font-bold mb-4 w-30">Places</h1>
        <ImageGrid items={Location} />

      </div>
      <footer className="w-full bg-gray-800 text-white text-center py-4 mt-10 h-50">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default HomePage;
