import "./App.css";

import { Title } from "./components/Title/Title";
import { List } from "./components/List/AnimalsList";

const animalsData = [
  {
    name: "dog",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrgVj6z0tfzZSheYRKDWVUhB5zIkiZ9vUo6rFSULPgctqkQSmlkwfCDZ1RMHxgFF2XKIlAJb_28QzyZaR5s6zfQ",
    price: "400$",
    id: "dog",
  },
  {
    name: "cat",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg",
    price: "100$",
    id: "cat",
  },
  {
    name: "rat",
    photo: "https://www.pbs.org/wnet/nature/files/2021/05/rat-1280x720.png",
    price: "50$",
    id: "rat",
  },
  {
    name: "parrot",
    photo:
      "https://images.pexels.com/photos/1463295/pexels-photo-1463295.jpeg?cs=srgb&dl=pexels-frans-van-heerden-201846-1463295.jpg&fm=jpg",
    price: "200$",
    id: "parrot",
  },
  {
    name: "hamster",
    photo:
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtc3RlcnxlbnwwfHwwfHx8MA%3D%3D",
    id: "hamster",
  },
];

function App() {
  return (
    <div className="App">
      <Container>
        <Title />
      </Container>
      <Container>
        <List data={animalsData} test={"test"} />
      </Container>
    </div>
  );
}

export default App;
