import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export function Tambah_produk_modal({ usaha_id, batalFN, tambahFN }) {
    const [Data, setData] = useState()
    const [selectedProduk, setSelectedProduk] = useState({})
                                                                    //NANTI GANTI!!!! jadi usaha id
    useEffect(() => {
        axios.get('http://localhost/proyekppl/api/produkSaya.php', { params: { 'usaha_id': 19 } })
            .then(response => setData(response.data))
    }, [selectedProduk])


    function onSelected(event) {

        setSelectedProduk({
            ...Data.filter((each) => {
                return each.nama_produk === event.target.value ? each : null
            })[0]
        }) //karena filter return list

        // setHargaSelectionOption(HargaProduk[0].harga)
    }

    const [kuantitas, setKuantitas] = useState()
    function printHarga(e) {
        setKuantitas(e.target.value)
    }

    function konversiUang(uang){
            return (uang).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        })

    }

    if (!Data) return null

    return (
        <>
            <div className="w-full min-h-screen absolute  bg-black flex justify-center items-center bg-opacity-50">

                <div className="w-72 h-72 rounded-xl p-5 flex justify-center flex-col bg-slate-400">


                    <label htmlFor="">Produk :</label>
                    <select className="block" onChange={onSelected}>
                        <option value="" disabled selected>pilih produk</option>
                        {Data?.map((each) => {
                            return (
                                <option value={each.nama_produk}>{each.nama_produk}</option>
                            )
                        })}

                    </select>

                    <section>harga satuan : {konversiUang(selectedProduk.harga * 1)}</section>

                    <label htmlFor="">Kuantitas :</label>
                    <input className="block" type="number" onChange={printHarga} />

                    <section>Total Harga : {konversiUang(kuantitas * selectedProduk.harga)}</section>



                    <div className="flex justify-around">
                        <button type="button" onClick={batalFN} className="mt-5 py-3 px-6 bg-lime-200 rounded-xl">Batal</button>

                        <button type="button" onClick={() => {
                            const total = selectedProduk.harga * kuantitas;
                            const updatedProduk = { ...selectedProduk, total, kuantitas: kuantitas };
                            tambahFN(updatedProduk);
                        }} className="mt-5 py-3 px-6 bg-lime-200 rounded-xl">Tambahkan</button>
                    </div>
                </div>



            </div>

        </>
    )
}

