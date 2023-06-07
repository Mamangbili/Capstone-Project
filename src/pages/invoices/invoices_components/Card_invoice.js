import axios from "axios"
import { useEffect, useState } from "react"

export function Card_invoice({ tgl_invoice, invoice_id, klien, status_bayar, tampilkanModalHapusFN }) {
    const logo_pdf = 'https://cdn-icons-png.flaticon.com/512/5376/5376490.png'
    const logo_hapus = 'https://pixlok.com/wp-content/uploads/2022/01/Trash-Icon-SVG-psofds.png'

    const [status, setStatus] = useState(!(status_bayar === '0'))

    const warna = ['bg-red-300', 'bg-lime-300']
    const tulisan = ['Belum lunas', 'Lunas']

    const [btnCss, setBtncss] = useState()

    function inverse_status() {
        const postData = new FormData()
        postData.append('invoice_id', invoice_id)
        axios.post('http://localhost/proyekppl/api/ubahStatusInvoice.php', postData)
            .then(res => {
                console.log(res.data)
            })
    }

    

    function handleStatus() {
        setStatus(prevStatus => !prevStatus)
        defineStatus()
        inverse_status()
    }

    function defineStatus() {
        if (status) {
            setBtncss('bg-lime-300')
        } else {
            setBtncss('bg-red-300')
        }
    }

    useEffect(() => {
        defineStatus()
    }, [])

    return (
        <>
            <div className="border flex-grow-0 flex bg-sky-300 gap-x-2 w-6/6 py-3 px-2">
                {/* button pdf */}
                <button>
                    <div className="w-9 h-9 flex items-center "><img src={logo_pdf} className="w-full h-full inline-block" /></div>
                </button>

                {/* button delete */}
                <button onClick={() => tampilkanModalHapusFN(invoice_id)}>
                    <div className="w-10 h-10 rounded-xl bg-red-400"><img src={logo_hapus} className="w-full h-full inline-block" /></div>
                </button>

                <div className="bg-slate-100  rounded-md items-center flex w-32"> <p className="px-3 text-sm">{tgl_invoice} </p></div>
                <div className="bg-slate-100  rounded-md items-center flex w-32"> <p className="px-3 text-sm">{invoice_id} </p></div>
                <div className="bg-slate-100  rounded-md items-center flex w-52"> <p className="px-3 overflow-clip text-sm">{klien} </p></div>

                {/* btn status */}
                <div className='flex items-center'>
                    <button onClick={handleStatus} className={`${status===true ? 'bg-lime-300' : 'bg-red-300'} h-8 w-28 px-3 rounded-md shadow-sm shadow-slate-400`}>{status===true ? 'lunas' : 'belum lunas'} </button>
                </div>
            </div>
        </>
    )
}
