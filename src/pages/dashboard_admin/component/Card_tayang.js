export function Card_tayang({usaha_id,iklan_id,url_gambar_profil,url_gambar_bukti,url_gambar_iklan,kota, nama_usaha, lihatFN, hapusFN,tanggal_tayang,tanggal_expired,name}){
    
    
    const logo_pin = 'https://cdn-icons-png.flaticon.com/512/72/72617.png'

    url_gambar_iklan = require('../../../images/src/'+url_gambar_iklan)
    url_gambar_profil = require('../../../images/src/'+url_gambar_profil)
    url_gambar_bukti = require('../../../images/src/'+url_gambar_bukti)
    
    return (
        <>
            <div className="w-full h-24 border border-black flex items-center justify-evenly bg-sky-300 rounded-xl  my-2">
                
                {/* gambar logo */}
                <div className="w-12 h-12 ">
                    <img src={url_gambar_profil} className="inline-block object-fill rounded-full w-full h-full "/>
                </div>
                
                {/* informasi usaha */}
                <div className=" ml-3">
                    <h1>{nama_usaha}</h1>
                    <div className="flex gap-x-2">
                        <img src={logo_pin} className="w-6 h-6 inline-block" />
                        <p > {kota} </p>
                    </div>
                    
                    <section>Tanggal tayang  :{tanggal_tayang}</section>
                    <section>Tanggal expired :{tanggal_expired} </section>
                </div>
                
                
                <button onClick={()=>lihatFN(url_gambar_iklan)} className="bg-gray-200 px-5 py-3 rounded-md shadow shadow-black">Lihat iklan</button>   
                <button onClick={()=>lihatFN(url_gambar_bukti)} className="bg-gray-200 px-5 py-3 rounded-md shadow shadow-black">Lihat bukti</button>   
                <button onClick={()=>hapusFN(iklan_id,name)} className="bg-red-300 px-5 py-3 rounded-md shadow shadow-black">Hapus</button>
            
            </div>
        
        
        </>
    )
}