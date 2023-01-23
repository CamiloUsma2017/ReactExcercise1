const handleShowFavoriteFood = () => {
  alert("My favorite food is Pizza");
};

const title = "Favorite Foods";

const FavoriteFood = (props) => {
  const favoriteFood = {
    food1: "Spaguetti",
    food2: "Pizza",
    food3: "Hamburguer",
    food4: "Hot dog",
  };

  return (
    <div onClick={handleShowFavoriteFood}>
      <div className="containerFood">
        <h2>
          <b>{props.title}</b>
        </h2>
        <ul className="preference">
          <li>{favoriteFood.food1}</li>
          <li>{favoriteFood.food2}</li>
          <li>{favoriteFood.food3}</li>
          <li>{favoriteFood.food4}</li>
        </ul>
      </div>
    </div>
  );
};
export default FavoriteFood;
