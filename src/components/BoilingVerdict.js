import React from 'react'



export const BoilingVerdict=(props)=>{
    if(props.Celsius>=100){
      return <p>The water would boil.</p>
    }else{
      return <p>The water would not boil.</p>
    }
 }

 export default BoilingVerdict
 