import { useEffect, useState } from "react";
import Navbar_admin from "../../component/Navbar_admin";
import { Modal_preview_iklan } from "./component/Modal_preview_iklan";
import myimage from '../../images/src/channel.png'
import { Card_tayang } from "./component/Card_tayang";
import { Card_antrian } from "./component/Card_antrian";
import { Modal_hapus } from "./component/Modal_hapus";
import axios from "axios";



export function Dashboard_admin() {

    const [modalPreview, setModalPreview] = useState(false)
    const [URLPreview, setURLPreview] = useState('')
    const [ListAntrian, setListAntrian] = useState()
    const [ListTayang, setListTayang] = useState()
    const [modalHapus, setModalHapus] = useState(false)
    const [SelectedIklanId, setSelectedTayangdId] = useState(0)
    const [selectedColumn, setSelectedColumn] = useState()

    useEffect(() => {
        axios.get('http://localhost/proyekppl/api/iklanTayang.php')
        .then(response =>
            {
            console.log(response.data[0])
            setListTayang(response.data)}
        )
        
        axios.get('http://localhost/proyekppl/api/iklanAntrian.php')
        .then(response =>
            {
            setListAntrian(response.data)}
        )
    },[ListAntrian])
    
    function tutupModalPreview() {
        setModalPreview(false)
    }

    function tampilkanModalPreview(url_gambar, iklan_id) {
        setModalPreview(true)
        setURLPreview(url_gambar)
    }


    function hapusIklanAPI(iklan_id){
        const postForm = new FormData
        postForm.append('iklan_id',iklan_id)
        axios.post('http://localhost/proyekppl/api/hapusIklan.php',postForm)
        .then(response => console.log(response.data))
    }

    function hapusFN() {
        if (selectedColumn === 'tayang') {
            const ListBaru = ListTayang.filter(each => each.iklan_id !== SelectedIklanId)
            setListTayang(ListBaru)
            tutupModalHapus()
            
        } else {
            const ListBaru = ListAntrian.filter(each => each.iklan_id !== SelectedIklanId)
            setListAntrian(ListBaru)
            tutupModalHapus()
        }
        
        hapusIklanAPI(SelectedIklanId)
    }
    
    function terimaIklanFN(terima_iklan_id) {
        const tayangBaru = ListAntrian.filter(each => each.iklan_id === terima_iklan_id)
        setListTayang(values => ([...values, ...tayangBaru]))
        
        const postForm = new FormData
        postForm.append('iklan_id',terima_iklan_id)
        axios.post('http://localhost/proyekppl/api/terimaIklan.php',postForm).then(response=>console.log(response.data))

        const ListAntrianBaru = ListAntrian.filter(each => each.iklan_id !== terima_iklan_id)
        setListAntrian(ListAntrianBaru)
        tutupModalHapus()
        

    }

    function tampilkanModalHapus(iklan_id, name) {
        setSelectedColumn(name)
        setSelectedTayangdId(iklan_id)
        setModalHapus(true)
    }
    
    function tutupModalHapus() {
        setModalHapus(false)
    }
    if (!ListTayang || !ListAntrian) return null
    return (
        <>


            <Navbar_admin />
            {modalHapus ? <Modal_hapus hapusFN={hapusFN} batalFN={tutupModalHapus} iklan_id={SelectedIklanId} /> : null}
            {modalPreview ? <Modal_preview_iklan okFN={tutupModalPreview} url_gambar_iklan={URLPreview} /> : null}
            <div className="flex  justify-center gap-x-10 ">

                <div className="w-6/12 h-96 ">
                    <h1 className="text-2xl w-full  border-b-4 border-black">Iklan tayang :</h1>


                    {/* list iklan tayang */}
                    <div className="px-2 overflow-auto h-[80vh]">
                        {ListTayang?.map(each => {
                            return (
                                <Card_tayang
                                    nama_usaha={each.nama_usaha}
                                    url_gambar_bukti={each.url_gambar_bukti}
                                    url_gambar_iklan={each.url_gambar_iklan}
                                    url_gambar_profil={each.url_gambar_profil}
                                    kota={each.kota}
                                    lihatFN={tampilkanModalPreview}
                                    hapusFN={tampilkanModalHapus}
                                    iklan_id={each.iklan_id}
                                    tanggal_expired={each.expired_date}
                                    tanggal_tayang={each.tayang_date}
                                    name='tayang'

                                />
                            )
                        })}
                    </div>

                </div>

                <div className="w-5/12 h-96 ">
                    <h1 className="text-2xl  border-b-4 border-black">Antrian Iklan :</h1>


                    {/* list antrian iklan */}
                    <div className="px-2 overflow-auto h-[80vh]">

                        {ListAntrian?.map(each => {
                            return (
                                <Card_antrian
                                    name='antrian'
                                    nama_usaha={each.nama_usaha}
                                    url_gambar_profil={each.url_gambar_profil}
                                    url_gambar_bukti={each.url_gambar_bukti}
                                    url_gambar_iklan={each.url_gambar_iklan}
                                    kota={each.kota}
                                    lihatFN={tampilkanModalPreview}
                                    hapusFN={tampilkanModalHapus}
                                    terimaFN={terimaIklanFN}
                                    iklan_id={each.iklan_id}
                                    usaha_id = {each.usaha_id}
                                />
                            )
                        })}
                    </div>


                </div>


            </div>



        </>

    )
}