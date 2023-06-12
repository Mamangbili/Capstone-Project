import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Dahsboard from "./pages/dashboard";
import Navbar_dashboard from "./component/Navbar_dashboard";
import { BrowserRouter } from "react-router-dom";
import Utama from "./utama";
import { Profil_toko } from "./pages/profil_toko/Profil_toko";
import { Iklan } from "./pages/iklan/Iklan";
import { Informasi_toko } from "./pages/profil_toko/profil_toko_components/Informasi_toko";
import { Header_toko } from "./pages/profil_toko/profil_toko_components/Header_toko";
import { Deskripsi_toko } from "./pages/profil_toko/profil_toko_components/Deskrpsi_toko";
import { List_kolaborasi } from "./pages/profil_toko/profil_toko_components/List_kolaborasi";
import { Card_kolaborasi } from "./pages/profil_toko/profil_toko_components/Card_kolaborasi";
import { Button_maps } from "./pages/profil_toko/profil_toko_components/Button_maps";
import { Detail_produk } from "./pages/profil_toko/profil_toko_components/Detail_produk";
import { Modal_kolab } from "./pages/profil_toko/profil_toko_components/Modal_kolab";
import { Card_invoice } from "./pages/invoices/invoices_components/Card_invoice";
import { Invoices } from "./pages/invoices/Invoices";
import { Card_mitra } from "./pages/mitra/mitra_components/Card_mitra";
import { Mitra } from "./pages/mitra/Mitra";
import { Card_Permintaan_kolab } from "./pages/mitra/mitra_components/Card_permintaan_kolab";
import Card_dashboard from "./component/card_dasboard";
import Beranda from "./component/Beranda";
import Dashboard from "./pages/dashboard";
import { Profil_pribadi } from "./pages/profil_pribadi/Profil_pribadi";
import { Card_profil_pribadi } from "./pages/profil_pribadi/Card_profil_pribadi";
import { Testing } from "./testing";
import Navbar_dashboard_tamu from "./component/Navbar_dashboard_tamu";
import Dashboard_tamu from "./pages/Dashboard_tamu";
import Beranda_tamu from "./component/Beranda_tamu";
import { Buat_invoices } from "./pages/invoices/Buat_invoices";
import { Tambah_produk } from "./pages/profil_toko/Tambah_produk";
import { Card_tayang } from "./pages/dashboard_admin/component/Card_tayang";
import { Modal_preview_iklan } from "./pages/dashboard_admin/component/Modal_preview_iklan";
import { Dashboard_admin } from "./pages/dashboard_admin/Dashborad_admin";
import { Modal_hapus } from "./pages/dashboard_admin/component/Modal_hapus";
// import { Tambah_produk_modal } from "./pages/invoices/invoices_components/Tambah_produk_modal";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (<React.StrictMode>
    <BrowserRouter>
        <Utama />
    </BrowserRouter>
</React.StrictMode>);
