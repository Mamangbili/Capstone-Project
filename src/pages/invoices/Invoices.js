import { useState } from "react"
import { Card_invoice } from "./invoices_components/Card_invoice"
import { Modal_konfirmasi_hapus } from "./invoices_components/Modal_konfirmasi_hapus"



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


    //belum panggil api


    //     //List elemen invoice
    const [ViewsInvoices, setViewsInvoices] = useState(datas)
    // invoice id didapat dari child
    const [ChildInvoiceId, setChildInvoiceId] = useState()

    //tinggal hapus di database
    function hapusFN() {
        const newList = ViewsInvoices.filter((eachObj) => eachObj.invoice_id !== ChildInvoiceId)
        setViewsInvoices(newList);
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

    return (
        <>
            {/* div  semenetara nanti hapus*/}
            <div className="flex">
                {modal ? <Modal_konfirmasi_hapus batalFN={batalFN} hapusFN={hapusFN} /> : null}
                    <div className="border ">
                        {ViewsInvoices.map(each =>
                            <Card_invoice
                                key={each.invoice_id}
                                invoice_id={each.invoice_id}
                                klien={each.klien}
                                status_bayar={each.status_bayar}
                                tgl_invoice={each.tgl_invoice}
                                tampilkanModalHapusFN={tampilkanModalKonfirmasi} />
                        )
                        }

                    </div>


                    <button className="bg-gray-300 px-5 py-2 h-14 rounded-xl shadow-sm flex items-center shadow-slate-300 " >Buat Invoice</button>

                </div>
        
        </>

            )
}