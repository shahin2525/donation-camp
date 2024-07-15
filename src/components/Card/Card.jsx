// import PropTypes from "prop-types";

// const NavOptions = ({ route }) => {
//   const { name, path } = route;
//   return (
//     <div>
//       <li className="hover:bg-yellow-600 w-fit">
//         <a href={path}>{name}</a>
//       </li>
//     </div>
//   );
// };
// NavOptions.propTypes = {
//   route: PropTypes.object,
// };

// export default NavOptions;

import PropTypes from "prop-types";

const Card = ({ donation }) => {
  console.log(donation);
  const {
    image,
    category,
    description,
    price,
    title,
    cardBackgroundColor,
    titleBackground,
    titleTextColor,
  } = donation;

  return (
    <div className="h-[312px] w-[285px]">
      <img src={image} alt="" srcSet="" />
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
