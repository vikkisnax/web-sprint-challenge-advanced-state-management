import React, { useState } from 'react';
import { connect } from "react-redux";
// 1b. importing action bc writing going to get info inside action to dispatch to reducer, so reducer can update state and the UI
// 1c. fetchSmurfs
import { addMember, addError } from '../actions';


const AddForm = (props) => {
    const [state, setState] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });

    // 1b and 2 -- don't need -- use error action -- in handleSubmit
    //remove when error state is added
    // const errorMessage = "";
    // const [errorMessage, setErrorMessage] = useState('');

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    // 3
    const handleSubmit = e => {
        console.log('in handle submit', state)
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
            //dispatch a custom error action
            // setErrorMessage('OH NOOOO');
            props.addError('name, position, nickname required')
        } else {
            //dispatch an addSmurf action (I named it addMember)
            props.addMember({...state, id:Math.random()})
        }
    }

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input 
                    onChange={handleChange} 
                    value={state.name} 
                    name="name" 
                    id="name" 
                    />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input 
                    onChange={handleChange} 
                    value={state.position} 
                    name="position" 
                    id="position" 
                    />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input 
                    onChange={handleChange} 
                    value={state.nickname} 
                    name="nickname" 
                    id="nickname" 
                    />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea 
                    onChange={handleChange} 
                    value={state.description} 
                    name="description" 
                    id="description" 
                />
            </div>
            {
                props.error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.error}</div>
            }
            <button onClick={(handleSubmit)}>Submit Smurf</button>
        </form>
    </section>);
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};
//connecting action {addMember} 
//reference reducers with state.smurfs, for ex. 

export default connect(mapStateToProps, {addMember, addError})(AddForm);






//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.