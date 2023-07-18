import{useState} from "react";

export default function TextComponent(props){
  let [city ,setcity] = useState("chennai");//[variablename ,]

  function changecity(){
    setcity("coimbatore")
  }
   
   return <div className="">{props.firstName}
    {props.lastName} is of age
    {props.age} comes from{city}
    <button onClick={changecity}>submit</button>
    </div>
}