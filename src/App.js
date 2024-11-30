import "./App.css";

import { Title } from "./components/Title/Title";
import { List } from "./components/List/AnimalsList";

const animalsData = [
  {
    name: "dog",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrgVj6z0tfzZSheYRKDWVUhB5zIkiZ9vUo6rFSULPgctqkQSmlkwfCDZ1RMHxgFF2XKIlAJb_28QzyZaR5s6zfQ",
    price: "400$",
  },
  {
    name: "cat",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg",
    price: "100$",
  },
  {
    name: "rat",
    photo: "https://www.pbs.org/wnet/nature/files/2021/05/rat-1280x720.png",
    price: "50$",
  },
  {
    name: "parrot",
    photo:
      "https://images.pexels.com/photos/1463295/pexels-photo-1463295.jpeg?cs=srgb&dl=pexels-frans-van-heerden-201846-1463295.jpg&fm=jpg",
    price: "200$",
  },
];

function App() {
  return (
    <div className="App">
      <Title />
      <List data={animalsData} test={"test"} />
    </div>
  );
}

export default App;
