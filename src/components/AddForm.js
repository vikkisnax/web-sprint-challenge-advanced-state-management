import React, { useState } from 'react';
import { connect } from "react-redux";
// 1a.
import { error } from '../reducers';
// 1b. importing action bc writing going to get info inside action to dispatch to reducer, so reducer can update state and the UI
import { addMember } from '../actions';
// 1c. 
import { fetchSmurfs } from '../actions';

const AddForm = (props) => {
    const [state, setState] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });

    // 1b.
    //remove when error state is added
    // const errorMessage = "";
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
            //dispatch a custom error action
        } else {
            //dispatch an addSmurf action

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
                    id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input 
                    onChange={handleChange} 
                    value={state.position} 
                    name="position" 
                    id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input 
                    onChange={handleChange} 
                    value={state.nickname} 
                    name="nickname" 
                    id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea 
                    onChange={handleChange} 
                    value={state.description} name="description" 
                    id="description" />
            </div>
            {
                errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {errorMessage}</div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};
//connecting action {addMember} and reducer (above)
//reference reducers with state.smurfs, for ex. 

export default connect(mapStateToProps, {addMember})(AddForm);






//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.