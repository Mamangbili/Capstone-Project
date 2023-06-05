
import myimage from '../../../images/src/channel.png'
export function Header_toko({url_gambar_toko, nama_usaha, jenis_usaha }){

    url_gambar_toko = require('../../../images/src/'+url_gambar_toko)

    return(
        <>
    
        <div className="flex h-20 items-center">

            <div className="flex items-center  rounded-full shadow-md shadow-slate-600 w-16 h-16  justify-center ">
                <img src= {url_gambar_toko} className="w-full h-full  inline-block object-fill rounded-full" />
            </div>


            <div className="ml-3 w-full  h-full ">
                <h1 className="text-3xl">{nama_usaha}  </h1>
                
                <div className="bg-gray-200 mt-2 px-5 py-1  inline-block rounded-md ">
                    <p>{jenis_usaha}</p>
                </div>
                
            </div>

        </div>
        
        
        </>

    )
}