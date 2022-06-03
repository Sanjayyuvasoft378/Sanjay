import React from 'react'
import App1 from './App1'
import App3 from './App3'
import App4 from './App4'
import Yuvasoft  from './Yuvasoft'
// import "./index.html"
export default function App() {
  return (
    <>
    <App1 />
    <App3 />
    <App4 />
    <Yuvasoft age={25} name={"Sanjay Gupta"} post = {"React Js Developer"} Salary={"30k"} />
    {/* <Yuvasoft  /> */}
    <div>Apps </div>
    </>
  )
}
