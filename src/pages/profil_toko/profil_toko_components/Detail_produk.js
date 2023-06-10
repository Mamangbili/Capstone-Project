import myimage from '../../../images/src/channel.png'


export function Detail_produk({ nama_produk, deskripsi_produk, url_gambar_produk }) {
    if (!url_gambar_produk) return null
    url_gambar_produk = require('../../../images/src/'+url_gambar_produk)
    return (
        <>

            <div className="p-5 h-full w-full border flex bg-slate-200 rounded-md border-black">
                {/* gambar */}
                <div className="flex flex-col  w-1/3 font-bold">
                    <h3 className='text-center mb-3 text-sm'> {nama_produk}</h3>
                    <div className='w-full flex justify-center'>
                        <img src={url_gambar_produk} className='w-80 h-full object-cover' />
                    </div>
                </div>
                {/* deskripsi */}
                <div className='text-sm h-full ml-2 overflow-y-auto  w-full '>
                    <p className=''>
                        {deskripsi_produk} 
                    </p>
                </div>
            </div>
        </>
    )
}