import React, { useEffect, useState } from 'react'

const Randomcol = () => {

    const [type, setType] = useState('hex')
    const [col, setCol] = useState("#000000")

    const handleCreateRandomHEXColor=()=>{
        const hex = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']
        let hexCol = "#";
        for(let i=0;i<6;i++){
            hexCol += hex[Math.floor(Math.random()*hex.length)]
        }

        console.log(hexCol);
        setCol(hexCol)
    }
    const handleCreateRandomRGBColor=()=>{
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)
        // console.log(`rgb${r},${g},${b}`)
        setCol(`rgb${r},${g},${b}`)
    }

    useEffect(()=>{
        if(type==="rgb") handleCreateRandomRGBColor();
        else handleCreateRandomHEXColor();
    },[type])


  return (
    <div style={{width:"100%",height:"100vh", backgroundColor:col}}>
        <button onClick={()=>setCol('hex')}>Generate HEX Color</button>
        <button onClick={()=>setCol('rgb')}>Generate RGB Color</button>
        <button onClick={()=> type==="hex" ? handleCreateRandomHEXColor() :handleCreateRandomRGBColor() }>Generate Random Color</button>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent: "center",
            color:"#fff",
            fontSize:"60px",
            marginTop:"50px"
        }}>
            <h3>{type ==="rgb" ? "RGB color" : "HEX color"}</h3>
            <h1>{col}</h1>
        </div>
    </div>
  )
}

export default Randomcol