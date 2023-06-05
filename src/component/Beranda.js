import { useEffect } from "react";
import Card_dashboard from "./card_dasboard";
import { useState } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import myimage from '../images/src/34-2023-06-03 055839-Screenshot (744).png'

export default function Beranda() {

    let { usaha_id } = useParams()
    const [Data, setData] = useState([])

    const navigate = useNavigate()

    function navigateTo(usaha_id_baru) {
        navigate(`toko/${usaha_id_baru}`)
    }


    function fetchData() {
        axios.get('http://localhost/proyekppl/api/TokoCard.php',
            {
                params:
                {
                    usaha_id: usaha_id,
                    limit: 6
                }
            }
        ).then(response => 
            {console.log(response.data)
            setData(response.data)})

    }

    useEffect(() => {
        fetchData();
    }, [usaha_id]);

    function click() {
        console.table(Data)
    }
    if (!Data) return null
    // const toko = 'toko'+'/'
    return (
        <>
            <div className="min-h-full w-full  flex items-center justify-center p-2">

                {/* <img src={myimage} alt="" /> */}
                <div className="overflow-auto flex flex-wrap justify-around w-[80vw]  gap-4 p-2">
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
