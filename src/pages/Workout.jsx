import { useState } from 'react'
import Activity from '../component/Activity'
import AddActivity from '../component/AddActivity'
import { useSelector } from 'react-redux'

const Workout = () => {
    const [add, setAdd] = useState(false); //ซ่อนและแสดงฟอร์ม
    const allActivity = useSelector((state)=> state);//เป็นการกด sub
    const handleClick = () => {
        setAdd(!add);
    }
  return (
    <div className="workour-wrapper">
        <h2>My Workout</h2>
        <button onClick={handleClick}>Add Activity</button>
        {add && <AddActivity></AddActivity>}
        {
            allActivity.map((activity)=>{
                return(
                    <Activity key={activity.id} 
                    id={activity.id} 
                    name={activity.name} 
                    duration={activity.duration}
                    />
                )
            })
        }
    </div>
  )
}

export default Workout
