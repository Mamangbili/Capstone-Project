import { Button_maps } from "./profil_toko_components/Button_maps";
import { Button_wa } from "./profil_toko_components/Button_wa";
import { Deskripsi_toko } from "./profil_toko_components/Deskrpsi_toko";
import { Detail_produk } from "./profil_toko_components/Detail_produk";
import { Header_toko } from "./profil_toko_components/Header_toko";
import { Informasi_toko } from "./profil_toko_components/Informasi_toko";
import { List_kolaborasi } from "./profil_toko_components/List_kolaborasi";
import myimage from '../../images/src/channel.png'
import { Card_kolaborasi } from "./profil_toko_components/Card_kolaborasi";
import data from './dummListKolab'
import { useState } from "react";
import { Modal_kolab } from "./profil_toko_components/Modal_kolab";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useRef } from "react";


export function Profil_toko() {
    const [DataToko, setDataToko] = useState()
    const [modal, setModal] = useState(false)
    const refDataToko = useRef(null);
    const { usaha_id_2 } = useParams()
    const { usaha_id} = useParams()
    const refKolab = useRef(null)


    function closedFn() {
        setModal(false)
    }
    function openFn() {
        setModal(true)
    }

    function setujuFN($deskripsi){
        setModal(false)

        const postData = new URLSearchParams()
        postData.append('usaha_id_1', usaha_id);
        postData.append('usaha_id_2', usaha_id_2);
        postData.append('deskripsi_permintaan', $deskripsi );


        axios.post('http://localhost/proyekppl/api/kolabRequest.php',postData
       ).then(t=>console.log(t))
    }

    useEffect(() => {
        async function fetchData1() {
            const response = await axios.get(`http://localhost/proyekppl/api/profilUsaha.php`, {
                params: { usaha_id: usaha_id_2 },
            });
            setDataToko(response.data);
            refDataToko.current = response.data;
        }
        fetchData1();



        async function fetchData2() {
            const response = await axios.get(`http://localhost/proyekppl/api/kolabList.php`, {
                params: { usaha_id: usaha_id_2 },
            });
            refKolab.current = response.data;
        }
        fetchData2();

    }, []);


    return (
        <>
        {modal ? <Modal_kolab onClosedFn={closedFn}  onSetujuFn={setujuFN}/> : null}
            <div className="flex border w-5/6 m-auto ">

                <div className='border border-red-200 w-1/3 '>
                    <Header_toko url_gambar_toko={refDataToko.current?.url_gambar_toko} nama_usaha={refDataToko.current?.nama_usaha} jenis_usaha={refDataToko.current?.jenis_usaha} />
                    <Informasi_toko alamat_toko={refDataToko.current?.alamat} kota={refDataToko.current?.kota} provinsi={refDataToko.current?.provinsi} no_hp={refDataToko.current?.no_hp} />
                    <Deskripsi_toko deskripsi_toko={refDataToko.current?.deskripsi_usaha} />


                    <h1 className="font-bold text-xl mt-2">Berkolaborasi Dengan :</h1>
                    <div className="h-44 overflow-auto bg-slate-200">
                        {refKolab.current?.map((each, i) => {
                            return (
                                <Card_kolaborasi key={i} jenis_usaha={each.jenis_usaha} kota={each.kota} nama_usaha={each.nama_usaha} url_gambar_profil={each.url_gambar_profil} />
                            )
                        })}
                    </div>


                    {/* button kolab */}
                    <div className="flex w-full justify-center mt-4">
                        <button className="bg-red-400 py-3 px-5 rounded-xl shadow-md shadow-slate-400" onClick={openFn}>Kolaborasi bersama {refDataToko.current?.nama_usaha}</button>
                    </div>
                </div>

                <div className='border w-2/3 border-blue-200 gap-y-4 flex flex-col'>
                    {/* button */}
                    <div className="flex w-full justify-center gap-x-10">
                        <Button_wa no_hp={refDataToko.current?.no_hp} />

                        <Button_maps alamat={refDataToko.current?.alamat} kota={refDataToko.current?.kota} provinsi={refDataToko.current?.provinsi} />
                    </div>

                    {/* gambar toko */}
                    <div className="w-full h-52 bg-gray-100 flex justify-center">
                        <img src={refDataToko.current?.url_gambar_toko} />
                    </div>


                    {/* slide */}
                    {/* <CardContainer cards={cardsData} /> */}

                    {/* detail produk */}
                    <div className="w-full">
                        <Detail_produk nama_produk={refDataToko.current?.no} deskripsi_produk={refDataToko.current?.no} url_gambar_produk={refDataToko.current?.no} />
                    </div>



                </div>


                {/* <button onClick={click}> fff</button> */}

            </div>

        </>)
}
