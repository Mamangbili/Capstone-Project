import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Thumbs } from "swiper";

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
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Kolab_berhasil } from './profil_toko_components/Kolab_berhasil';


export function Profil_toko() {
    const [DataToko, setDataToko] = useState()
    const [ListKolab, setListKolab] = useState()
    const [modal, setModal] = useState(false)
    const { usaha_id_2 } = useParams()
    const { usaha_id } = useParams()
    const [thumbs, setThumbs] = useState()
    const navigate = useNavigate()
    const [produk, setProduk] = useState([])
    const [selectedProduk, setSelectedProduk] = useState()

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

        tampilkanModalBerhasil()
    }

    useEffect(() => {
        axios.get(`http://localhost/proyekppl/api/profilUsaha.php`, {
            params: { usaha_id: usaha_id_2 },
        }).then(response => {
            setDataToko(response.data)
        })
        axios.get(`http://localhost/proyekppl/api/kolabList.php`, {
            params: { usaha_id: usaha_id_2 },
        }).then(response => {
            setListKolab(response.data)
        })

        axios.get('http://localhost/proyekppl/api/produkSaya.php', { params: { 'usaha_id': usaha_id_2 } })
            .then(response => {
                console.log(response.data[0].url_gambar_produk)
                setProduk(response.data)
                setSelectedProduk({
                    'nama_produk': response.data[0].nama_produk,
                    'deskripsi_produk': response.data[0].deskripsi_produk,
                    'url_gambar_produk': response.data[0].url_gambar_produk
                })
            })

    }, []);


    let viewButtonEdit2 = false
    if (usaha_id === usaha_id_2) { viewButtonEdit2 = true }

    const [viewButtonEdit, setViewButtonEdit] = useState(false)
    const [modalEditToko, setModalEditToko] = useState(false)



    //ganti pake navigasi aja
    function to_TambahToko() {
        navigate(`/dashboard/${usaha_id}/tambahProduk`)
    }

    const [ModalBerhasil, setModalBerahsil] = useState(false)

    function tampilkanModalBerhasil() {
        setModalBerahsil(true)
    }

    function tutupModalBerhasil() {
        setModalBerahsil(false)
    }

    function to_EditToko() {
        navigate(`/dashboard/${usaha_id}/editToko`)
    }

    if (!DataToko) return null

    function pindah_toko(tokobaru) {
        navigate('/dashboard/' + usaha_id + '/toko/' + tokobaru)
        window.location.reload()
    }

    function konversiUang(uang) {
        return (uang).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        })
    }


    function onSelectProduk(nama_produk, deskripsi_produk, url_gambar_produk) {
        setSelectedProduk(values => ({ ...values, 'nama_produk': nama_produk }))
        setSelectedProduk(values => ({ ...values, 'deskripsi_produk': deskripsi_produk }))
        setSelectedProduk(values => ({ ...values, 'url_gambar_produk': url_gambar_produk }))
    }

    return (
        <>
            {modal ? <Modal_kolab onClosedFn={closedFn} onSetujuFn={setujuFN} /> : null}
            {ModalBerhasil ? <Kolab_berhasil okFN={tutupModalBerhasil} /> : null}
            <div className="flex  w-5/6 m-auto bg-white p-3 ">

                <div className='  w-1/3 '>


                    {viewButtonEdit2 ? <button onClick={to_EditToko} className='px-5 py-3 bg-slate-200 rounded-xl ml-20 shadow-md shadow-black'>Edit</button> : null}
                    {viewButtonEdit2 ? <button onClick={to_TambahToko} className='px-5 py-3 bg-slate-200 rounded-xl ml-5 shadow-md shadow-black my-2'>Tambah Produk</button> : null}

                    <Header_toko url_gambar_toko={DataToko?.url_gambar_profil} nama_usaha={DataToko.nama_usaha} jenis_usaha={DataToko.jenis_usaha} />
                    <Informasi_toko alamat_toko={DataToko.alamat} kota={DataToko.kota} provinsi={DataToko.provinsi} no_hp={DataToko.no_hp} />
                    <Deskripsi_toko deskripsi_toko={DataToko.deskripsi_usaha} />


                    <h1 className="font-bold text-xl mt-2">Berkolaborasi Dengan :</h1>
                    <div className="h-44 overflow-auto bg-slate-200">
                        {ListKolab?.map((each, i) => {
                            return (
                                <div className='cursor-pointer' onClick={() => pindah_toko(each.usaha_id)}>
                                    <Card_kolaborasi key={i} jenis_usaha={each.jenis_usaha} kota={each.kota} nama_usaha={each.nama_usaha} url_gambar_profil={each.url_gambar_profil} />
                                </div>
                            )
                        })}
                    </div>


                    {/* button kolab */}
                    {usaha_id !== usaha_id_2 ? (
                        <div className="flex w-full justify-center mt-4">
                            <button className="bg-red-400 py-3 px-5 rounded-xl shadow-md shadow-slate-400" onClick={openFn}>
                                Kolaborasi bersama {DataToko.nama_usaha}
                            </button>
                        </div>
                    ) : null}
                </div>

                <div className=' w-2/3 -blue-200 gap-y-4 flex flex-col ml-2'>
                    {/* button */}
                    <div className="flex w-full justify-center gap-x-10">
                        <Button_wa no_hp={DataToko.no_hp} />

                        <Button_maps alamat={DataToko.alamat} kota={DataToko.kota} provinsi={DataToko.provinsi} />
                    </div>

                    {/* gambar toko */}
                    <div className="w-full h-52 bg-gray-100 flex justify-center">
                        <img src={require('../../images/src/' + DataToko?.url_gambar_toko)} />
                    </div>

                    
                    <section className='text-xl text-center w-full font-bold border-t-2 border-b-2 border-black'>Produk</section>
                    {/* slide */}
                    <div className='h-auto'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            loop={false}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation, Thumbs]}
                            onSwiper={setThumbs}
                            className="mySwiper w-10/12"
                        >
                            {produk?.map((each) => {
                                return (
                                    <SwiperSlide>
                                        <div className=' w-22 h-22 border-4 shadow bg-slate-100 shadow-black cursor-pointer p-2' onClick={()=>onSelectProduk(each?.nama_produk,each?.deskripsi_produk,each?.url_gambar_produk)} >
                                            <p className=''> {each.nama_produk}</p>
                                            <div className='h-22 w-22'>
                                                <img src={require('../../images/src/' + each.url_gambar_produk)}
                                                    className='inline-block w-full object-contain border h-full' />
                                            </div>
                                            <p>{konversiUang(parseInt(each.harga))}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper >
                    </div>

                    {/* detail produk */}
                    <div className="w-full">
                        <Detail_produk nama_produk={selectedProduk?.nama_produk} deskripsi_produk={selectedProduk?.deskripsi_produk} url_gambar_produk={selectedProduk?.url_gambar_produk} />
                    </div>



                </div>


                {/* <button onClick={click}> fff</button> */}

            </div>

        </>)
}
