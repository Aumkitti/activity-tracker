import React from 'react'
import { useDispatch } from 'react-redux'

const Activity = ({id, name, duration}) => {
    const dispatch = useDispatch();
    //name คืออะไร duration เท่าไร 
    //delete จะส่ง 2 ค่า ตัว action และ payload
    const deleteActivity = () => {
        dispatch({
            type:"DELETE_ACTIVITY",
            payload: {
                id:id,
            }
        }) //คำสั่ง dispatch สั่งให้ store มีการอัพเดท 
    }
  return (
    <div className='section'>
      <p>
        <b>Activity:</b>{name},
        <b>Duration:</b>{duration}
        <button onClick={deleteActivity}>Delete</button>
      </p>
    </div>
  )
}

export default Activity;
