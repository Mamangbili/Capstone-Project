import Tentang_kami_content from "./component/tentang_kami_content";
import Kontak from "./component/kontak";
import Nav_daftar_masuk from "./component/nav_daftar_masuk";
import React, {useState} from "react";
import Card_hompage from "./component/card_homapage";
import Dahsboard from "./pages/dashboard";


function App() {
    let [NavState, setNavState] = useState("default");
    let [clicked, setClicked] = useState("default");
    let [RenderedComponent, setRenderedComponent] = useState("default");

    const handleClick = (menu) => {
        setNavState(menu);
        if (menu === "Kontak") {
            setRenderedComponent (
                <Kontak/>);
        }
        if (menu === "Tentang_kami_content") {
            setRenderedComponent (
                <Tentang_kami_content/>);
        }
        if (menu === "Nav_daftar_masuk") {
            setRenderedComponent (
                <Nav_daftar_masuk/>);
        }
    };

    return (

        <div>
            <div className="w-5/6 m-auto">
                <div className="w-full bg-gray-400 overflow-hidden rounded-xl m-auto flex mt-10 shadow-lg shadow-slate-800 ">
                    <div className="left-panel w-1/2 flex-1 h-auto bg-biru  p-6">
                        <div className="logo">t</div>
                        <div className="intro ">
                            <div className="pr-32">
                                <h1 className="text-5xl pt-5 font-bold">
                                    Kembangkan dan Atur Kebutuhan Usahamu dengan Colabora
                                </h1>
                            </div>
                        </div>
                        <div className="guest-button text-2xl mt-5 inline-block border-2 border-black p-2 hover:bg-white transition rounded-full hover:text-biru shadow-xl">
                            Masuk Sebagai Tamu &lt;gambar&gt;
                        </div>
                    </div>
                    <div className="right-panel flex-1 h-auto">
                        <nav>
                            <ul className="flex justify-evenly items-center m-4">
                                <li className={
                                        `text-2xl p-3 rounded-full hover:bg-biru ${
                                            NavState === 'Tentang_kami_content' ? 'bg-biru' : 'bg-white'
                                        }`
                                    }
                                    onClick={
                                        () => {
                                            handleClick("Tentang_kami_content");
                                        }
                                }>
                                    Tentang Kami
                                </li>
                                <li className={
                                        `text-2xl p-3 rounded-full hover:bg-biru transition ${
                                            NavState === 'Kontak' ? 'bg-biru' : 'bg-white'
                                        }`
                                    }
                                    onClick={
                                        () => {
                                            handleClick("Kontak");
                                        }
                                }>
                                    Kontak
                                </li>
                                <li className={
                                        `hover:bg-biru text-xl p-3 rounded-full ${
                                            NavState === 'Nav_daftar_masuk' ? 'bg-biru' : 'bg-white'
                                        }`
                                    }
                                    onClick={
                                        () => {
                                            handleClick("Nav_daftar_masuk");
                                        }
                                }>
                                    Masuk/Daftar
                                </li>
                            </ul>
                        </nav>
                        {RenderedComponent} 
                        </div>
                </div>
                <div className="flex justify-between w-1/2">

                    <Card_hompage/>
                    <Card_hompage/>
                </div>
            </div>
        </div>
    //
    );
}
// {"text-2xl p-3 rounded-full  border-2 border-black +{NavState === 'Nav_daftar_masuk' ? 'bg-biru
//                 :'bg-white'}"
export default App;
