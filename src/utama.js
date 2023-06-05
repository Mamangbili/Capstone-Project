import { Route, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Navbar_dashboard from "./component/Navbar_dashboard";
import App from "./App";
import Beranda from "./component/Beranda";
import Dashboard from "./pages/dashboard";
import Detail_toko_form from './pages/Detail_toko_form';
import { Mitra } from "./pages/mitra/Mitra";
import { Iklan } from "./pages/iklan/Iklan";
import { Invoices } from "./pages/invoices/Invoices";
import { Profil_toko } from "./pages/profil_toko/Profil_toko";
import { Ubah_profil } from "./pages/profil_pribadi/Ubah_profil";
import { Profil_pribadi } from "./pages/profil_pribadi/Profil_pribadi";
import Dashboard_tamu from "./pages/Dashboard_tamu";
import Beranda_tamu from "./component/Beranda_tamu";
import { Profil_toko_tamu } from "./pages/profil_toko/Profil_toko_tamu";


// ))

export default function Utama() {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/detailTokoForm/:user_id" element={<Detail_toko_form />} />
                <Route path="/dashboard/:usaha_id" element={<Dashboard />}>
                    <Route path="beranda" element={<Beranda />} />
                    <Route path="mitra" element={<Mitra />} />
                    <Route path="invoices" element={<Invoices />} />
                    <Route path="iklan" element={<Iklan />} />
                    <Route path="toko/:usaha_id_2" element={<Profil_toko />} />
                    <Route path="profil" element={<Profil_pribadi />} />
                    <Route path="edit" element={<Ubah_profil />} />
                </Route>

                <Route path="/dashboard-tamu" element={<Dashboard_tamu />} >
                    <Route path='beranda' element= {<Beranda_tamu />} />
                    <Route path='toko/:usaha_id' element= {<Profil_toko_tamu />} />

                </Route>
            </Routes>

        </>
    );
}
