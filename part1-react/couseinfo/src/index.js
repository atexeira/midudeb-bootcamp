import React from 'react'
import ReactDOM from 'react-dom'
const Title =(props)=>{
  return <h1>{props.course}</h1>

}
const Content =(props)=>{
  return <p>{props.parte} {props.excercise}</p>
}

const Total = (props)=>{
const ex1 = props.ex1
const ex2 = props.ex2
const ex3 = props.ex3
const suma = ex1 + ex2 + ex3
  return <p>Number of excercises {suma} </p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
  
      <div>
        <Title course={course} />
        <Content parte={part1} excercise={exercises1} />
        <Content parte={part2} excercise={exercises2} />
        <Content parte={part3} excercise={exercises3} />
<Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
      </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))