import { useState } from "react";
import Box from "./Box";
import "./Tictactoe.css"
function Tictactoe(){
    const[boxes,setBoxes]=useState([{circle:0,cross:0,color:"white"},
        {circle:0,cross:0,color:"white"},{circle:0,cross:0,color:"white"},
        {circle:0,cross:0,color:"white"},{circle:0,cross:0,color:"white"},
        {circle:0,cross:0,color:"white"},{circle:0,cross:0,color:"white"},
        {circle:0,cross:0,color:"white"},{circle:0,cross:0,color:"white"}]);
    const [symbol,setSymbol]=useState(false);
    const [winner,setWinner]=useState(false);
    const [draw,setDraw]=useState(false);
    function reset(){
          setSymbol(false);
          setWinner(false);
          setDraw(false);
          setBoxes([{circle:0,cross:0,color:"white"},
            {circle:0,cross:0,color:"white"},{circle:0,cross:0,color:"white"},
            {circle:0,cross:0,color:"white"},{circle:0,cross:0,color:"white"},
            {circle:0,cross:0,color:"white"},{circle:0,cross:0,color:"white"},
            {circle:0,cross:0,color:"white"},{circle:0,cross:0,color:"white"}])
    }
    function win(){
        var a;
        if(symbol){
           a="circle";
        }
        else{
            a="cross";
        }
            if(boxes[0][a]&& boxes[1][a] && boxes[2][a]){
                boxes[0].color="green";
                boxes[1].color="green";
                boxes[2].color="green";
                return true;
            }
            else if(boxes[3][a] && boxes[4][a] && boxes[5][a]){
                boxes[3].color="green";
                boxes[4].color="green";
                boxes[5].color="green";
                return true;
            }
            else if(boxes[6][a] && boxes[7][a] && boxes[8][a]){
                boxes[6].color="green";
                boxes[7].color="green";
                boxes[8].color="green";
                return true;
            }
            else if(boxes[0][a]&& boxes[3][a] && boxes[6][a]){
                boxes[0].color="green";
                boxes[3].color="green";
                boxes[6].color="green";
                return true;
            }
            else if(boxes[1][a] && boxes[4][a] && boxes[7][a]){
                boxes[1].color="green";
                boxes[4].color="green";
                boxes[7].color="green";
                return true;
            }
            else if(boxes[2][a] && boxes[5][a] && boxes[8][a]){
                boxes[2].color="green";
                boxes[5].color="green";
                boxes[8].color="green";
                return true;
            }
            else if(boxes[0][a] && boxes[4][a] && boxes[8][a]){
                boxes[0].color="green";
                boxes[4].color="green";
                boxes[8].color="green";
                return true;
            }
            else if(boxes[2][a] && boxes[4][a] && boxes[6][a]){
                boxes[2].color="green";
                boxes[4].color="green";
                boxes[6].color="green";
                return true;
            }
            return false;
    }
    function isAllBoxesMarked(){
       let flag=true;
       boxes.map((box)=>{
             if(box.cross==0 && box.circle==0)
                flag=false;
        })
       return flag;
    }
    function addSymbol(idx){
       if(symbol){
       
        boxes[idx].circle=1;
        boxes[idx].color="white";
       }
       else{
        boxes[idx].cross=1;
        boxes[idx].color="red";
       }
       if(win()){
        setWinner(true);
       }
       else if( isAllBoxesMarked()){
        setDraw(true);
       }
       setSymbol(!symbol);
       setBoxes([...boxes]);
       
    }
    return(
        <>
        <h1 style={{color:"blue"}}>TIC-TAC-TOE</h1>
        {!winner && !draw && <h2>Player {symbol?"2":"1"} turn</h2>}
        <div className="Tictactoe">
           {
            boxes.map((box,i)=>(
           <Box key={i}
            funct={addSymbol}
            circle={box.circle} 
            cross={box.cross} 
            color={box.color}
            idx={i} 
            winner={winner}
            draw={draw}/>
           ))
           }
        </div>
        {draw && <><h2>Draw</h2> <button onClick={reset}>Reset</button></> 
        || winner && <><h2>Player {symbol?"1":"2"} Won</h2> <button onClick={reset}>Reset</button></>}
        
        </>
        
    )
}

export default Tictactoe;