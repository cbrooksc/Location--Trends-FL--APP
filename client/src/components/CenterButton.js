import React from "react";
import {Component} from "react"; 


 class Hello extends React.Component {
  constructor() {
     super();
     this.state() 
     {
        title: "Click here"
     }
  }

  changeTitle = () => {
     this.setState({ title: "New title" });
  };

  render() {
      return <h1 onClick={this.changeTitle}>{this.state.title}</h1>;
  }
}

export default Hello; 











{/*
import axios from 'axios'; 




function getBirthData() {
  return axios.get('/api/birth');
}
 
function getDeathData() {
  return axios.get('/api/death');
}
function getDivorceData() {
  return axios.get('/api/divorce');
}
function getFloridaSchoolGrades() {
  return axios.get('/api/FloridaSchoolGrade');
}
function getMarriageData() {
  return axios.get('/api/marriages');
}
 
function getPopData() {
  return axios.get('/api/populationProjection');
}
 
axios.all([getBirthData(), getDeathData(),getDivorceData(),getFloridaSchoolGrades(),getMarriageData(),getPopData()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete




    axios.interceptors.request.use(request => {
      console.log('Starting Request', request.all)
      return request
    })
    
    axios.interceptors.response.use(response => {
      console.log('Response:', response)
      return response
    })
  */} 