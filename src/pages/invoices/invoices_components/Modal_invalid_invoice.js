export function Modal_invalid({okFN}){
    return (
        <>
        
        <div className="bg-black bg-opacity-70 h-[120vh] w-[100vw] flex justify-center items-center absolute z-10">
            <div className="w-80  bg-slate-300 p-5 flex flex-col top-1/2 left-1/2 rounded-md">
                <h1 className="text-2xl font-bold text-center">Data tidak valid! silahkan cek kembali.</h1>


                {/* tombol */}
                <div className="flex justify-center gap-x-5 mt-3">
                    <button className="bg-red-400 py-2 px-5 rounded-xl" onClick={okFN}>OK</button>
                </div>
            </div>


            
        </div>
        </>

    )
}
