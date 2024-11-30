import "./List.css";

export const List = ({ data, test }) => {
  return (
    <ul className="animals-list">
      {data.map(({ name, photo, price }) => {
        return (
          <li>
            <h2>{name}</h2>
            <img className="animal-photo" src={photo} alt={name} />
            <p>{price}</p>
          </li>
        );
      })}
    </ul>
  );
};
