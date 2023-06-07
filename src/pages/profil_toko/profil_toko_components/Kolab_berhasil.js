export function Kolab_berhasil({okFN}){

    return (
        <>
        
        
        <div className="bg-black bg-opacity-70 h-[200%] w-[200%] flex justify-center  z-10 items-center absolute">
            <div className="absolute mb-[700px] z-20">
                <div className="w-80 h-32 bg-slate-300 p-5 flex flex-col top-1/2 left-1/2">
                    <h1 className="text-2xl font-bold text-center">Permintaan Berhasil!</h1>
                    {/* tombol */}
                    <div className="flex justify-center gap-x-5 mt-3">
                        <button className="bg-red-400 py-2 px-5 rounded-xl" onClick={okFN}>OK</button>
                    </div>
                </div>
            </div>
            
        </div>
        </>

    )


}