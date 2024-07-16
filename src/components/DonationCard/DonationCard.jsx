import { useNavigate } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const navigate = useNavigate();
  const {
    image,
    price,
    category,
    title,
    id,
    cardBackgroundColor,
    titleBackground,
    titleTextColor,
  } = donation;
  const handleViewDetails = () => {
    navigate(`/card/${id}`);
  };
  return (
    <div
      className="grid sm:grid-cols-1 md:grid-cols-3 mt-20"
      style={{ backgroundColor: cardBackgroundColor }}
    >
      <div className="md:col-span-1">
        <img src={image} alt="" />
      </div>
      <div className="sm:col-1 md:col-span-2">
        <h3>{category}</h3>
        <h1>{title}</h1>
        <p>{price}</p>
        <button
          onClick={handleViewDetails}
          style={{ backgroundColor: titleBackground, color: titleTextColor }}
        >
          view details
        </button>
      </div>
    </div>
  );
};

export default DonationCard;
