const handleShowPersonal = () => {
  alert("My name´s Juan Camilo Giraldo Usma");
};
const title = "Personal";

const Personal = (props) => {
  const personal = {
    name: "Juan Camilo Giraldo",
    age: 32,
    favoriteMovie: "Wanted",
    music: "Electronic",
  };

  return (
    <div onClick={handleShowPersonal}>
      <div className="containerPersonal">
        <h2>
          <b>{props.title}</b>
        </h2>
        <ul className="preference">
          <li>{personal.name}</li>
          <li>{personal.age}</li>
          <li>{personal.favoriteMovie}</li>
          <li>{personal.music}</li>
        </ul>
      </div>
    </div>
  );
};
export default Personal;
