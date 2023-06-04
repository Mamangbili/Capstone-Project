

export function Card_Permintaan_kolab({ nama_usaha, kota, url_gambar_profil, jenis_usaha, usaha_id, terimaPermintaanFN, tolakPermintaanFN, deskripsi_permintaan }) {
    const logo_pin = 'https://cdn-icons-png.flaticon.com/512/72/72617.png'
    url_gambar_profil = require('../../../images/src/'+url_gambar_profil)

    return (
        <>
            {/* lebar ditentukan di parent */}
            <div className='h-auto   flex'>


                {/* kontaier kiri biru */}
                <div className='w-9/12 h-full rounded-md  bg-sky-300 flex'>
                    <div className='w-6/12  my-1 flex flex-col gap-y-2 p-1'>
                        <div className='flex'>
                            {/* gambar logo */}
                            <div className=''>
                                <img src={url_gambar_profil} className='rounded-full object-fill inline-block w-10 h-10' />
                            </div>
                            
                            {/* informasi usaha */}
                            <div className="ml-2">
                                <h1 className='text-sm'>{nama_usaha}</h1>
                                <div className='flex items-center mt-2'>
                                    <img src={logo_pin} className='inline-block w-4 h-4'/>
                                    <p className='text-sm'>{kota}</p>
                                </div>
                            </div>
                        </div>

                        {/* jenis usaha */}
                        <div className=' justify-center flex'><p className='text-sm w-44 text-center bg-slate-200 rounded-md'>{jenis_usaha}</p></div>
                    </div>
                    {/* deskripsi permintaan */}
                    <div className='w-6/12  p-2 '>
                        <p className=' h-full overflow-auto bg-slate-300 text-xs'> {deskripsi_permintaan} </p>

                    </div>
                
                </div>

                {/* tombol */}
                <div className='flex items-center w-3/12 ml-2'> 
                    <div className='w-full h-full  flex flex-col  justify-center gap-y-4'>
                        <button className=' rounded-md bg-lime-300' onClick={()=>terimaPermintaanFN(usaha_id)}>Terima</button>
                        <button className=' rounded-md bg-red-300' onClick={()=>tolakPermintaanFN(usaha_id)}>Tolak</button>
                    </div>
                </div>




            </div> 

        </>


    )
}