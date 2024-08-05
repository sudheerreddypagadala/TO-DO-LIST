import React,{useState} from "react";
function App() {
  const[text,settext] = useState("");
  const[tasks,settask] = useState([]);
  const handleClick = () =>{
      if(text.trim()!==""){
        settask([...tasks,text])
        settext("");
      }
  };
  const handleDelete = (index) =>{
    settask(tasks.filter((currenttask, i) => i !== index));
  }
  return (
    <div className="container">
        <div className="to-do">
          <h2>To-Do List<img className ="image" src ="https://png.pngtree.com/png-vector/20190930/ourmid/pngtree-to-do-list-icon-cartoon-style-png-image_1768114.jpg" alt ="to-do-image"/></h2>
          <div className="items">
              <input 
              type="text"
              placeholder="Add your task" 
              value={text}
              name="search"
              onChange={(e)=>settext(e.target.value)}

              />
              <button className="AddButton" onClick={handleClick}>Add</button>
          </div>
             <div>
               <ul className="ul">
                {tasks.map((task,index)=>(
                  <li className="li-item" key={index}>{task} 
                  <button onClick={()=>handleDelete(index)}>X</button></li>
                ))}
              </ul>
             </div>
        </div>
    </div>
  );
}

export default App;