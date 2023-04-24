import React, {useState} from "react";
import Form_daftar from "./form_daftar";
import Form_masuk from "./form_masuk";

const Nav_daftar_masuk = () => {
    let [StateForm, setStateForm] = useState("masuk");
    let [RenderedComponent, setRenderedComponent] = useState (
        <Form_masuk/>)

    const handlerState = (state) => {
        setStateForm(state);
        if (StateForm == 'daftar') {
            setRenderedComponent (
                <Form_masuk/>)
        }
        if (StateForm == 'masuk') {
            setRenderedComponent (
                <Form_daftar/>)
        }
    };


    return (
        <div className="items-center justify-center flex my-5">
            <div className="border-4 border-biru w-auto px-5 rounded-md">
                <button className={
                        `w-28 py-4 my-4 bg-biru rounded-l-sm px- text-1xl font-bold text-center transition ${
                            StateForm === "masuk" ? "bg-biru" : "bg-slate-500"
                        }`
                    }
                    onClick={
                        () => {
                            handlerState("masuk");
                        }
                }>
                    Masuk
                </button>

                <button className={
                        `w-28 py-4 my-4 bg-biru rounded-r-sm px- text-1xl font-bold text-center transition ${
                            StateForm === "daftar" ? "bg-biru" : "bg-slate-500"
                        }`
                    }
                    onClick={
                        () => {
                            handlerState("daftar");
                        }
                }>
                    Daftar
                </button>

                {RenderedComponent} </div>
        </div>
    );
};

// return str 'onMasuk' atau 'onDaftar'
export default Nav_daftar_masuk;
