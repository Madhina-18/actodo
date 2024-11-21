
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function TodoContainer() {



    const [activityArr, setactivityArr] = useState([
        {
            id: 1,
            activity: "Go For a Walk"
        },
        {
            id: 2,
            activity: "Take a Shower"
        },
        {
            id: 3,
            activity: "Have a Breakfast"
        }
    ])
    return (
        <div>

            <div className="flex gap-6 flex-wrap ">
                <AddTodoForm activityArr={activityArr}  setactivityArr={setactivityArr}/>
                <TodoList activityArr={activityArr}  setactivityArr={setactivityArr}/>


            </div>
        </div>
    )
}

export default TodoContainer