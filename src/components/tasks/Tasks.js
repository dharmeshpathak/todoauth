import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Tasks = ({ tasks }) => {
  return (
    <div className="container d-flex justify-content-center  flex-wrap align-content-xxl-center my-4">
      {tasks &&
        tasks.map((task) => (
          <Card  task={task}text={task.text} title={task.title} date ={task.date} key={task.id} />
        ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks: tasks,
    uid: state.firebase.auth.uid
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
      where: ["authorId", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(Tasks);
