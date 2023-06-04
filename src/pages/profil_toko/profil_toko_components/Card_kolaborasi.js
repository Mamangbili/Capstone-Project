
export function Card_kolaborasi({nama_usaha,kota,url_gambar_profil,jenis_usaha}) {

    const logo_pin = 'https://cdn-icons-png.flaticon.com/512/72/72617.png'
    const path_from_card_component = require("../../../images/src/"+url_gambar_profil)
    return (
        <>

        {/* lebar card ditentuin di parent */}
            <div className="flex  bg-sky-300 my-2">
                {/* gambar profil */}
                <div className='flex items-center justify-center'>
                    <div className="w-12 h-12  ">
                        <img src={path_from_card_component} className="h-full w-full inline-block object-cover rounded-full" />
                    </div>
                </div>
                {/* informasi toko */}
                <div className='ml-2 w-full '>
                    <h3 className='text-md break-words'> {nama_usaha} </h3>

                    <div className='flex'>
                        <img src={logo_pin} className='w-4 h-4 inline-block' />
                        <p className='ml-1 text-sm'>{kota}</p>
                    </div>

                </div>
                {/* jenis usaha */}
                <div className='items-center justify-center w-3/5 h-auto  flex'>
                    <p className='px-5 text-sm py-1 rounded-md bg-slate-300'>{jenis_usaha}</p>
                </div>
            </div>
        </>

    )
}