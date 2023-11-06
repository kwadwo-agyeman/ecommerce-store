import React,{useState,useEffect} from "react";
import Btn from "./components/Buttons/Btn"
import Card from "./components/Card/Card"
import Navbar from "./components/Navbar/Navbar";
import data from "./data"
import "./app.css"
export default function App(){
const [btns,setBtns] = useState([])
const [cardArr,setCardArr] = useState([])
const [darkMode,setDarkMode] = useState(false)
/*** display card items ***/
function inspectCategory(categorizedArr){
  const cardArray = categorizedArr.map(obj=> <Card key={obj.id}
  img={obj.img} price={obj.price} brand={obj.brand} darkMode={darkMode}/>
  )
setCardArr(cardArray)
}
/*** sort cards category eg. shirts ***/
function categorize(categoryID){
  if(categoryID === "all"){
     inspectCategory(data)
  }
  else{
    const categoryArr = data.filter(item=>{ return categoryID === item.category})
    inspectCategory(categoryArr)
  }
}
/*** control dark mode ****/
function toggleTheme(){
  setDarkMode(prevMode=> !prevMode)
}
/*** btns display ***/
function btnsDisplay(){
  const BtnsArr = data.reduce((values,item)=>{
    if(!values.includes(item.category)){
      values.push(item.category)
    }
    return values
  }
  ,["all"])
  setBtns(BtnsArr.map(btn => <Btn key={btn} btn={btn} categorize={()=> categorize(btn)} darkMode={darkMode}/>))
  /*** setBtns(BtnsArr.map(btn => <Btn key={btn} btn={btn} categorize={() => categorize(btn)} />)
 * */
}
/** when window loads ***/
useEffect(()=>{
  function mountItems(){
    btnsDisplay();
    categorize("all")
  }
  mountItems()
  window.addEventListener("DOMContentLoaded",mountItems)
  return ()=>{
    window.removeEventListener("DOMContentLoaded",mountItems)
  }
  
},[darkMode])

  return(
    <main className={darkMode ? "dark":""}>
      <Navbar darkMode={darkMode} toggle={()=>toggleTheme()}/>
      <div className="filter-btns">
          {btns}
      </div>
      <div className="cards">
         {cardArr}
      </div>
    </main>
  )
}