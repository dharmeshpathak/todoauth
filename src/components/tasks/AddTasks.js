import React,{useState} from 'react'
 import { useDispatch } from "react-redux";
import {addTask} from "../../actions/taskActions"
// import  {connect} from "react-redux"



 function AddTasks(props) {
const initial ={title:"",text:""};
  const [newTask, setNewTask] = useState(initial);
  // const tasks = useSelector(state => state.newTask);
  const dispatch = useDispatch();
 
  const changeValue =(e)=>{
    const { name, value } = e.target;
    setNewTask(prevState => ({
                ...prevState,
                [name]: value
            }));

  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(newTask))
    // props.addTask(newTask);
    //  console.log(newTask);
    setNewTask(initial);

        
  };

    return (
        <div className="container shadow-lg p-3 mb-5 mt-5 bg-white rounded col-8 col-lg-6 col-xl-6 col-md-6 ">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3 mt-5  d-flex justify-content-center  ">
          <input
            className=" px-2 py-2 col-lg-6 form-control "
            autoComplete="None "
            type="text"
            name="title"
            placeholder="Enter the title"
            value={newTask.title}
            onChange={changeValue}
            style={{
              border: "none",
              backgroundColor: "lightcyan",
              color: "red",
              borderColor: "transparent",
              outline: "none",
              borderBottom: "2px solid blue",
              fontFamily: "georgia",
              borderRadius: "0px",
              borderTop: "None",
            }}
          /></div>
           <div className="mb-3 mt-5  d-flex justify-content-center  ">
          <input
            className=" px-2 py-2 col-lg-6 form-control "
            autoComplete="None "
            type="text"
            name="text"
            placeholder="Enter the description"
            value={newTask.text}
            onChange={changeValue}
            style={{
              border: "none",
              backgroundColor: "lightcyan",
              color: "red",
              borderColor: "transparent",
              outline: "none",
              borderBottom: "2px solid blue",
              fontFamily: "georgia",
              borderRadius: "0px",
              borderTop: "None",
            }}
          /> </div>
          <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-danger " style= {{fontFamily:"sans-serif"}}>
            Add New Task
          </button>
        </div>
      </form>
    </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTask: (task) => dispatch(addTask(task))
//   }
// }
// export default connect(null, mapDispatchToProps)(AddTasks);
export default AddTasks;