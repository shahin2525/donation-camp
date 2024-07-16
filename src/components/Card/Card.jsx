import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ donation }) => {
  console.log(donation);
  const {
    id,
    image,
    category,
    // description,
    // price,
    title,
    cardBackgroundColor,
    titleBackground,
    titleTextColor,
  } = donation;
  console.log(titleBackground);

  return (
    <Link to={`card/${id}`}>
      <div
        // onClick={() => <Link to={`card/${id}`}></Link>}
        className="md:h-[312px] mb-4 rounded"
        style={{ background: cardBackgroundColor }}
      >
        <img className="w-full" src={image} alt="" srcSet="" />
        <div className="ml-2">
          <p
            className="font-medium text-[14px] p-1 w-fit rounded mt-2"
            style={{ backgroundColor: titleBackground, color: titleTextColor }}
          >
            {category}
          </p>
          <h3 className="w-fit font-semibold text-5">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  donation: PropTypes.object,
};

export default Card;
