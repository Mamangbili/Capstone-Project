import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Valid_component() {
    return (
        <h1 className="text-red-500 w-44 ">password tidak sama atau kurang dari 8</h1>
    )
}


const Form_daftar = () => {
    const navigate = useNavigate()
    

    const [inputForm, setInputForm] = useState({
        'nama': '',
        'username': '',
        'email': '',
        'no_hp': '',
    })

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputForm(values => ({ ...values, [name]: value }))
    }

    

    const [pass, setPass] = useState({ 'password': '', 'password-konfirmasi': '' })
    const [isValid, setIsValid] = useState(false)
    
    const passValidation = (event) => {
        const name = event.target.name
        const value = event.target.value
        setPass(values => ({ ...values, [name]: value }))
        setInputForm(values=>({...values, [name]:value}))

    }


    const handleEmail = (event) => {
        const nama = event.target.name
        const value = event.target.value
        console.log(value)
        if (isValidEmail(value)) {
            setInputForm(values => ({...values, [nama] : value }))
            setValidEmail(value)}
        else {
            setValidEmail(value)}

    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const [validEmail, setValidEmail] = useState(true)

    useEffect(() => {
        if (pass['password'].length < 8 || pass['password-konfirmasi'].length < 8) {
            setIsValid(false)
        }
        else if (pass['password'] === pass['password-konfirmasi']) {

            setIsValid(true)
        }
        else {
            setIsValid(false)
        }


    }, [pass, isValid, inputForm])


    const toDetail_toko_form = (response) => {
        if (response.data.status) {
            navigate(`/detailTokoForm/${response.data.user_id}`)
        }
    }

    const handleSubmit = function (event) {
        event.preventDefault()
        if (isValid && validEmail) {
            axios.post('http://localhost/proyekppl/api/register.php', inputForm, {
                header: { 'Content-Type': 'application/json', }
            })
                .then(response => {
                    console.log(response.data.user_id)

                    if(response.data.status){toDetail_toko_form(response)}
                })
        }
    };

    return (
        <div className="transition ">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="nama" placeholder="Nama" className="p-2 block my-5 w-full h-9 rounded-sm outline outline-1 outline-red" />
                <input onChange={handleChange} type="text" name="username" placeholder="Username" className="p-2 block my-5 w-full h-9 rounded-sm outline outline-1" />
                <input onChange={handleChange} type="tel" name="no_hp" placeholder="Nomor Handphone" className="p-2 block my-5 w-full h-9 rounded-sm outline outline-1" />
                <input onChange={handleEmail} type="email" name="email" placeholder="Email" className={`p-2 block my-5 w-full h-9 rounded-sm outline outline-1`} />
                <input onChange={passValidation} type="password" name="password" placeholder="Password" className="p-2 block my-5 w-full h-9 rounded-sm outline outline-1" />
                <input onChange={passValidation} type="password" name="password-konfirmasi" placeholder="Konfirmasi password" className="p-2 block my-5 w-full h-9 rounded-sm outline outline-1" />
                {!isValid ? <Valid_component /> : null}
                <div className="justify-center flex">
                    <button className="text-2xl font-bold w-full h-10 rounded-full bg-biru my-5" onClick={handleSubmit}>Daftar</button>
                </div>
            </form>
        </div>
    )
}



export default Form_daftar;
