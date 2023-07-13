import logo from './logo.svg';
import Slider from './slider';
import './App.css';
import { useState } from 'react';

function App() {
  const [page,setPage]=useState(1);


  return (
    <>
    <div className='form-cont'>
    <form >
      Choose page size : 
    <select className='form-input' onChange={(e)=>{setPage(parseInt(e.target.value))}}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
    </form>
    </div>
    <Slider len={page}/>
    </>
  );
}

export default App;
