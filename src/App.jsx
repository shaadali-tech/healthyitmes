import "./App.css";
import Erromessage from "./components/Errormessage";
import Listitems from "./components/Listitems";

function App() {
  let fooditems = [
    "Fruits",
    "Vegetables",
    "Nuts",
    "Seeds",
    "Whole Grains",
    "Legumes",
    "Lean Proteins",
    "Dairy",
    "Herbs and Spices",
    "Healthy Fats",
  ];

  return (
    <>
      <h1>Healthy Food Items</h1>
      <Erromessage item={fooditems}> </Erromessage>
      <Listitems item={fooditems}></Listitems>
    </>
  );
}

export default App;
