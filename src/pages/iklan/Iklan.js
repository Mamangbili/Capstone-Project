import axios from "axios"
import { useState } from "react"
import {  useNavigate, useParams } from "react-router-dom"
import { Modal_iklan_berhasil } from "./iklan_components/Modal_iklan_berhasil"

export function Iklan() {

    const logo_kirim = 'https://static.vecteezy.com/system/resources/previews/009/992/359/original/upload-icon-sign-symbol-design-free-png.png'
    const {usaha_id} = useParams()
    
    const [fotoIklan , setFotoIklan ] = useState({preview_gambar_iklan:'https://addlogo.imageonline.co/image.jpg'})
    const [fotoBukti, setFotoBukti] = useState({preview_gambar_bukti:'https://addlogo.imageonline.co/image.jpg'})
    
    
    function nama_gambar_baru(nama) {
        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");
        const url_name = usaha_id + "-" + formattedDateTime + "-" + nama;
        var urlWithoutSpaces = url_name.replace(/[\/:]/g, "");
        return urlWithoutSpaces;
    }
    
    function handleChangeGambar(e) {
        const name = e.target.name;

        const nama_file = nama_gambar_baru(e.target.files[0].name);
        if (name === "gambar_iklan") {
            setFotoIklan({
                url_gambar_iklan: nama_file,
                preview_gambar_iklan: URL.createObjectURL(e.target.files[0]),
                files_gambar_iklan : e.target.files[0]
            });    
        }
        else{
            setFotoBukti({
                url_gambar_bukti: nama_file,
                preview_gambar_bukti: URL.createObjectURL(e.target.files[0]),
                files_gambar_bukti : e.target.files[0]

            });
        }
    }
    
    
    const navigate = useNavigate()
    const [modal,setModal] = useState(false)
    
    function tampilkanModal(){
        setModal(true)
    }
    
    function tutupModal(){
        setModal(false)
        navigate('/dashboard/'+usaha_id+'/beranda')
    }
    
    function onKirim(){
        tampilkanModal()
        const postForm = new FormData()
        postForm.append('usaha_id',usaha_id)
        postForm.append('url_gambar_iklan',fotoIklan.url_gambar_iklan)
        postForm.append('files_gambar_iklan',fotoIklan.files_gambar_iklan)
        postForm.append('url_gambar_bukti',fotoBukti.url_gambar_bukti)
        postForm.append('files_gambar_bukti', fotoBukti.files_gambar_bukti)
        
        axios.post('http://localhost/proyekppl/api/tambahIklan.php',postForm,
        {
            headers : { 'Content-Type': 'multipart/form-data' }
        })
        
            
    }
    return (
        <>
            {modal ? <Modal_iklan_berhasil okFN={tutupModal}/> : null}
            <div className="w-1/3 border gap-y-4 flex flex-col h-full p-5 rounded-md  bg-white">
                <h1 className="font-bold text-xl">Ketentuan Iklan</h1>

                <ul className="list-disc list-inside">
                    <li>Kontent tidak boleh mengandung unsur SARA, provokatif, dan menyesatkan</li>
                    <li>format png/jpg</li>
                    <li>Biaya Pemasangan iklan untuk 3 hari Rp.15,000.-</li>
                </ul>

                {/* up gambar_iklan */}
                <div className="w-full bg-slate-200  h-44">
                <img src={fotoIklan?.preview_gambar_iklan} className="object-contain w-full inline-block h-full" />
                </div>
                <input type="file" name="gambar_iklan" onChange={handleChangeGambar} accept=".png, .jpeg, .jpg"/>

                <div className="flex w-full ">
                    <div className="w-54 border ">
                        <h1 className="font-bold w-64 text-xl">Pembayaran Melalui :</h1>
                        <p>DANA     : 08214210477 </p>
                        <p>Gopay    : 08214322345</p>
                        <p>Mandiri  : 1430022239782</p>
                        <p>BRI      : 220301010507503</p>
                        <p>BNI      : 1250120585</p>
                    </div>


                    {/* up bukti */}
                    <div className=" flex-1">
                        <div className=" w-full h-28 ">
                            <img src={fotoBukti?.preview_gambar_bukti} className="inline-block w-full h-full object-contain"  />
                        </div>
                        {/* kirim */}
                        <input type="file" name='gambar_bukti' onChange={handleChangeGambar} accept=".png, .jpeg, .jpg" className="w-full"/> 
                    </div>
                    
                    


                </div>

                <div className="flex justify-center w-full p-4"> 
                    <button onClick={onKirim} className="text-white bg-lime-500 py-3 px-5 rounded-xl font-bold text-xl flex">Kirim
                    <img src={logo_kirim} className="inline-block w-6 h-6" />
                    </button>
                </div>

            </div>

        </>

    )
}
