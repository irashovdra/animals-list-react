import PropTypes from "prop-types";

export const Animal = ({ animalInfo }) => {
  return (
    <li>
      <h2>{animalInfo.name}</h2>
      <img
        className="animal-photo"
        src={animalInfo.photo}
        alt={animalInfo.name}
      />
      {animalInfo.price && <p>{animalInfo.price}</p>}
    </li>
  );
};

Animal.propTypes = {
  animalInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number,
  }),
};
