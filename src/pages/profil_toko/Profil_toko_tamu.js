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



export function Profil_toko_tamu() {
    const [DataToko, setDataToko] = useState()
    const [ListKolab, setListKolab] = useState()
    const [modal, setModal] = useState(false)
    const { usaha_id } = useParams()
    const [thumbs, setThumbs] = useState()
    const [selectedProduk, setSelectedProduk] = useState()
    const [produk, setProduk] = useState()


    useEffect(() => {



        async function fetchData1() {
            axios.get('http://localhost/proyekppl/api/produkSaya.php', { params: { 'usaha_id': usaha_id } })
                .then(response => {
                    setProduk(response.data)
                    setSelectedProduk({
                        'nama_produk': response.data[0].nama_produk,
                        'deskripsi_produk': response.data[0].deskripsi_produk,
                        'url_gambar_produk': response.data[0].url_gambar_produk
                    })
                })

            const response = await axios.get(`http://localhost/proyekppl/api/profilUsaha.php`, {
                params: { usaha_id: usaha_id },
            }).then(response => {
                setDataToko(response.data)
            })

                ;
        }
        fetchData1();

        async function fetchData2() {
            const response = await axios.get(`http://localhost/proyekppl/api/kolabList.php`, {
                params: { usaha_id: usaha_id },
            }).then(response => {
                console.log(response.data)
                setListKolab(response.data)
            })

        }
        fetchData2();


    }, [usaha_id]);



    if (!DataToko || !ListKolab) { return null }

    // const navigate = useNavigate()

    function buttonList() {
        // navigate(0)
    }
    function onSelectProduk(nama_produk, deskripsi_produk, url_gambar_produk) {
        setSelectedProduk(values => ({ ...values, 'nama_produk': nama_produk }))
        setSelectedProduk(values => ({ ...values, 'deskripsi_produk': deskripsi_produk }))
        setSelectedProduk(values => ({ ...values, 'url_gambar_produk': url_gambar_produk }))
    }
    function konversiUang(uang) {
        return (uang).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        })
    }

    return (
        <>
            <div className="flex border w-5/6 m-auto ">

                <div className='border border-red-200 w-1/3 '>
                    <Header_toko url_gambar_toko={DataToko?.url_gambar_profil} nama_usaha={DataToko.nama_usaha} jenis_usaha={DataToko.jenis_usaha} />
                    <Informasi_toko alamat_toko={DataToko.alamat} kota={DataToko.kota} provinsi={DataToko.provinsi} no_hp={DataToko.no_hp} />
                    <Deskripsi_toko deskripsi_toko={DataToko.deskripsi_usaha} />


                    <h1 className="font-bold text-xl mt-2">Berkolaborasi Dengan :</h1>
                    <div className="h-44 overflow-auto bg-slate-200">
                        {ListKolab?.map((each, i) => {
                            return (
                                <Link to={'/dashboard-tamu/toko/' + each.usaha_id} onClick={buttonList}>
                                    <Card_kolaborasi key={i} jenis_usaha={each.jenis_usaha} kota={each.kota} nama_usaha={each.nama_usaha} url_gambar_profil={each.url_gambar_profil} />
                                </Link>
                            )
                        })}
                    </div>



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
                                        <div className=' w-22 h-22 border-4 shadow bg-slate-100 shadow-black cursor-pointer p-2' onClick={() => onSelectProduk(each?.nama_produk, each?.deskripsi_produk, each?.url_gambar_produk)} >
                                            <p className=''> {each.nama_produk}</p>
                                            <div className='w-22 h-22'>
                                                <img src={require('../../images/src/' + each.url_gambar_produk)}
                                                    className='inline-block w-22 h-22 object-contain border' />
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




            </div>




        </>)
}
