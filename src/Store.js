//https://jsonplaceholder.typicode.com/users/1
import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"; // Importing the thunk middleware directly


const initialData = {
  userData: {},
  value:false
};

function Myapplication(state = initialData, action) {
    if(action.type==="add"){
        return {...state,...action.payload,value:true}

    }
    return state;
}

const store = createStore(Myapplication, applyMiddleware(thunk));

export default store;
