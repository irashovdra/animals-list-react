import "./List.css";
import { Animal } from "../Animal/Animal";
import PropTypes from "prop-types";

export const List = ({ data, test }) => {
  return (
    <ul className="animals-list">
      {data.map((animal) => {
        return <Animal key={animal.id} animalInfo={animal} />;
      })}
    </ul>
  );
};

List.propTypes = {
  data: PropTypes.array,
  animal: PropTypes.shape({
    id: PropTypes.string,
  }),
};
