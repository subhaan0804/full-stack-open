const Header = (props) => {
    return <h1>{props.courseName}</h1>
}

const Part = (props) => {
    return <p>{props.parts.name} {props.parts.exercises}</p>
}

const Course = (props) => {
    return (
        <>
            <Part parts={props.parts[0]} />
            <Part parts={props.parts[1]} />
            <Part parts={props.parts[2]} />
        </>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Total number of exercises: {props.parts[0].exercises + 
                props.parts[1].exercises + props.parts[2].exercises}</p>
        </div>
    )
}

const App = () => {
    const course = {
        name: "Half Stack Application development",
        parts: [
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
        ]
    }




    return (
        <div>
            <Header courseName={course.name} />
            <Course parts={course.parts}/>
            <Total parts={course.parts} />
        </div>
    )
}

export default App