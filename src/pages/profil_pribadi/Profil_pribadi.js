import { useState } from "react";
import Card_dashboard from "../../component/card_dasboard";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card_profil_pribadi } from "./Card_profil_pribadi";

export function Profil_pribadi(){

    const {usaha_id}= useParams()

    const [Data,setData] = useState()
    
    useEffect(() => {
        axios.get('http://localhost/proyekppl/api/profilUsaha.php', {params:{'usaha_id':usaha_id}})
        .then(response => {
            console.log(response)
            setData(response.data)})

    },[])

    function test(){
        // console.log(Data.url_gambar_toko)
    }


    if (!Data)return null
    


    return (
        <>
            <div className=" flex justify-center gap-x-20 mt-20">
                <Card_profil_pribadi email={Data?.email} nama={Data?.nama} no_hp={Data?.no_hp} url_gambar_profil={Data?.url_gambar_profil} usaha_id={usaha_id}/>
                
                <div className="flex justify-center flex-col mb-72">
                    <div className="flex justify-center mb-2">
                        <h1 className="text-center bg-sky-300 w-44 p-1 rounded-md">My Card</h1>
                    </div>
                <Card_dashboard  deskripsi_toko={Data.deskripsi_usaha} jenis_usaha={Data?.jenis_usaha} kota={Data?.kota} nama_usaha={Data?.nama_usaha} url_gambar_profil={Data?.url_gambar_profil} url_gambar_toko={Data?.url_gambar_toko}/>
                </div>
            </div>
        

        </>
        
    )
}