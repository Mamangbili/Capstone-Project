import React from "react"
import Navbar_dashboard from "../component/Navbar_dashboard"
import { Outlet, useParams } from "react-router-dom"



const Dashboard = () => {
    const {usaha_id} =useParams()
    return (
    <>
        <div className="w-full h-full border-2 bg-gray-200">
            <Navbar_dashboard usaha_id={usaha_id}/>
            <div className="flex flex-wrap gap-3  justify-center w-full min-h-screen m-auto">
                <Outlet/>
            </div>
        </div>
    </>
    )
}


export default Dashboard
