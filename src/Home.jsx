import { useState } from "react";

const Home = ({color,setColor}) => {
  const homeClass = document.querySelector('.home');
  const [homeColor, setHomeColor] = useState('home');

  const colorHandler = (event)=> {
    event.preventDefault();
    homeClass.style.backgroundColor = color;
    setHomeColor(color);
  }

  // if(color==''){
  //   setColor('white');
  // }


  return (
    <>
    <div className="home">

      <h1>{homeColor.toUpperCase()}</h1>     
      <form onSubmit={colorHandler}>
        <label>Try a Color! <input type="text" placeholder="color" onChange={(event)=>setColor(event.target.value)}></input></label>
        <button>Try Color</button>
      </form> 
      
    </div>
    </> 
  )

}

export default Home;