import React from 'react';
import { Card_dashboard } from './card_dasboard';
import { Link, Route, Routes } from 'react-router-dom';
import Beranda from './Beranda';
import App from '../App';

export default function Navbar_dashboard({ usaha_id }) {
    const toko = `/dashboard/${usaha_id}/toko/${usaha_id}`

    return (
        <>
            <nav>
                <ul className="flex justify-between p-5 text-3xl font-bold w-full border-b-3">
                    <li className="block h-10 rounded-full bg-blue-400">
                        <Link to="profil">Profil</Link>
                    </li>
                    <li className="block h-10 rounded-full bg-blue-400">
                        <Link to="beranda">Beranda
                        </Link>
                    </li>
                    <li className="block h-10 rounded-full bg-blue-400">
                        <Link to={toko} >Toko</Link>
                    </li>
                    <li className="block h-10 rounded-full bg-blue-400">
                        <Link to="mitra">Mitra</Link>
                    </li>
                    <li className="block h-10 rounded-full bg-blue-400">
                        <Link to="iklan">Iklan</Link>
                    </li>
                    <li className="block h-10 rounded-full bg-blue-400">
                        <Link to="invoices">Invoice</Link>
                    </li>
                    <li>
                        <div>
                            <input type='text' placeholder='Cari' className='w-44' />
                        </div>
                    </li>
                </ul>
            </nav>


        </>
    )
};
