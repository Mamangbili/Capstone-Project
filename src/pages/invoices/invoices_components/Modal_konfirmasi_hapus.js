export function Modal_konfirmasi_hapus({batalFN, hapusFN}){
    return (
        <>
        
        <div className="bg-black bg-opacity-70 h-[100vh] w-[100vw] flex justify-center items-center absolute">
            <div className="w-80 h-52 bg-slate-300 p-5 flex flex-col top-1/2 left-1/2 rounded-md">
                <h1 className="text-2xl font-bold text-center">Apakah Anda yakin ingin menghapus Invoices?</h1>


                {/* tombol */}
                <div className="flex justify-center gap-x-5 mt-3">
                    <button className="bg-red-400 py-2 px-5 rounded-xl" onClick={batalFN}>Batal</button>
                    <button className="bg-lime-200 py-2 px-5 rounded-xl" onClick={hapusFN}>Hapus</button>
                </div>
            </div>
            
        </div>
        </>

    )
}