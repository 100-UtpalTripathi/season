import React from 'react'
import './SeasonDisplay.css'


const SeasonDisplay = (props) => {
  const Season = getSeason(props.lat, new Date().getMonth())
  
  const {text, icon, color} = SeasonConfig[Season]
  // const text = (Season === 'Winter' ? 'Burr, Its chilly' : 'Lets Hit the Beach!')
  // const icon = (Season === 'Winter' ? 'snowflake' : 'sun');
  // const color = (Season === 'Winter' ? 'purple' : 'yellow');
  return (
    <div className = {`text ${Season}`}>
      <i className={`${icon} ${color} massive icon icon-left`}></i>
      <h1>
        {text}  
      </h1>
      <i className={`${icon} ${color} massive icon icon-right`}></i>
    </div>
    
  );
}
const SeasonConfig = {
  Winter : {
    text : "Bahut Jada Hai, nahi ho raha kya..?",
    icon : 'snowflake',
    color : 'purple'
  },
  Summer : {
    text : "Body heat up ho raha..",
    icon : 'sun',
    color : 'red'
  }
}
const getSeason = (lati, month) => {
  if(month > 2 && month < 9)
    return lati > 0 ? 'Summer' : 'Winter'
  else
    return lati > 0 ? 'Winter' : 'Summer'
}


export default SeasonDisplay;