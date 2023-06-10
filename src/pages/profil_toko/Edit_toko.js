import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Edit_toko() {
    const { usaha_id } = useParams();
    const [InputForm, setInputForm] = useState({
        nama_usaha: "",
        alamat: "",
        kota: "",
        provinsi: "",
        deskripsi_usaha: ""
    });
    const [Gambar, setGambar] = useState({
        url_gambar_toko: "",
        files_gambar_toko: null
    });


    useEffect(() => {
        axios
            .get("http://localhost/proyekppl/api/profilUsaha.php", {
                params: { usaha_id }
            })
            .then(response => {
                setGambar({
                    url_gambar_toko: response.data.url_gambar_toko,
                    files_gambar_toko: null
                });
                setInputForm({ ...InputForm, ...response.data });
            });
    }, []);

    function nama_gambar_baru(nama) {
        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");
        const url_name = usaha_id + "-" + formattedDateTime + "-" + nama;
        var urlWithoutSpaces = url_name.replace(/[\/:]/g, "");
        return urlWithoutSpaces;
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "gambar") {
            const nama_file = nama_gambar_baru(e.target.files[0].name);
            setInputForm({ ...InputForm, url_gambar_toko: nama_file });
            setGambar({
                url_gambar_toko: URL.createObjectURL(e.target.files[0]),
                files_gambar_toko: e.target.files[0]
            });
        } else {
            setInputForm({ ...InputForm, [name]: value });
        }
    }

    function onSubmit() {
        console.log(Gambar.files_gambar_toko);

        const postForm = new FormData()
        postForm.append('nama_usaha', InputForm.nama_usaha)
        postForm.append('usaha_id', usaha_id)
        postForm.append('alamat', InputForm.alamat)
        postForm.append('kota', InputForm.kota)
        postForm.append('provinsi', InputForm.provinsi)
        postForm.append('deskripsi_usaha', InputForm.deskripsi_usaha)
        postForm.append('url_gambar_toko', Gambar.url_gambar_toko)
        postForm.append('files_gambar_toko', Gambar.files_gambar_toko)

        axios.post('http://localhost/proyekppl/api/ubahToko.php'
        , postForm , {headers: {'Content-Type':'multipart/form-data'}}).then(response => console.log(response))
    }

    return (
        <>
            {/* selurh halama */}
            <div>
                {/* kotak */}
                <div className="border w-96 h-auto p-2 bg-slate-300 rounded-md">
                    <div className="border w-80 h-52 border-black p-2">
                        <img
                            src={Gambar.url_gambar_toko}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <input onChange={handleChange} type="file" name="gambar" />

                    <p>Nama Toko</p>
                    <input
                        className="w-full rounded-md p-1 border border-black"
                        onChange={handleChange}
                        value={InputForm.nama_usaha}
                        name="nama_usaha"
                        type="text"
                    />

                    <p>Alamat</p>
                    <input
                        className="w-full rounded-md p-1 border border-black"
                        onChange={handleChange}
                        value={InputForm.alamat}
                        name="alamat"
                        type="text"
                    />

                    <p>Kota</p>
                    <input
                        className="w-full rounded-md p-1 border border-black"
                        onChange={handleChange}
                        value={InputForm.kota}
                        name="kota"
                        type="text"
                    />

                    <p>Provinsi</p>
                    <input
                        className="w-full rounded-md p-1 border border-black"
                        onChange={handleChange}
                        value={InputForm.provinsi}
                        name="provinsi"
                        type="text"
                    />

                    <p>Deskripsi Usaha</p>
                    <textarea
                        rows="5"
                        className="w-full"
                        onChange={handleChange}
                        value={InputForm.deskripsi_usaha}
                        name="deskripsi_usaha"
                        type="text"
                    />

                    <button
                        className="block py-2 px-10 shadow-md shadow-black bg-lime-200"
                        onClick={onSubmit}
                    >
                        Ubah
                    </button>
                </div>
            </div>
        </>
    );
}
