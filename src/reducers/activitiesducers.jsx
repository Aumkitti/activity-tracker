import {v4 as uuidv4} from "uuid";
const initialState = [
    {
        id:1,
        name:"running",
        duration:"1 hour"
    },
];

const activitiesReducer = (state=initialState, action)=>{
    const {type, payload} = action;
    switch (type) {
        case "CREATE_ACTIVITY":
            return[...state, {
                id:uuidv4(),
                name: payload.name,
                duration: payload.duration
            }
        ]; //ลบอันเดิมทิ้งและเอาอันใหม่ใส่


        case "DELETE_ACTIVITY": //เก็บเฉพาะอันที่ไม่ใช่ไอดี อันที่มีไอดีเหมือนกันจะลบออก โดย filter
            const copyState = [...state];
            return copyState.filter((activity)=>activity.id !== payload.id);
            
        default:
            return state;
    }
}
export default activitiesReducer;