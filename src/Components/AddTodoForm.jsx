import { useState } from "react"

function AddTodoForm(props) {


    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

   const [newactivity,setNewactivity] = useState("")

   function handleChange(evt)
   {
        setNewactivity(evt.target.value)
   }

   function Addactivity(){
          setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
          setNewactivity("")
          
   }

    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-medium text-2xl">Manage Activities</h1>

            <div>
                <input value={newactivity} onChange={handleChange} className="border border-black  bg-transparent p-1" placeholder="Write the Next Activity?" type="text" />
                <button onClick={Addactivity}  className="bg-black text-white p-1 border  border-black">Add</button>
            </div>

        </div>

    )
}


export default AddTodoForm