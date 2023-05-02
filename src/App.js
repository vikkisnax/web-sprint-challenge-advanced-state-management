import React, { Component } from "react";
//1a
import { connect } from 'react-redux';
import { fetchSmurfs } from "./actions";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props)=> {

  // 1. bc axios get request in fetchSmurfs, so do useEffect here
  React.useEffect(()=>{
    props.fetchSmurfs()
  },[]);

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

//2 don't need mapstatetoprops bc you aren't using state in reducer
export default connect(null, {fetchSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.