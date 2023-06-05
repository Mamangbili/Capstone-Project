import React, { useEffect } from "react"
import Navbar_dashboard from "../component/Navbar_dashboard"
import { Outlet, useParams } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import Navbar_dashboard_tamu from "../component/Navbar_dashboard_tamu"



const Dashboard_tamu = () => {
    const [usaha_id, setUsaha_id] = useState()

    useEffect(() => {
        axios.get('http://localhost/proyekppl/api/guestLogin.php',{params:{
            limit:6
        }})
        .then(response => {
            console.log(response.data)
            setUsaha_id(response.data)
        })

    },[])

    return (
    <>
        <div className="w-full h-full border-2 border-black">
            <Navbar_dashboard_tamu />
            <div className="flex flex-wrap gap-3  justify-center w-full min-h-screen m-auto">
                <Outlet/>
            </div>
        </div>
    </>
    )
}


export default Dashboard_tamu
