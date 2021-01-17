import React from 'react'
import AddTasks from '../tasks/AddTasks'
import Tasks from '../tasks/Tasks'
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom";


export default function Dashboard() {
    const uid = useSelector(state=>state.firebase.auth.uid)
    
    if (!uid) return <Redirect to="/signin" />;
    return (
        <div>
            <AddTasks />
            <Tasks />
        </div>
    )
}
