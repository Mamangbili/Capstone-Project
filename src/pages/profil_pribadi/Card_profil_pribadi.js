// import myimage from 

import { useNavigate } from "react-router-dom"

export function Card_profil_pribadi({nama,email,no_hp,url_gambar_profil,usaha_id}) {
    const logo_pencil = 'https://cdn-icons-png.flaticon.com/512/266/266146.png'
    const logo_kontak = 'https://www.freepnglogos.com/uploads/logo-telepon-png/phone-telephone-communication-vector-graphic-10.png'
    url_gambar_profil = require('../../images/'+url_gambar_profil)

    const navigate = useNavigate()
    function logout(){
        navigate('/')
    }

    function edit(){
        navigate(`/dashboard/${usaha_id}/edit`)
    }

    return (
        <>

            <div className="w-72 h-96 shadow-md shadow-black border-black gap-y-5 flex flex-col   bg-gray-100">
                {/* bar biru */}
                <div className="flex bg-sky-300 ">
                    {/* gambar pensil*/}
                    <div className="w-10 h-10  cursor-pointer" onClick={edit} >
                        <img src={logo_pencil} className="w-9 h-9 inline-block" />
                    </div>

                    <h1 className="text-3xl ml-16">Profil</h1>
                </div>

                {/* gambar user*/}
                <div className="flex justify-center">
                    <img src={url_gambar_profil} className="w-24 h-24 inline-block rounded-full" />
                </div>

                <div className="flex justify-center w-10/12 ml-5">
                    <p className="text-2xl font-bold text-center">{nama}</p>
                </div>

                <div className="justify-center flex">
                    <p >{email}</p>
                </div>

                {/* no hp */}
                <div className="flex justify-center">
                    <img src={logo_kontak} className="w-6 h-6 inline-block mr-2" />
                    <p> {no_hp}</p>
                </div>

                <div className="flex justify-center">
                    <button className="border border-slate-600 w-44" onClick={logout}>keluar</button>
                </div>

            </div>



        </>



    )
}