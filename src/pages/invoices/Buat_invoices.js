import { useState } from "react"
import { Tambah_produk_modal } from "./invoices_components/Tambah_produk_modal"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { Modal_invalid } from "./invoices_components/Modal_invalid_invoice"
import { Modal_berhasil_invoice } from "./invoices_components/Modal_berhasil_invoice"

export function Buat_invoices() {
    const [totalPembelian, setTotalPembelian] = useState(0)
    const [Modal, setModal] = useState(false)
    const [Input, setInput] = useState({
        'penagih': '',
        'klien': '',
        'metode_bayar': '',
        'email_pembeli': '',
        'alamat_pembeli': '',
        'no_hp_pembeli': '',
    })
    const [ListProduk, setListProduk] = useState([])
    const { usaha_id } = useParams()
    const [ModalValidasi, setModalValidasi] = useState(false)
    const [ ModalBerhasil , setModalBerhasil] = useState(false)

    useEffect(() => { }

        , [ListProduk])

    function batalFN() {
        setModal(false)
    }

    function buka_modal() {
        setModal(true)
    }

    function tambahFN(produk) {
        setListProduk(lastVal => [...lastVal, produk])
        setModal(false)
    }
    
    function hapusList(row) {

        setListProduk(lastVal => lastVal.filter((each, i) => {

            if (i !== row) {
                totalBeli -= each.harga
                // setTotalPembelian(totalPembelian-each.harga)
                return each
            }
        })
        )
    }

    function tampilkanModalBerhasil(){
        setModalBerhasil(true)
    }

    const navigate = useNavigate()
    function tutupModalBerhasil(){
        setModalBerhasil(false)
        navigate(`/dashboard/${usaha_id}/invoices`)
    }


    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        setInput((values) => {
            return { ...values, [name]: value }
        })
    }
    function konversiUang(uang) {
        return (uang).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        })

    }



    function isEmptyList(list) {
        return Array.isArray(list) && list.every(item => {
            if (Array.isArray(item)) {
                return isEmptyList(item);
            } else {
                return typeof item !== 'object';
            }
        });
    }

    function validasi_tabel() {
        if (isEmptyList(ListProduk)) {
            return false
        }

        if (Input.penagih === ''||
            Input.klien === ''||
            Input.metode_pembayaran === ''||
            Input.email_pembeli === ''||
            Input.alamat_pembeli === ''||
            Input.no_hp_pembeli === ''
            ) {
                return false
            }
        return true
    }

    function submit() {
        if (validasi_tabel()) {
            tampilkanModalBerhasil()
            const postForm = new FormData()
            postForm.append('penagih', Input.penagih)
            postForm.append('klien', Input.klien)
            postForm.append('metode_pembayaran', Input.metode_pembayaran)
            postForm.append('email_pembeli', Input.email_pembeli)
            postForm.append('alamat_pembeli', Input.alamat_pembeli)
            postForm.append('no_hp_pembeli', Input.no_hp_pembeli)
            postForm.append('harga', totalBeli)
            postForm.append('usaha_id', usaha_id)
            postForm.append('list_produk', JSON.stringify(ListProduk))

            axios.post('http://localhost/proyekppl/api/tambahInvoice.php' , postForm)
            .then(response => console.log(response.data))
        }
        else {setModalValidasi(true)}
    }

    let totalBeli = 0

    function tutupModalValidasi(){
        setModalValidasi(false)
    }
    return (
        <>
            {ModalBerhasil ? <Modal_berhasil_invoice okFN={tutupModalBerhasil} /> :null}
            {ModalValidasi ? <Modal_invalid okFN={tutupModalValidasi} /> : null}
            {Modal ? <Tambah_produk_modal batalFN={batalFN} tambahFN={tambahFN} usaha_id={usaha_id} /> : null}

            <div className="flex   items-center flex-col">
                <div className="w-96 ">
                    <div className="flex justify-center">
                        <h1 className="text-2xl ">FORM PEMBUATAN INVOICES</h1>
                    </div>
                    <div className="flex border border-red-300 p-3 rounded-md bg-slate-200 mb-4" >
                        <form action="">
                            <label htmlFor="penagih" className="font-bold" >Nama Penagih :</label>
                            <input onChange={handleInputChange} id='penagih' class='border-2 border-black rounded-sm ml-2 p-1' name='penagih' htmlFor='penagih' type="text inline-block" />
                            <table>
                                <th><h2>Tagihan untuk </h2> </th>
                                <tr>
                                    <td><label htmlFor="nama">Nama </label></td>
                                    <td>:</td>
                                    <td><input onChange={handleInputChange} type="text" id='nama' name='klien' class='border-2 border-black rounded-sm ml-2 p-1  ' /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="alamat">Alamat </label></td>
                                    <td>:</td>
                                    <td><input onChange={handleInputChange} type="text" id='alamat' name='alamat_pembeli' class='border-2 border-black rounded-sm ml-2 p-1  ' /></td>
                                </tr>
                                <tr>
                                    <td> <label htmlFor="no_hp">No Hp </label></td>
                                    <td>:</td>
                                    <td><input onChange={handleInputChange} type="text" id='no_hp' name='no_hp_pembeli' class='border-2 border-black rounded-sm ml-2 p-1  ' /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="email">Email </label></td>
                                    <td>:</td>
                                    <td><input onChange={handleInputChange} type="text" id='email' name='email_pembeli' class='border-2 border-black rounded-sm ml-2 p-1  ' /></td>
                                </tr>
                            </table>

                            <div className="border">
                                <label htmlFor="metode_pembayaran">Metode Pembayaran :</label>
                                <textarea name="metode_pembayaran"  onChange={handleInputChange} id="metode_pembayaran" cols="30" rows="5" class='border-2 border-black rounded-sm ml-2 p-1 block '></textarea>
                            </div>

                            <button type='button' onClick={buka_modal} className="py-1 px-2 bg-slate-400 shadow-md shadow-black rounded-xl my-2  mb-5">  Tambah produk</button>
                        </form>
                    </div>

                </div>
                <table className="w-8/12">
                    <thead>
                        <tr>
                            <th className="bg-lime-200 border border-black py-1 px-2">Produk</th>
                            <th className="bg-lime-200 border border-black py-1 px-2">Deskripsi</th>
                            <th className="bg-lime-200 border border-black py-1 px-2">Harga</th>
                            <th className="bg-lime-200 border border-black py-1 px-2">Jumlah</th>
                            <th className="bg-lime-200 border border-black py-1 px-2">Harga Total</th>
                            <th className="bg-lime-200 border border-black py-1 px-2">-</th>
                        </tr>
                    </thead>

                    <tbody >
                        {/* generetae row */}
                        {ListProduk?.map((each, i) => {
                            totalBeli += each.total
                            return (<tr className=" ">
                                <td className="border-black border py-1 px-2">{each.nama_produk}</td>
                                <div className="h-20 overflow-y-auto border-black border-b-2">
                                    <td className="  py-1 px-2 ">{each.deskripsi_produk}</td>
                                </div>
                                <td className="border-black border py-1 px-2">{konversiUang(parseInt(each.harga))}</td>
                                <td className="border-black border py-1 px-2">{each.kuantitas}</td>
                                <td className="border-black border py-1 px-2">{konversiUang(each.total)}</td>
                                <td className="border-black border py-1 px-2"><button className="shadow-md shadow-black w-10 h-10 bg-red-500 opacity-80 rounded-full" onClick={e => hapusList(i)}>X</button></td>
                            </tr>)
                        })}

                        <tr>
                            <th className="bg-lime-200 border border-black py-1 px-2">Total Pembelian</th>
                            <th className="bg-lime-200 border border-black py-1 border-t-0 px-2"></th>
                            <th className="bg-lime-200 border border-black py-1 px-2"></th>
                            <th className="bg-lime-200 border border-black py-1 px-2"></th>
                            <th className="bg-lime-200 border border-black py-1 px-2">{konversiUang(totalBeli)}</th>
                            <th className="bg-lime-200 border border-black py-1 px-2"></th>
                        </tr>
                    </tbody>

                </table>

                <button onClick={submit} className="bg-lime-200 px-10 py-4 rounded-md shadow-md shadow-black mt-5 mb-2"> Kirim </button>

            </div>

        </>

    )
}