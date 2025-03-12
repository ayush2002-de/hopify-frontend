// import { useNavigate } from "react-router-dom";
// import image from "../assets/hospital.jpg"
// import { useState } from "react";

// interface CartItem {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
//   link: string;
// }

// const cartItems: CartItem [] = [
//   { id: 1, image: image, title: "Apollo1", description: "Hospital", link: "/hospital/apollo" },
//   { id: 2, image: image, title: "Apollo2", description: "Hospital", link: "/hospital/apollo" },
//   { id: 3, image: image, title: "Apollo3", description: "Hospital", link: "/hospital/apollo" },
//   { id: 4, image: image, title: "Apollo4", description: "Hospital", link: "/hospital/apollo" },
//   { id: 5, image: image, title: "Apollo5", description: "Hospital", link: "/hospital/apollo" },
//   { id: 6, image: image, title: "Apollo6", description: "Hospital", link: "/hospital/apollo" },
//   { id: 7, image: image, title: "Apollo7", description: "Hospital", link: "/hospital/apollo" },
//   { id: 8, image: image, title: "Apollo8", description: "Hospital", link: "/hospital/apollo" },
// ];


// const ImageCart = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const navigate = useNavigate();

//   return (
// <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 max-w-6xl">
//   {cartItems.slice(currentIndex, currentIndex + 4).map((item) => (
//     <div
//       key={item.id}
//       className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition transform hover:scale-105"
//       onClick={() => navigate(item.link)}
//     >
//       <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
//       <div className="p-4">
//         <h2 className="text-lg font-semibold">{item.title}</h2>
//         <p className="text-gray-600 text-sm">{item.description}</p>
//       </div>
//     </div>
//   ))}

// <div className="absolute inset-y-35 right-0 z-2 hover:scale-105">
// <button
//       type="button"
//       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       onClick={() => {if (currentIndex < cartItems.length - 4) {
//         setCurrentIndex(prev => prev + 1)
//       }}}
//     >
//       <svg
//         className="w-4 h-4"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 14 10"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M1 5h12m0 0L9 1m4 4L9 9"
//         />
//       </svg>
//       <span className="sr-only">Icon description</span>
//     </button>
//   </div>
// </div>
//   );
// };

// export default ImageCart;
