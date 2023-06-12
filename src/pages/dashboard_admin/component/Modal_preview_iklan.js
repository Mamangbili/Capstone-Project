export function Modal_preview_iklan({ url_gambar_iklan, okFN }) {
    // const url_gambar_iklan = require('../../../images/src/' + url_gambar_iklan)

    return (
        <>
            <div className="w-[99vw] fixed z-10 h-[500vh]  bg-black bg-opacity-40">
                <div className="fixed  w-[80vw] h-[80vh] top-20 left-32 border border-black bg-white rounded-xl">
                    <div className="flex w-full h-full flex-col justify-center gap-y-2 items-center rounded-xl">
                        <div className="bg-sky-300 border shadow-md shadow-black w-full flex h-16 justify-center py-2 rounded-t-xl">
                            <h1 className="text-2xl">Preview Gambar</h1>
                        </div>
                        <div className="w-full h-full p-2">
                            <img src={url_gambar_iklan} className="inline-block w-full h-full object-contain" />
                        </div>
                        <button onClick={() => okFN(url_gambar_iklan) } className="px-8 py-2 rounded-xl bg-lime-300 ">OK</button>
                    </div>

                </div>
            </div>

        </>

    )
}