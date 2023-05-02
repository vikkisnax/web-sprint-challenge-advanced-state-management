import React from 'react';
import Smurf from './Smurf';
// 1 
import { connect } from 'react-redux';
//2 
import {addMember} from '../actions';


 const SmurfList = (props)=> {
    console.log('smurf list props:', props)
    // const isLoading = false;
    const testSmurf = {
        id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        name:'Poppa Smurf',
        position:'Village Leader',
        nickname: 'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }

    // 3
    // if (isLoading) {
    //     return <h1>Loading...</h1>;
    // }
    // make props a param in SmurfList. using the isFetching from reducers
    if (props.isFetching) {
        return <h1>Loading...</h1>
    }

    return(<div className="listContainer">
        {/* 2. */}
        {props.smurfs.map(smurf => (        
            <Smurf key={smurf.id} smurf={smurf}/>
            ))}
    </div>);
}

//1a
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching
    }
}
//connecting action {addMember} and reducer (above)
//reference reducers with props.smurfs, for ex. 

export default connect (mapStateToProps, {addMember}) (SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.