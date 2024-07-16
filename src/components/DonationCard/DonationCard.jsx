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
      className="grid grid-cols-3 mt-20"
      style={{ backgroundColor: cardBackgroundColor }}
    >
      <div className="col-span-1">
        <img src={image} alt="" />
      </div>
      <div className="col-span-2">
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
