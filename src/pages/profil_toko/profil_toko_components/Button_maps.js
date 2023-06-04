import { Link } from 'react-router-dom'
import myimage from '../../../images/src/channel.png'

export function Button_maps({alamat,kota,provinsi}) {
    const alamat_lengkap = alamat+' '+kota+' '+provinsi 


    const google_api =`https://www.google.com/maps/search/${alamat_lengkap}` 
    
    const logo_map = "https://static.vecteezy.com/system/resources/previews/012/871/377/original/google-maps-icon-google-product-illustration-free-png.png"

    return (
        <>
            <a href={google_api} target='_blank'>
                <div className="flex h-16 shadow-md shadow-slate-200 rounded-full border border-black  w-52">
                    {/* logo */}
                    <div className="w-14 h-14 p-2 flex items-center justify-center ml-2"> 
                        <img src={logo_map} className='w-full h-full object-fill inline-block' />
                    </div>

                    <div className='flex items-center text-center '>
                        Lihat lokasi melalui Google maps
                    </div>
                </div>
            </a>

        </>
    )
}