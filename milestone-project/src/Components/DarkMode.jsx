import React from 'react'
import Lightbutton from "../../src/assets/Darkmode/light.jpg"
import DarkButton from "../../src/assets/Darkmode/Dark.jpg"
const DarkMode = () => {
const[theme,setTheme] = React.useState(
  localStorage.getItem("theme")? localStorage.getItem("theme"):"light");

  const element = document.documentElement;
  console.log(element)
React.useEffect(() =>{
localStorage.setItem("theme", theme)
if(theme === "dark"){
  element.classList.add("dark")
  element.classList.add("dark")
}else{
  element.classList.add("light")
  element.classList.remove("dark")
}


})

  return (
    <div className='relative'>
<img 
onClick={() => setTheme(theme === "dark" ? "light" :"dark")}
src={Lightbutton} alt="" className={`w-12
cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0":"opacity-100"} transition-all duration-300`}
/>
<img
onClick={() => setTheme(theme === "dark" ? "light" :"dark")}
src={DarkButton} alt="" className={`w-12
cursor-pointer `}/>
    </div>
  )
}

export default DarkMode