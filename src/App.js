import './App.css';
import { useDispatch } from 'react-redux';
import Person from './Person';

function App() {
  const dispatch = useDispatch()
  const fetchdata = async (dispatch,get) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const response = await data.json()
    dispatch({type:"add",payload:response})
  }
  return (
    <div>
      <h1>Personal Details</h1>
      <div className='hj'>
      <button onClick={()=>dispatch(fetchdata)}>SHOW</button>
      </div>
      <Person/>
    </div>
  );
}

export default App;
