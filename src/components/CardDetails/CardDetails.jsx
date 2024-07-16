import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const cards = useLoaderData();
  //   const { image, description, price } = cards;
  const { id } = useParams();
  const idInt = parseInt(id);
  const data = cards.find((card) => card.id === idInt);
  const { image, price, description } = data;

  return (
    <div>
      <div className="flex items-center justify-center max-w-6xl flex-col">
        <div className="relative h-[700px] w-full ">
          <img
            className="mt-20 h-full w-full object-cover"
            src={image}
            alt=""
            srcSet=""
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0B0B0B] to-transparent p-4"></div>
        </div>
      </div>
      <h1>Hello</h1>
    </div>
  );
};

export default CardDetails;
