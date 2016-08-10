import "babel-polyfill";
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
//const fs = require("fs")
//import Frisbee from 'frisbee';
//import 'isomorphic-fetch';
import superagent from 'superagent'
import Auto from './Auto.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {person: {}}
  }

  logInfo(e){
    this.setState({person: {md: e.target.value}})
  }

sayHello() {
  // const api = new Frisbee({
  //     baseURI: 'http://localhost:3700',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  // });

  // const showData = async () => {
  //   let res =  await api.get('/showladies');
  //   console.log(res.body)
  // }
  // showData();

  //whit arrown function this. with function() need asing this to variable
  let ctx = this
  superagent.get('http://localhost:3700/showladies', function(err, res) {
    if (err) throw err;
    ctx.setState({person: res.body[0]});
  });

  console.log("Button clicked");
  }

  componentDidMount(){
    this.setState({person: {first_name: "Jhon", last_name: "Millner"}})
  }

  render() {
    return (
      <div>
      <h1>Hello, world.</h1>
      <Button onClick={this.sayHello.bind(this)} bsStyle="primary" bsSize="large">Click me!</Button>
      <p id="p1">Fisrt name --- > {this.state.person.first_name}</p>
      <p id="p2">Last name --- >{this.state.person.last_name}</p>
      <Auto objAuto={{model: "Berlineta", mark: "Ferrari", price: "42342432232"}} info={this.logInfo.bind(this)} />
      <p> Your tiping: {this.state.person.md}</p>
      </div>
    );
  }

}

export default App
