
import React from "react";
import ReactDOM from "react-dom/client";

/*const App = () => {
 return (
   <div>
     <h1>React</h1>
   </div>
 )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App />) */




/*const App = () => {
  return (
    <div>
      <h1>Rect</h1>
      <form>
        <input type="text" placeholder='Enter your name '></input>
        <button>Submit</button>
      </form>
    </div>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App />)*/



//dynamic rendering

/*const App = () => {
  const username = "sowmiya";
  return (
    <div>
      <h1>Hello,{username}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App />)*/



//with JSX

/*const myelm = <h1>Welcome</h1>
const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(myelm);*/


//without JSX

/* const myelm1=React.createElement('h1',{},"withoutJSX")
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(myelm1); */


//expression in JSX

/*const myelem=<h1>React is {5+5} time is better</h1>
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(myelem);*/



//react list

/*const Myelem = (
  <ul>
    <li>React</li>
    <li>Js</li>
    <li>JS</li>
  </ul>
)

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Myelem/>);*/


/*const App = () => {
  return (
      <h1>Welcome-1</h1>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App />);*/


/*const App = () => {
  return (
    <>
      <h1>Welcome-1</h1>
      <h1>Welcome-2</h1>
    </>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App />);*/


//importing file and bootstrap

/*import './index.css';

const App = () => {
  return (
    <>
      <h1>Welcome-1</h1>
    </>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App />);*/

//class component

/*class Sample extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample />)*/


//conditional rendering

/*const x = 11
let text = "hello";
if (x > 10) {
  text = "world"
}
else {
  text = "hello"
}
console.log(text)
//output:hello

const Myelem = () => {
  return (
    <div>
      {text}welcome!
    </div>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem />)*/


//Nested if else

/*const x = 60
let text = "student";
if (x >= 50) {

  if (x >= 90) {
    text = "excellent"
  }
  else {
    text = "pass"
  }
}
else {
  text = "Fial"
}
const Myelem = () => {
  return (
    <div>
      {text} Mark
    </div>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem />)
*/



//else if ladder

/*const x = 4
let text = "game";
if (x == 1) {
  text = "first"
}
else if (x == 2) {
  text = "second"

}
else if (x == 3) {
  text = "third"

}
else {
  text = "Better luck next time"

}
const Myelem = () => {
  return (
    <div>
      {text} in our game
    </div>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem />)*/

//else if ladder

const Gradesystem = () => {

  let grade;
  const studentmark = prompt("Enter the your marks??")

  if (studentmark >= 90) {
    grade = 'A';
  }
  else if (studentmark >= 70) {
    grade = 'B';
  }
  else if (studentmark >= 60) {
    grade = 'C';
  }
  else {
    grade = 'F';
  }
  return (
    <div>
      <h1>Your Grade is::{grade}</h1>
    </div>
  )

}

const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Gradesystem />)


//Importing file and Bootstrap

/*import './index.css';

const App=()=>{
    return(
        <>
          <h1>Welcome</h1>
          <form>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <div id="emailHelp" className="form-text">We'll never share your email with
                anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
        </>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/
