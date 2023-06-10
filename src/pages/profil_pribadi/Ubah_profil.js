import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Ubah_profil() {
    const { usaha_id } = useParams()
    const [Data, setData] = useState()
    const [Input, setInput] = useState({

    })
    useEffect(() => {
        axios.get('http://localhost/proyekppl/api/profilUsaha.php', { params: { 'usaha_id': usaha_id } })
            .then(response => {
                console.log(response.data)
                setData(response.data)
                setInput({
                    nama: response.nama,
                    email: response.email,
                    no_hp: response.no_hp,
                })
            })
    }, [])

    const [img,setImg] = useState({})
    const handleChange = (event) => {
        if (event.target.name === "gambar") {
            

            const currentDateTime = new Date();
            const formattedDateTime = currentDateTime.toISOString().slice(0, 19).replace('T', ' ');
            const url_name = Data.user_id + '-' + formattedDateTime + '-' + event.target.files[0].name
            var urlWithoutSpaces = url_name.replace(/[\/:]/g, '');
            setImg((prevState) => ({
                ...prevState,
                'url_gambar_profil': urlWithoutSpaces
            }));
            setImg((prevState) => ({
                ...prevState,
                'file_gambar_profil': event.target.files[0]
            }));
        }
        else {
            setData(values => ({ ...values, [event.target.name]: event.target.value }));
        }
    }

    if (!Data) return null
    let img_url = require('../../images/src/' + Data?.url_gambar_profil)

    // function ubahGambar (){

    // }

    function submit() {
        // const inputForm = new FormData()
        // inputForm.append('nama', Data.nama,)
        // inputForm.append('user_id', Data.user_id,)
        // inputForm.append('email', Data.email,)
        // inputForm.append('no_hp', Data.no_hp)
        // inputForm.append('url_gambar_profil', img.url_gambar_profil)
        // inputForm.append('file_gambar_profil', img.file_gambar_profil)

        // axios.post('http://localhost/proyekppl/api/ubahProfil.php', inputForm, { headers: { 'Content-Type': 'multipart/form-data' } })
        //     .then(response => console.log(response.data))

    }

    return (
        <>
            <div className=" shadow shadow-slate-700 p-10 min-h-screen  m-auto w-5/12">

                <div className=" min-h-screen flex flex-col">
                    <div className="flex justify-center"><img src={img_url} className=" w-52 h-52 inline-block rounded-full" /></div>
                    <div className="flex justify-center ml-20 mt-3"><input name='gambar' onChange={handleChange} type="file" /></div>


                    <section className="text-center text-2xl font-bold">Ubah bidota</section>
                    <div className="flex flex-col bg-slate-300 p-10 pt-8">
                        <label htmlFor="nama">nama :</label>
                        <input className=" p-2 rounded-md border border-slate-500" value={Data.nama} onChange={handleChange} name='nama' type="text" />

                        <label htmlFor="email">email :</label>
                        <input className=" p-2 rounded-md border border-slate-500" type="email" value={Data.email} onChange={handleChange} name='email' />

                        <label htmlFor="email">nomor hp :</label>
                        <input className=" p-2 rounded-md border border-slate-500" value={Data.no_hp} onChange={handleChange} name='no_hp' type="tel" />
                    </div>

                    <div className="flex justify-center mt-5">
                        <button onClick={submit} className="bg-lime-300 rounded-md shadow-xl w-44 h-14">Simpan perubahan</button>
                    </div>


                </div>





            </div>



        </>

    )




}