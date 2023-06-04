export function Iklan() {

    const logo_kirim = 'https://static.vecteezy.com/system/resources/previews/009/992/359/original/upload-icon-sign-symbol-design-free-png.png'
    ///tinggal bagian up gambar
    return (
        <>

            <div className="w-1/3 border gap-y-4 flex flex-col">
                <h1 className="font-bold text-xl">Ketentuan Iklan</h1>

                <ul className="list-disc list-inside">
                    <li>Kontent tidak boleh mengandung unsur SARA, provokatif, dan menyesatkan</li>
                    <li>format png/jpg</li>
                    <li>ukuran landscape 16:9</li>
                    <li>Biaya Pemasangan iklan untuk 3 hari Rp.15,000.-</li>
                </ul>

                {/* up gambar */}
                <div></div>

                <div className="flex">
                    <div>
                        <h1 className="font-bold w-64 text-xl">Pembayaran Melalui :</h1>
                        <p>DANA     : 08214210477 </p>
                        <p>Gopay    : 08214322345</p>
                        <p>Mandiri  : 1430022239782</p>
                        <p>BRI      : 220301010507503</p>
                        <p>BNI      : 1250120585</p>
                    </div>


                    {/* up bukti */}
                    <div className="border w-full">


                    </div>


                    {/* kirim */}

                </div>

                <div className="flex justify-center w-full p-4"> 
                    <button className="text-white bg-lime-500 py-3 px-5 rounded-xl font-bold text-xl flex">Kirim
                    <img src={logo_kirim} className="inline-block w-6 h-6" />
                    </button>
                </div>

            </div>

        </>

    )
}