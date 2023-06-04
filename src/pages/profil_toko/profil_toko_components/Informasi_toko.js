import myimage from '../../../images/src/channel.png'
export function Informasi_toko({alamat_toko,kota,provinsi,no_hp}){     
    const alamat = `${alamat_toko}, ${kota}, ${provinsi}`
    const logo_pin = 'https://cdn-icons-png.flaticon.com/512/72/72617.png'
    const logo_kontak = 'https://www.freepnglogos.com/uploads/logo-telepon-png/phone-telephone-communication-vector-graphic-10.png'
    return(
        
        <>
        {/* alamat */}
        <div className='flex'>
            <div className='w-16 my-2 flex justify-center'>
                <img src={logo_pin}  className='w-6 h-6'/>
            </div>

            <p>{alamat}</p>
        </div>

        {/* kontak hp */}
        <div className='flex'>
            <div className='w-16 my-2 flex justify-center'>
                <img src={logo_kontak}  className='w-6 h-6'/>
            </div>

            <p>{no_hp}</p>
        </div>
        
        
        
        </>


    )
}