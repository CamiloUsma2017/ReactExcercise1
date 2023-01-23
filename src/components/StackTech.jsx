const handleShowStackTech = () => {
  alert("My favorite stack tech is React");
};

const title = "Mi Stack Tech";

const StackTech = (props) => {
  const stackTech = {
    st1: "HTML",
    st2: "CSS",
    st3: "JavaScript",
    st4: "React",
  };

  return (
    <div onClick={handleShowStackTech}>
      <div className="containerStackTech">
        <h2>
          <b>{props.title}</b>
        </h2>
        <ul className="preference">
          <li>{stackTech.st1}</li>
          <li>{stackTech.st2}</li>
          <li>{stackTech.st3}</li>
          <li>{stackTech.st4}</li>
        </ul>
      </div>
    </div>
  );
};
export default StackTech;
