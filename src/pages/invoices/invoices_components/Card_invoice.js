import { useEffect } from "react"
import { useState } from "react"

export function Card_invoice({ tgl_invoice, invoice_id, klien, status_bayar, tampilkanModalHapusFN }) {
    const logo_pdf = 'https://cdn-icons-png.flaticon.com/512/5376/5376490.png'
    const logo_hapus = 'https://pixlok.com/wp-content/uploads/2022/01/Trash-Icon-SVG-psofds.png'

    let [status, setStatus] = useState(status_bayar)

    const warna = ['bg-red-300', 'bg-lime-300']
    const tulisan = ['Belum lunas', 'Lunas']

    let btnCss = { 'warna': null, 'tulisan': null }


    //tinggal implementasi post /delete
    function handleStatus() {
        setStatus(!status)
        defineStatus()
    }

    function defineStatus() {
        if (status === true) {
            btnCss['warna'] = warna[1]
            btnCss['tulisan'] = tulisan[1]
        }
        else {
            btnCss['warna'] = warna[0]
            btnCss['tulisan'] = tulisan[0]
        }
    }



    defineStatus()
    return (
        <>

            <div className="border flex-grow-0 flex bg-sky-300 gap-x-2 w-5/6 py-3 px-2">
                {/* button pdf */}
                <button>
                    <div className="w-9 h-9 flex items-center "><img src={logo_pdf} className="w-full h-full inline-block" /></div>
                </button>
                
                {/* button delete */}
                <button onClick={() => tampilkanModalHapusFN(invoice_id)} >
                    <div className="w-10 h-10 rounded-xl bg-red-400"><img src={logo_hapus} className="w-full h-full inline-block" /></div>
                </button>

                <div className="bg-slate-100  rounded-md items-center flex w-32"> <p className="px-3 text-sm">{tgl_invoice} </p></div>
                <div className="bg-slate-100  rounded-md items-center flex w-32"> <p className="px-3 text-sm">{invoice_id} </p></div>
                <div className="bg-slate-100  rounded-md items-center flex w-52"> <p className="px-3 overflow-clip text-sm">{klien} </p></div>

                {/* btn status */}
                <div className='flex items-center'>
                    <button onClick={handleStatus} className={`${btnCss['warna']} h-8 w-28 px-3 rounded-md shadow-sm shadow-slate-400`}>{btnCss['tulisan']} </button>
                </div>



            </div>


        </>


    )
} 