import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((eachPart) => {
        return (
          <Part
            key={eachPart.id}
            parts={eachPart.name}
            exercises={eachPart.exercises}
          />
        );
      })}
    </div>
  );
};

export default Content;
