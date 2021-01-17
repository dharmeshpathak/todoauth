import moment from "moment";
import React from "react";
import {removeTask } from "../../actions/taskActions" 
import { useDispatch } from "react-redux";

// import {connect} from "react-redux"


function Card({task,title,text,date}) {
  //  const tasks = useSelector(state => state.firestore.ordered.tasks);
   const dispatch = useDispatch();
  
  // const handleRemove = (task) => {
  //   removeTask(task);
  // };
  
  return (
    <>
      <div style={{ display: "flex", textAlign: "center", padding: "20px" }}>
        <div
          className="card shadow-lg p-3 mb-3 bg-white rounded"
          style={{ width: "18rem" }}
        >
          <ul className="list-group list-group-flush">
            <li
              className="list-group-item"
              style={{
                backgroundColor: "lightcyan",
                color: "grey",
                fontFamily: "georgia",
              }}
            > <span style ={{fontFamily:"cursive"}}><b>Title -</b></span> 
              {title}
            </li>
            <li
              className="list-group-item"
              style={{ fontFamily: "georgia", color: "red" }}
            >
              <span style ={{fontFamily:"cursive"}}> <b>Description - </b></span>
              {text}
            </li>
            <li
              className="list-group-item"
              style={{ fontFamily: "georgia", color: "red" }}
            >
              <span style ={{fontFamily:"cursive"}}><b> Added On -</b> </span>
              {moment(date.toDate()).calendar()}
            </li>


            <li className="list-group-item" >
              <button
                className="btn btn-light "
                style={{ color: "red" }}
                onClick={() => dispatch(removeTask(task))}
              >
                <span style={{ fontWeight: "bolder" }}><span className="material-icons" style={{color:"blue"}}>
delete_outline
</span></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;
// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeTask: (task) => dispatch(removeTask(task)),
    
//   };
// };
// export default connect(null, mapDispatchToProps)(Card);
