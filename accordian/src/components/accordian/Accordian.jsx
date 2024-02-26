import React, { useState } from "react";
import data from "./data";
import './style.css'

const Accordian = () => {
  const [selected, setSetselected] = useState(null);
  const [enable, setEnable] = useState(false)
  const [multiple, setMultiple] = useState([])

  const handleSingleSelection = (i) => {
    // console.log(i);
    setSetselected(i ===selected ? null : i);
  };

  const handleMulti = (i)=>{
    let copyMultiple = [...multiple];
    const findid = copyMultiple.indexOf(i);

    console.log(findid);
    if(findid===-1) copyMultiple.push(i);
    else copyMultiple.splice(findid,1)

    setMultiple(copyMultiple)
  }

  console.log(selected,multiple);

  return (
    <div className="wrapper">
      <button onClick={()=>setEnable(!setEnable)}>Multi Feature</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div 
                className="title"
                onClick={ enable ? ()=>handleMulti(dataItem.id) : () => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {
                enable ? multiple.indexOf(dataItem.id) !== -1 && 
                <div className="content">{dataItem.answer}</div> : selected===dataItem.id && <div className="content">{dataItem.answer}</div>
              }

              {/* {selected === dataItem.id || multiple.indexOf((dataItem.id)!==-1) ? (
                
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
