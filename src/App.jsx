import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Erromessage from "./components/Errormessage";
import Foodinput from "./components/Foodinput";
import Listitems from "./components/Listitems";

function App() {
  let [fooditems, setFooditemlist] = useState([]);

  const handleonchange = (event) => {
    if (event.key === "Enter") {
      let newitem = event.target.value;
      setFooditemlist([...fooditems, newitem]);
      event.target.value = "";
    }
  };

  return (
    <Container className="styling">
      <h1>Healthy Food Items</h1>
      <Foodinput handleonchange={handleonchange}></Foodinput>
      <Erromessage item={fooditems}> </Erromessage>
      <Listitems item={fooditems}></Listitems>
    </Container>
  );
}

export default App;
