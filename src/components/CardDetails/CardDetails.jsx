import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { savedDonation } from "../../utility/utilis";
const CardDetails = () => {
  const cards = useLoaderData();
  //   const { image, description, price } = cards;
  const { id } = useParams();
  const idInt = parseInt(id);
  const data = cards.find((card) => card.id === idInt);
  const { image, price, description, titleTextColor } = data;
  // console.log(data);

  const handleId = (id) => {
    toast.success("donate successfully");
    savedDonation(id);
  };

  return (
    <div className="flex items-center justify-center flex-col max-w-6xl mx-auto">
      <div className="relative w-full mt-20">
        <img
          className="h-[700px] w-full object-cover rounded"
          src={image}
          alt=""
        />
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-black to-transparent p-4 flex justify-start items-end">
          <button
            onClick={() => handleId(idInt)}
            className="bg-opacity-70 hover:bg-opacity-90 text-black font-bold py-2 px-4 rounded transition duration-300"
            style={{ backgroundColor: titleTextColor }}
          >
            {price}
          </button>
        </div>
      </div>
      <div className="w-full mt-4 p-4 bg-white shadow-lg">
        <h2 className="text-2xl font-bold">${price}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
