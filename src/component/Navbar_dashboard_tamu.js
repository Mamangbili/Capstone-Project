import React from 'react';
import { Card_dashboard } from './card_dasboard';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Beranda from './Beranda';
import App from '../App';

export default function Navbar_dashboard_tamu({usaha_id}) {



    const navigate = useNavigate()
    function to_myToko(e) {
        navigate(`/dashboard-tamu/toko/${usaha_id}`)
        window.location.reload()
    }

    return (
        <>
            <nav className='border-b-2'>
                <ul className="flex justify-between p-5 text-3xl font-bold w-full border-b-3">

                    <li className=" block h-10 rounded-full bg-blue-400">
                        <Link to='/' className='p-4' >Halaman Utama</Link>
                    </li>
                    <li className=" block h-10 rounded-full bg-blue-400">
                        <Link to='beranda' className='p-4' >Beranda</Link>
                    </li>

                    <li>
                        <div>
                            <input  type='text' placeholder='Cari' className='text-sm border p-2 w-72' />
                        </div>
                    </li>
                </ul>
            </nav>


        </>
    )
};
