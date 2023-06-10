import { useState } from "react"
// import data from "./dummListKolab"
import { Card_mitra } from "./mitra_components/Card_mitra"
import { Modal_konfirmasi_hapus } from "./mitra_components/Modal_konfirmasi_hapus"
// import dataP from "./dataPermintaanKolab"
import { Card_Permintaan_kolab } from "./mitra_components/Card_permintaan_kolab"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"


export function Mitra() {


    const [ListViewsPermintaan, setListViewPermintaan] = useState()
    const [IndexHapusPermintaan, setIndexHapusPermintaan] = useState()
    const [ListViewsKolab, setListViewsKolab] = useState([])
    const [modalKolab, setModalKonfirmasiKolab] = useState(false)
    const [IndexHapusKolab, setIndexHapusKolab] = useState(0)
    const { usaha_id } = useParams()
    const [data, setData] = useState()
    const usaha_login = usaha_id

    function hapusMitra(usaha_id_2) {
        axios.delete('http://localhost/proyekppl/api/deleteMitra.php', {
            headers: {
                Authorization: ''
            },
            data: {
                'usaha_id_1': usaha_login,
                'usaha_id_2': usaha_id_2
            }
        })
            .then(res => console.log(res))
    }

    function fetchData() {
        axios.get('http://localhost/proyekppl/api/kolabSaya.php',
            {
                params: { usaha_id: usaha_id, }
            }
        ).then(response => {
            setListViewsKolab(response.data.kolab)
            setListViewPermintaan(response.data.permintaan)
        })

    }

    useEffect(() => {
        fetchData();
    }, [usaha_id,IndexHapusKolab]);


    //jgn lupa update api
    function hapusFN() {
        const newListData = ListViewsKolab.filter(each => each.usaha_id !== IndexHapusKolab)
        console.log(IndexHapusKolab)
        hapusMitra(IndexHapusKolab)
        setListViewsKolab(newListData)
        setModalKonfirmasiKolab(false)
    }
    
    function tampilkanModal(usaha_id) {
        setModalKonfirmasiKolab(true)
        setIndexHapusKolab(usaha_id)
    }

    function batalFN() {
        setModalKonfirmasiKolab(false)
    }

    function tolakAPI(usaha_id_2){
        axios.post('http://localhost/proyekppl/api/tolakPermintaan.php', {
            'usaha_id_1':usaha_login,
            'usaha_id_2':usaha_id_2
        }).then(response=>console.log(response))    

    }

    function terimaAPI(usaha_id_2){
        axios.post('http://localhost/proyekppl/api/terimaPermintaan.php', {
            'usaha_id_1':usaha_login,
            'usaha_id_2':usaha_id_2
        }).then(response=>console.log(response))    
    }

    //jgn lupa update api
    function terimaPermintaanFN(usaha_id) {
        setIndexHapusPermintaan(usaha_id);
        terimaAPI(usaha_id)
        // Move the find operation inside a callback
        setListViewsKolab(ListViewsKolab => {
            const orang_baru = ListViewsPermintaan.find(each => each.usaha_id === usaha_id);
            if (orang_baru) {
                return [...ListViewsKolab, orang_baru];
            } else {
                return ListViewsKolab;
            }
        });

        const newList = ListViewsPermintaan.filter(each => each.usaha_id !== usaha_id);
        setListViewPermintaan(newList);
    }

    //jgn lupa update api
    function tolakPermintaanFN(usaha_id) {
        setIndexHapusPermintaan(usaha_id)
        tolakAPI(usaha_id)
        const newList = ListViewsPermintaan.filter(each => each.usaha_id !== usaha_id)
        setListViewPermintaan(newList)

    }





    return (
        <>
            {/* container inti di parent */}

            {modalKolab ? <Modal_konfirmasi_hapus batalFN={batalFN} hapusFN={hapusFN} /> : null}
            <div className=" flex gap-x-10 justify-evenly bg-white p-5" >
                <div>
                    <h1 className="font-bold text-2xl">Kolaborator Saat Anda Ini</h1>
                    {/* container card mitra */}
                    <div className="w-full overflow-auto h-[90vh]">
                        {ListViewsKolab.map((each) =>
                            <Card_mitra
                                jenis_usaha={each.jenis_usaha}
                                kota={each.kota}
                                url_gambar_profil={each.url_gambar_profil}
                                nama_usaha={each.nama_usaha}
                                usaha_id={each.usaha_id}
                                tampilkanModalFN={tampilkanModal}
                            />)}
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-2xl">Permintaan Kolaborasi</h1>

                    {/* container card permitaan kolab */}
                    <div className="h-[90vh]">
                        <div className="mt-2 flex flex-col gap-y-2 h-full overflow-auto">
                            {ListViewsPermintaan?.map(each =>
                                <Card_Permintaan_kolab
                                    jenis_usaha={each.jenis_usaha}
                                    kota={each.kota}
                                    nama_usaha={each.nama_usaha}
                                    usaha_id={each.usaha_id}
                                    deskripsi_permintaan={each.deskripsi_permintaan}
                                    url_gambar_profil={each.url_gambar_profil}
                                    terimaPermintaanFN={terimaPermintaanFN}
                                    tolakPermintaanFN={tolakPermintaanFN} />)}
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}