import { useState } from "react"
import { Card_invoice } from "./invoices_components/Card_invoice"
import { Modal_konfirmasi_hapus } from "./invoices_components/Modal_konfirmasi_hapus"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"



const datas = [{
    invoice_id: 1,
    klien: 'sony',
    tgl_invoice: '2023-3-4',
    status_bayar: true
}, {
    invoice_id: 12,
    klien: 'wakwaw',
    tgl_invoice: '2023-3-4',
    status_bayar: false
}, {
    invoice_id: 4,
    klien: 'kuy',
    tgl_invoice: '2023-3-4',
    status_bayar: false
}, {
    invoice_id: 6,
    klien: 'sony',
    tgl_invoice: '2023-3-4',
    status_bayar: true
}, {
    invoice_id: 14,
    klien: 'wakkkkk fasfdasfdsads fasdfsadfa',
    tgl_invoice: '2023-3-4',
    status_bayar: true
}]


export function Invoices() {



    const { usaha_id } = useParams()
    //     //List elemen invoice
    const [ViewsInvoices, setViewsInvoices] = useState([])
    // invoice id didapat dari child
    const [ChildInvoiceId, setChildInvoiceId] = useState()


    useEffect(() => {
        axios.get('http://localhost/proyekppl/api/getInvoices.php', { params: { 'usaha_id': usaha_id } })
            .then(response => 
                {console.log(response.data)
                setViewsInvoices(response.data)})
    }, [])

    //tinggal hapus di database
    
    function hapusInvoice(invoice_id){
        const postData = new FormData()
        postData.append('invoice_id', invoice_id)
        axios.post('http://localhost/proyekppl/api/hapusInvoice.php', postData)
            .then(res => {
                console.log(res.data)
            })
    }
    function hapusFN() {
        const newList = ViewsInvoices.filter((eachObj) => eachObj.invoice_id !== ChildInvoiceId)
        console.log('childinovice', ChildInvoiceId)
        hapusInvoice(ChildInvoiceId)
        setViewsInvoices(newList)
        setModalKonfirmasi(false)
    }

    const [modal, setModalKonfirmasi] = useState(false)

    function batalFN() {
        setModalKonfirmasi(false)
    }

    function tampilkanModalKonfirmasi(invoice_id) {
        setModalKonfirmasi(true)
        console.log(invoice_id)
        setChildInvoiceId(invoice_id)
    }


    if(!ViewsInvoices) return null

    return (
        <>
            {/* div  semenetara nanti hapus*/}
            {modal ? <Modal_konfirmasi_hapus batalFN={batalFN} hapusFN={hapusFN} /> : null}
            <div className="border bg-white p-4">
                {ViewsInvoices?.map(each =>
                    <div>
                        <Card_invoice
                            key={each.invoice_id}
                            invoice_id={each.invoice_id}
                            klien={each.klien}
                            status_bayar={each.status_bayar}
                            tgl_invoice={each.tgl_invoice}
                            tampilkanModalHapusFN={tampilkanModalKonfirmasi}
                        />
                    </div>
                )
                }

            </div>


            <Link to={`/dashboard/${usaha_id}/buatInvoices`}>
                <button className="bg-sky-200 px- mt-44 fixed 5 py-2 px-5 h-14 rounded-xl shadow-sm flex items-center shadow-slate-300 " >Buat Invoice</button></Link>

        </>

    )
}