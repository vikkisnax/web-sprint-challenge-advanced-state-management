import {
    FETCH_APP_START,
    FETCH_APP_SUCCESS,
    FETCH_APP_FAIL,
    ADD_MEMBER,
    ADD_ERROR
} from "../actions";

// 1. state slices
const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

// id:"",
// name:'',
// position:'',
// nickname: '',
// description: '',




// 2. add state and action args 

export const reducer = (state = initialState, action)=>{

    console.log('action:', action);
    console.log('action.payload = smurf = state', action.payload);

    switch(action.type){
        //3-5. REDUCER CASES
        case FETCH_APP_START:
            return{
                ...state,
                isFetching: true,
                error: '',
            };
        case FETCH_APP_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_APP_FAIL:
            return{
                ...state,
                isFetching: false,
                error: ''
            };
        case ADD_MEMBER:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            };
        case ADD_ERROR:
            return{
                ...state,
                error: action.payload
            };
        default: return state;
    }

}


//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading (t/f)
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.