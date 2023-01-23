import "./App.css";
import Personal from "./components/Personal";
import Hobbies from "./components/Hobbies";
import FavoriteFood from "./components/FavoriteFood";
import StackTech from "./components/StackTech";

function App() {
  const handleClic = () => {
    console.log("Me clickearon");
  };

  return (
    <div onClick={handleClic}>
      <h1 className="title">REACT EXCERCISE 1</h1>
      <div className="App">
        <Personal title = "Personal"/>
        <Hobbies title = "Hobbies"/>
        <FavoriteFood title = "Favorite Foods"/>
        <StackTech title = "My Stack Tech"/>
      </div>
    </div>
  );
}

export default App;