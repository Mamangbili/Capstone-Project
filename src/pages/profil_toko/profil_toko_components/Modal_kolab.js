import { useState } from "react"

export function Modal_kolab({onClosedFn, onSetujuFn}){

    let [deskripsi, setDeskripsi] = useState("Saya ingin mengajak anda untuk berkolaborasi")

    const handleChange  = (event)=>{
        setDeskripsi(event.target.value)
        
    }

    
    
    return(
        <>

        <div className="bg-black bg-opacity-70 h-[200%] w-[200%] flex justify-center  z-10 items-center absolute">
            <div className="absolute mb-[700px] z-20">
                <div className="w-80 h-80 bg-slate-300 p-5 flex flex-col top-1/2 left-1/2">
                    <h1 className="text-2xl font-bold text-center">KIRIM PERMINTAAN KOLABORASI</h1>
                    {/* untuk input form */}
                    <textarea name="" id="" cols="30" rows="10" onChange={handleChange} className="p-3">{deskripsi}</textarea>
                    {/* tombol */}
                    <div className="flex justify-center gap-x-5 mt-3">
                        <button className="bg-red-400 py-2 px-5 rounded-xl" onClick={onClosedFn}>Batal</button>
                        <button className="bg-lime-200 py-2 px-5 rounded-xl" onClick={()=>onSetujuFn(deskripsi)}>Kirim</button>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}