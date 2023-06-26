import { useEffect } from "react";
import Card_dashboard from "./card_dasboard";
import { useState } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import myimage from '../images/src/34-2023-06-03 055839-Screenshot (744).png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Thumbs } from "swiper";


export default function Beranda() {

    let { usaha_id } = useParams()
    const [Data, setData] = useState([])
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const [ListTayang, setListTayang] = useState()
    const [ thumbs, setThumbs ]= useState()

    function navigateTo(usaha_id_baru) {
        navigate(`toko/${usaha_id_baru}`)
    }


    function fetchData() {
        axios.get('http://localhost/proyekppl/api/TokoCard.php',
            {
                params:
                {
                    usaha_id: usaha_id,
                    limit: 9
                }
            }
        ).then(response => {
            console.log(response.data)
            setData(response.data)
        })

    }

    useEffect(() => {
        axios.get('http://localhost/proyekppl/api/cariUsaha.php', { params: { 'keyword': search, 'limit': 9 } })
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })

        axios.get('http://localhost/proyekppl/api/iklanTayang.php').
            then(response => {
                console.log(response.data)
                setListTayang(response.data)
            })



    }, [search])

    useEffect(() => {
        fetchData();
    }, [usaha_id]);

    console.log(Data.url_gambar_toko)
    function click() {
        console.table(Data)
    }
    if (!Data ) return null
    function onChangeCari(e) {
        console.log(e.target.value)
        setSearch(e.target.value)

    }
    return (
        <>
            <div>
                <input type='text' placeholder='Cari' onChange={(e) => {
                    onChangeCari(e)
                }} className='text-sm border-2 border-black rounded-sm p-2 w-72 my-3 ' />
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={false}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Thumbs]}
                onSwiper={setThumbs}
                className="mySwiper w-10/12"
                centeredSlides={true}
            >

                {ListTayang?.map(each => {
                    return (
                        <SwiperSlide>

                            <div className="flex justify-center w-full bg-slate-100 rounded-xl">
                                <Link to={`/dashboard/${usaha_id}/toko/${each.usaha_id}`}>
                                    <img src={require('../images/src/' + each.url_gambar_iklan)} className='w- h-72 inline-block object-fill' />
                                </Link>
                            </div>

                        </SwiperSlide>


                    )
                })}


            </Swiper>
            <div className=" w-full  flex items-center  border justify-center p-2">

                {/* <img src={myimage} alt="" /> */}
                <div className="overflow-auto flex flex-wrap justify-around w-[80vw] bg-white  gap-4 p-2">
                    {Data?.map((each) => (
                        <Link to={`/dashboard/${usaha_id}/toko/${each.usaha_id}`}>
                            <Card_dashboard
                                deskripsi_toko={each.deskripsi_toko}
                                nama_usaha={each.nama_usaha}
                                kota={each.kota}
                                url_gambar_profil={each.url_gambar_profil}
                                url_gambar_toko={each.url_gambar_toko}
                                jenis_usaha={each.jenis_usaha}
                            />
                        </Link>
                    ))}
                </div>


                {/* <button onClick={click} className="w-42 h-42"> fasdf</button> */}
                {/* <Card_dashboard /> */}
            </div>
        </>
    )
}
