
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => {

  return (
    <div>
      {courses.map((eachCourse) => {
        return (
          <div key={eachCourse.id}>
            <Header name={eachCourse.name} />
            <Content parts={eachCourse.parts} />
            <Total parts={eachCourse.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
