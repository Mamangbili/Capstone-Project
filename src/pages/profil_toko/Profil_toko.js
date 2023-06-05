import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation,Thumbs } from "swiper";

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


export function Profil_toko() {
    const [DataToko, setDataToko] = useState()
    const [ListKolab, setListKolab] = useState()
    const [modal, setModal] = useState(false)
    const { usaha_id_2 } = useParams()
    const { usaha_id } = useParams()
    const [thumbs, setThumbs]=useState()

    function closedFn() {
        setModal(false)
    }
    function openFn() {
        setModal(true)
    }

    function setujuFN($deskripsi) {
        setModal(false)

        const postData = new URLSearchParams()
        postData.append('usaha_id_1', usaha_id);
        postData.append('usaha_id_2', usaha_id_2);
        postData.append('deskripsi_permintaan', $deskripsi);


        axios.post('http://localhost/proyekppl/api/kolabRequest.php', postData
        ).then(t => console.log(t))
    }

    useEffect(() => {
        async function fetchData1() {
            const response = await axios.get(`http://localhost/proyekppl/api/profilUsaha.php`, {
                params: { usaha_id: usaha_id_2 },
            }).then(response => {
                setDataToko(response.data)})
            
            ;
        }
        fetchData1();



        async function fetchData2() {
            const response = await axios.get(`http://localhost/proyekppl/api/kolabList.php`, {
                params: { usaha_id: usaha_id_2 },
            }).then(response =>{
                console.log(response.data)
                setListKolab(response.data)
            } )
            
        }
        fetchData2();

    }, []);

    function produk_focus (){

    }
    
    if (!DataToko ) return null 

    return (
        <>
            {modal ? <Modal_kolab onClosedFn={closedFn} onSetujuFn={setujuFN} /> : null}
            <div className="flex border w-5/6 m-auto ">

                <div className='border border-red-200 w-1/3 '>
                    <Header_toko url_gambar_toko={DataToko?.url_gambar_profil} nama_usaha={DataToko.nama_usaha} jenis_usaha={DataToko.jenis_usaha} />
                    <Informasi_toko alamat_toko={DataToko.alamat} kota={DataToko.kota} provinsi={DataToko.provinsi} no_hp={DataToko.no_hp} />
                    <Deskripsi_toko deskripsi_toko={DataToko.deskripsi_usaha} />


                    <h1 className="font-bold text-xl mt-2">Berkolaborasi Dengan :</h1>
                    <div className="h-44 overflow-auto bg-slate-200">
                        {ListKolab?.map((each, i) => {
                            return (
                                <Card_kolaborasi key={i} jenis_usaha={each.jenis_usaha} kota={each.kota} nama_usaha={each.nama_usaha} url_gambar_profil={each.url_gambar_profil} />
                            )
                        })}
                    </div>


                    {/* button kolab */}
                    <div className="flex w-full justify-center mt-4">
                        <button className="bg-red-400 py-3 px-5 rounded-xl shadow-md shadow-slate-400" onClick={openFn}>Kolaborasi bersama {DataToko.nama_usaha}</button>
                    </div>
                </div>

                <div className='border w-2/3 border-blue-200 gap-y-4 flex flex-col'>
                    {/* button */}
                    <div className="flex w-full justify-center gap-x-10">
                        <Button_wa no_hp={DataToko.no_hp} />

                        <Button_maps alamat={DataToko.alamat} kota={DataToko.kota} provinsi={DataToko.provinsi} />
                    </div>

                    {/* gambar toko */}
                    <div className="w-full h-52 bg-gray-100 flex justify-center">
                        <img src={require('../../images/src/'+DataToko?.url_gambar_toko)} />
                    </div>


                    {/* slide */}
                    <div className=' h-96'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={0}
                            loop={false}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation, Thumbs]}
                            onSwiper={setThumbs}
                            className="mySwiper w-9/12"
                        >
                            <SwiperSlide>
                                <div className='border-4 border-red-600 w-44 h-44'>
                                    <img src="https://akcdn.detik.net.id/visual/2022/10/12/anime-spy-x-family_169.png?w=650"
                                        className='inline-block w-full h-full object-contain' />
                                </div>
                            </SwiperSlide>

                            

                            
                        </Swiper >
                    </div>

                    {/* detail produk */}
                    <div className="w-full">
                        <Detail_produk nama_produk={DataToko.nama_produk} deskripsi_produk={DataToko.deskripsi_produk} url_gambar_produk={DataToko.url_gambar_produk} />
                    </div>



                </div>


                {/* <button onClick={click}> fff</button> */}

            </div>

        </>)
}
