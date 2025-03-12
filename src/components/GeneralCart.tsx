import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Star } from 'lucide-react'; 


interface CardItem {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  rating?: number; 
}

interface ImageGridProps {
  items: CardItem[];
  showRatings?: boolean;
}

const ImageGrid: React.FC<ImageGridProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const totalItems = items.length;
  const itemsPerPage = 4;

  const renderRating = (rating?: number) => {
    if (!rating) return null; 
    return (
      <div className="flex items-center mt-2">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            size={18}
            className={index < rating ? "text-Green-400 fill-green-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };



  return (
    <div className="relative flex flex-wrap justify-center gap-6 mt-10 max-w-6xl my-10">
      {items.slice(currentIndex, currentIndex + 4).map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition transform hover:scale-105 w-64"
          onClick={() => navigate(item.link)}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
            {renderRating(item.rating)}  
          </div>
        </div>
      ))}

      {currentIndex > 0 && (
        <div className="absolute inset-y-35 left-0 z-2 hover:scale-105 transition-opacity duration-500 ease-in-out opacity-100">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() =>
              setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0))
            }
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0l4-4m-4 4l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </button>
        </div>
      )}

    {currentIndex + itemsPerPage < totalItems && (
    <div className="absolute inset-y-35 right-0 z-2 hover:scale-105">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            if (currentIndex < items.length - 4) {
              setCurrentIndex((prev) => prev + 1);
              console.log(currentIndex);
            }
          }}
          disabled={currentIndex + itemsPerPage >= totalItems}
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>
      )}
    </div>
  );
};

export default ImageGrid;
