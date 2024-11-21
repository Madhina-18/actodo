import Header from "../Components/Header";
import Card from "../Components/Card";
import TodoContainer from "../Components/TodoContainer";
import { useLocation } from "react-router-dom"
function Landing()
{    


    const data = useLocation()
    console.log(data.state.user)
    return(<div className="bg-black p-16">

        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          {/*Header*/}
          <Header username = {data.state.user}/>
           
           {/*Card*/}
          <div className="flex justify-between gap-7 my-6 flex-wrap ">
  
            <Card bgcolor={"#FF42C8"} title={"32"} subtitle={"Madurai"}/>
            <Card bgcolor={"#EE8728"} title={"November"} subtitle={"14:03:43"}/>
            <Card bgcolor={"#9B63F3"} title={"Built Using"} subtitle={"React"}/>
         </div>
  
  
           {/*TodoContainer*/}
          <TodoContainer/>
  
  
        </div>
  
      </div>
  )
}

export default Landing