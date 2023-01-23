const handleShowHobbies = () => {
  alert("My favorite hobby is Music");
};

const title = "Hobbies";

const Hobbies = (props) => {
  const hobbies = {
    hob1: "To travel",
    hob2: "Eat",
    hob3: "Music",
    hob4: "Sport",
  };

  return (
    <div onClick={handleShowHobbies}>
      <div className="containerHobbies">
        <h2>
          <b>{props.title}</b>
        </h2>
        <ul className="preference">
          <li>{hobbies.hob1}</li>
          <li>{hobbies.hob2}</li>
          <li>{hobbies.hob3}</li>
          <li>{hobbies.hob4}</li>
        </ul>
      </div>
    </div>
  );
};
export default Hobbies;
