import { useState } from "react";
import Navbar_dashboard from "./Navbar_dashboard"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


const Form_masuk = () => {
    const navigate = useNavigate()


    const [inputLogin, setInputLogin] = useState()
    const [valid, setValid] = useState(true)
    const [loginClick, setLoginClick] = useState(false)
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setInputLogin(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = function (event) {
        setLoginClick(true)
        event.preventDefault()
        const respon = axios.post('http://localhost/proyekppl/api/login.php', inputLogin, {
            header: { 'Content-Type': 'application/json', }
        })
            .then(response => {
                if (response.data['validation'] === false ) {setValid(false)}
                toDashboard(response)
            })


    };


    const toDashboard = (response) => {
        if (response.data['validation']) {
            navigate(`/dashboard/${response.data['usaha_id']}/beranda`);
        }
        

    }

    return (
        <div className="transition">
            <form onSubmit={e => handleSubmit(e)}>
                <input className="p-2 block my-5 rounded-sm h-12 outline-1 outline  w-full" type="username" name="username" placeholder="masukan username" onChange={handleChange} />
                <input className="p-2 block my-5 rounded-sm h-12 outline-1 outline  w-full" type="password" name="password" placeholder="masukan password" onChange={handleChange} />
                <h1>{loginClick ? <IsValid />: null}</h1>
                <div className="flex justify-center">
                    <button onClick={e => handleSubmit(e)}
                        className="my-5 bg-biru w-2/3 h-12 rounded-full text-2xl font-bold">
                        Masuk
                    </button>
                </div>
            </form>
        </div >
    );
};

function IsValid (){
    return (
        <h1 className="text-red-500">Username dan Password tidak valid</h1>
    )
}

export default Form_masuk;
