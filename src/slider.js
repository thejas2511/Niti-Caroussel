import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './card';
import { useState,useEffect } from 'react';
import left from './left.png'
import right from './right.png'

const items=[
    {"bg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgSe8zEmZ2euawwCNvEAorPYWzQpMmjAs2A&usqp=CAU","ind":1},
    {"bg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmSDC9g5Sm6RbHfpWBWBzpcE8Ij_IuE8A9rg&usqp=CAU","ind":2},
    {"bg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpbYW6AZEi9kBsLu144BVXqRQnNeYRsindQ&usqp=CAU","ind":3},
    {"bg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gmL0GYkEAAj5xQ8lETqUL5WpmHS5gS_S7g&usqp=CAU","ind":4},
    {"bg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBnOmSeaH3PbUecbNCux6ZmLMEQ6pGvD3hBwG_jW5_8knwadJPcv_B31fmyyqCfCEyPg&usqp=CAU","ind":5},
    {"bg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wIGtQWjjnMgsqtE9SdYD4G7oISnsvXRAwnDeLziRlR6DOjrEIoR9Rrof63rJRTu3u10&usqp=CAU","ind":6},
    {"bg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyP4FjPKDfCrXwZTYzHqDvf0zJxe19yom1JQ&usqp=CAU","ind":7},
    {"bg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0qRvP6DyjjnArIOZV_HAEW6bYabDH2KpYg&usqp=CAU","ind":8},
    {"bg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40Gpni3ijAcIiDDFwewjEhdn-B05DzV1XmA&usqp=CAU","ind":9},


];

const Slider=(props)=>{
    //End is the page size of the caroussel
    var end=props.len;
    //creating dots

    var dots=Math.ceil(items.length/end)
    var dot_cot=[]
    var dot_url="https://static.thenounproject.com/png/658609-200.png"
    for(let i=0;i<dots;i++){
        dot_cot.push(i)
    }


    const [prev,setPrev]=useState(0)
    const [final,setFinal]=useState(end)
    const [active,setActive]=useState(0)

    //Use effect to change page whenever new page size is chosen
    useEffect(()=>{
        setFinal(end);
        setPrev(0);
        document.getElementById(`dot0`).setAttribute('src',"https://static.thenounproject.com/png/120101-200.png");
        for(let j=0;j<dot_cot.length;j++){
            
            if(j!=0){document.getElementById(`dot${j}`).setAttribute('src',dot_url)}
        }
    },[end])

    //useeffect to check whenever prev and final are changed

    useEffect(()=>{
        setPrev(prev);
        setFinal(final);
        
        document.getElementById(`dot${active}`).setAttribute('src',dot_url);
        document.getElementById(`dot${prev/end}`).setAttribute('src',"https://static.thenounproject.com/png/120101-200.png");
        setActive(prev/end)
        
    },[prev,final]);

    
    
    
    

    const backward=(event)=>{
        if(prev!=0){
            setFinal(prev);

            setPrev(Math.max(0,prev-end));
            
            
        }
        else{
            window.alert("Nothing left anymore");
        }
    }

    const forward =(event)=>{
        if(final!=items.length){
            if ((final+end)<=items.length){
                setPrev(final);
                setFinal(final+end);
                
            }
            else{
                setPrev(final)
                setFinal(items.length)
            }
           
            
        }
        else{
            window.alert("Nothing left on right side anymore");
        }
    }
    
    
    const click=(event,i)=>{
        var x=i*end
        var y=Math.min((i*end)+end,items.length);
        
        document.getElementById(`dot${i}`).setAttribute('src',"https://static.thenounproject.com/png/120101-200.png")
        for(let j=0;j<dot_cot.length;j++){
            
            if(j!=i){document.getElementById(`dot${j}`).setAttribute('src',dot_url)}
        }
        setPrev(x);
        setFinal(y);
    }
    
    //creating dots
    const myFunc=(dot)=>{
        var temp=`dot${dot}`
        return <img className='dot' id={temp} onClick={(event) => click(event,dot)} src={dot_url} height={40}></img>
    }
    
    
    
    return(
        <>
        <div className='slider-container'>
            <div className='icon' onClick={backward}><img src={left} height={150} ></img></div>
            

            {items.slice(prev,final).map((obj)=>{return <Card val={obj}/>})}


            <div className='icon' onClick={forward}><img src={right} height={150} ></img></div>
            
        </div><br></br><br></br>
        <div className='dots-cont'>
            {dot_cot.map(myFunc)}
        </div>
        </>
    );


    
}


export default Slider