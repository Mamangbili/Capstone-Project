import React from 'react';
import { Card_dashboard } from './card_dasboard';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Beranda from './Beranda';
import App from '../App';

export default function Navbar_dashboard({ usaha_id }) {
    const toko = `/dashboard/${usaha_id}/toko/${usaha_id}`
    

    const navigate = useNavigate()
    function to_myToko(e){
        navigate(`/dashboard/${usaha_id}/toko/${usaha_id}`)
        window.location.reload()
    }
    

    return (
        <>
            <nav>
                <ul className="flex justify-between p-5 text-3xl font-bold bg-sky-300 w-full border-b-3 ">
                    <li className=" block h-10 rounded-full bg-gray-200">
                        <Link className='p-4' to="profil">Profil</Link>
                    </li>
                    <li className=" block h-10 rounded-full bg-gray-200">
                        <Link className='p-4' to="beranda">Beranda
                        </Link>
                    </li>
                    <li className=" block h-10 rounded-full bg-gray-200">
                        <button className='px-4' onClick={to_myToko}>Toko</button>
                    </li>
                    <li className=" block h-10 rounded-full bg-gray-200">
                        <Link className='p-4' to="mitra">Mitra</Link>
                    </li>
                    <li className=" block h-10 rounded-full bg-gray-200">
                        <Link className='p-4' to="iklan">Iklan</Link>
                    </li>
                    <li className=" block h-10 rounded-full bg-gray-200">
                        <Link className='p-4' to="invoices">Invoice</Link>
                    </li>
                    {/* <li>
                        <div>
                            <input type='text' placeholder='Cari' className='text-md p-2 w-44' />
                        </div>
                    </li> */}
                </ul>
            </nav>


        </>
    )
};
