//to make API call here
import axios from 'axios';

// action type -- action_creators = 'action_constants'
export const FETCH_APP_START = "FETCH_APP_START";
export const FETCH_APP_SUCCESS = "FETCH_APP_SUCCESS";
export const FETCH_APP_FAIL = "FETCH_APP_FAIL";
export const ADD_MEMBER = "ADD_MEMBER";
export const ADD_ERROR = "ADD_ERROR";


// // action creators

// 1. thunk function - action creator function takes in another function - & fetch data from API - fix
export const fetchSmurfs = () => dispatch => {
    console.log('action')
    dispatch({ type: FETCH_APP_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res=>{
           console.log('response', res); 
            dispatch({
                type:FETCH_APP_SUCCESS, 
                payload: res.data
            })}
        )
        .catch(err => 
            dispatch({ 
                type: FETCH_APP_FAIL, 
                payload: err
            })
        ) 
                
}

// 2. normal actions
export const addMember = (smurf) => {
    console.log('smurf action :', smurf)
    return({
        type: ADD_MEMBER,
        payload: smurf
    })
}

// 3. 
export const addError = (error) =>{
    return({
        type: ADD_ERROR,
        payload: error
    })
}



//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.