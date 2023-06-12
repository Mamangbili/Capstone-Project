export function Modal_hapus({ iklan_id, hapusFN, batalFN }) {
    // const url_gambar_iklan = require('../../../images/src/' + url_gambar_iklan)

    return (
        <>
            <div className="w-[99vw] h-[500vh]  bg-black bg-opacity-40">
                <div className="fixed top-52 left-[40vw] w-96 h-52  border border-black bg-white rounded-xl">
                    <div className="flex flex-col justify-center  gap-y-2 items-center rounded-xl">
                        <div className="bg-sky-300 w-full flex  justify-center py-2 rounded-t-xl">
                            <h1 className="text-2xl text-center">Apakah Anda yakin ingin menghapus iklan?</h1>
                        </div>

                        <button onClick={() => batalFN()} className="px-8 py-2 rounded-xl bg-red-300 mt-3">Batal</button>
                        <button onClick={() => hapusFN()} className="px-8 py-2 rounded-xl bg-lime-300 ">Hapus</button>
                    </div>

                </div>
            </div>

        </>

    )
}