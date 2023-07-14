import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './card';
import { useState,useEffect } from 'react';
import left from './left.png'
import right from './right.png'

const items=[
    {"bg":"https://w0.peakpx.com/wallpaper/251/466/HD-wallpaper-ronaldo-with-nations-league-trophy-ronaldo-nations-league-trophy-sports-athlete-footballer.jpg","ind":1},
    {"bg":"https://e0.pxfuel.com/wallpapers/429/229/desktop-wallpaper-virat-kohli-on-twitter-virat-kohli-cricket-cricket-virat-kohli-cartoon.jpg","ind":2},
    {"bg":"https://e0.pxfuel.com/wallpapers/710/324/desktop-wallpaper-ultra-lock-screen-ms-dhoni.jpg","ind":3},
    {"bg":"https://w0.peakpx.com/wallpaper/384/965/HD-wallpaper-sunil-chhetri-abstract-art-india-national-team-soccer-footballers-chhetri-neon-lights-indian-football-team.jpg","ind":4},
    {"bg":"https://wallpapercave.com/wp/wp9719030.jpg","ind":5},
    {"bg":"https://images.hdqwalls.com/download/sachin-tendulkar-1125x2436.jpg","ind":6},
    {"bg":"https://besthqwallpapers.com/Uploads/11-4-2022/197753/thumb2-kevin-de-bruyne-4k-2022-manchester-city-fc-blue-neon-lights.jpg","ind":7},
    
    {"bg":"https://w0.peakpx.com/wallpaper/60/877/HD-wallpaper-suresh-raina-india-raina-suresh-raina.jpg","ind":8},
    {"bg":"https://i2-prod.football.london/incoming/article21584976.ece/ALTERNATES/s1200c/0_Jude-Bellingham.jpg","ind":9},


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