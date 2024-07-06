import "./Box.css"
function Box({funct,circle,cross,color,idx,winner,draw}){
    function func(){
       // console.log(idx);
       !winner && !draw && funct(idx);
    }
    return(
        <div onClick={func} className="Box"><h1 style={{color:color}}>{(circle || cross)?(circle?"O":"X"):""}</h1></div>
    )
}

export default Box;
