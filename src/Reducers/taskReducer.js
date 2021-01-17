import { toast } from "react-toastify";
const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      toast.success("task added");
      return state;
    }
    case "ADD_TASK_ERR": {
      toast.error("err added");
      return state;
    }
    case "REMOVE_TASK": {
      toast.warn("A task was removed...");
      return state;
    }
    case "REMOVE_TASK_ERR": {
      toast.error("A task remove error occured....");
      return state;
    }
    
    default:
      return state;
  }
};

export default taskReducer;