import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const course = "Half Stack application development";
    const parts = [
        {
            name: "Fundamentals of React",
            exercises: 10
        },
        {
            name: "Using props to pass data",
            exercises: 7
        },
        {
            name: "State of a component",
            exercises: 14
        }
    ];

    return (
        <>
            <Header course={course} />
            <Part name={parts[0].name} exercises={parts[0].exercises} />
            <Part name={parts[1].name} exercises={parts[1].exercises} />
            <Part name={parts[2].name} exercises={parts[2].exercises} />
            <Total
                exercises1={parts[0].exercises}
                exercises2={parts[1].exercises}
                exercises3={parts[2].exercises}
            />
        </>
    );
};

const Header = props => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    );
};

const Part = props => {
    return (
        <>
            <p>
                {props.name} {props.exercises}
            </p>
        </>
    );
};

const Total = props => {
    return (
        <>
            <p>
                Number of exercises{" "}
                {props.exercises1 + props.exercises2 + props.exercises3}
            </p>
        </>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));
