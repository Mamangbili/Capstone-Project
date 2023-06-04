import { Link } from 'react-router-dom'
import myimage from '../../../images/src/channel.png'

export function Button_wa(props) {
    const logo_wa= 'https://www.freeiconspng.com/thumbs/logo-whatsapp-png/logo-whatsapp-png-pic-0.png'
    const wa_api = `https://wa.me/`+props.no_hp
    
    return (
        <>
            <a href={wa_api} target='.blank'>
                <div className="flex h-16 shadow-md shadow-slate-200 bg-green-500 rounded-full border border-black  w-52">
                    {/* logo */}
                    <div className="w-14 h-14 p-2 flex items-center justify-center ml-2"> 
                        <img src={logo_wa} className='w-full h-full object-fill inline-block' />
                    </div>

                    <div className='flex items-center text-center '>
                        Kirim Pesan melalui Whatsapp
                    </div>
                </div>
            </a>

        </>
    )
}