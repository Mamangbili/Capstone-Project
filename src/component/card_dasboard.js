import { useNavigate } from "react-router-dom"
import myfile from "../images/src/wa.webp"
import myimage from '../images/src/34-2023-06-03 055839-Screenshot (744).png'


export default function Card_dashboard({ url_gambar_toko, url_gambar_profil, nama_usaha, kota, jenis_usaha, deskripsi_toko }) {
    const logo_pin = 'https://cdn-icons-png.flaticon.com/512/72/72617.png'

    const t1 = require("../../src/images/src/"+url_gambar_toko)
    const t2 = require("../../src/images/src/"+url_gambar_profil)
    
    if (!url_gambar_toko || !url_gambar_profil || !nama_usaha || !kota || !jenis_usaha || !deskripsi_toko) return null

    return (
        <>
            <div className=" w-72 h-80 shadow-md rounded-xl shadow-black bg-gray-100   flex flex-col">

                {/* gambar gede*/}
                <div className="w-full h-[35%]  item-center  rouded-xl">
                    <img src={t1} className="inline-block rounded-b-fullfull w-full h-full object-fill" />
                </div>

                {/* informasi */}
                <div className="flex w-full items-center h-[20%] bg-  p-2">
                    {/* gambar */}
                    <div className="w-10 h-10">
                        <img src={t2} className="inline-block w-full h-full" />
                    </div>
                    {/* informarsi */}
                    <div className="ml-1 flex flex-col w-6/12 justify-between ">
                        <h1 className="font-bold">{nama_usaha}</h1>
                        <div className="flex w-4 gap-x-1 h-4 items-center">
                            <img src={logo_pin} className="w-full h-full inline-block object-cover rounded-full" />
                            <p>{kota}</p>
                        </div>
                    </div>
                    {/* jenis */}
                    <div className="w-3/12 ">
                        <p className="bg-slate-300 h-10 pt-1 text-xs rounded-md text-center ">{jenis_usaha}</p>
                    </div>
                </div>
                
                {/* deskripsi */}
                <div className="w-full h-36   p-2">
                    <p className="h-full overflow-clip text-xs">{deskripsi_toko}</p>
                </div>



            </div>

        </>
    )
}
