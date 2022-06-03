import React, { Component } from 'react'

export default class Yuvasoft extends Component {
  render() {

    return (
      <>
      {/* <div> Hello </div> */}
      <h2> </h2>
      <h1>{this.props.age}</h1>
      <h2>{this.props.name}</h2>
      <h2>{this.props.post}</h2>
      <h2>salary is = {this.props.Salary}</h2>
      <input userName ></input>
      <button >Add User</button>
      </>
    )
  }
}
