import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail_toko_form = () => {
    const { user_id } = useParams()

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        'user_id': user_id,
        'nama_usaha': '',
        'alamat': '',
        'kota': '',
        'provinsi': '',
        'deskripsi_usaha': '',
        'nama_produk': '',
        'jenis_usaha': '',
        'deskripsi_produk': '',
        'harga': null,
        'url_gambar_toko': 'test',
        'url_gambar_produk': null,
        'url_gambar_profil': null,
        'file_gambar_toko': null,
        'file_gambar_produk': null,
        'file_gambar_produk': null
    });

    const handleInputChange = (event) => {
        console.log(event.target.name, event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleFileChange = (event) => {
        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime.toISOString().slice(0, 19).replace('T', ' ');
        const url_name = user_id + '-' + formattedDateTime + '-' + event.target.files[0].name
        var urlWithoutSpaces = url_name.replace(/[\/:]/g, '');

        console.log('url_' + event.target.name)

        setFormData({
            ...formData,
            ['url_' + event.target.name]: urlWithoutSpaces,
            ['file_' + event.target.name]: event.target.files[0]
        });

    };

    const handleSubmit = () => {
        const postData = new FormData();
        postData.append('user_id', formData.user_id);
        postData.append('nama_usaha', formData.nama_usaha);
        postData.append('alamat', formData.alamat);
        postData.append('kota', formData.kota);
        postData.append('provinsi', formData.provinsi);
        postData.append('deskripsi_usaha', formData.deskripsi_usaha);
        postData.append('nama_produk', formData.nama_produk);
        postData.append('jenis_usaha', formData.jenis_usaha);
        postData.append('deskripsi_produk', formData.deskripsi_produk);
        postData.append('harga', formData.harga);
        postData.append('url_gambar_toko', formData.url_gambar_toko);
        postData.append('url_gambar_produk', formData.url_gambar_produk);
        postData.append('url_gambar_profil', formData.url_gambar_profil);
        postData.append('file_gambar_toko', formData.file_gambar_toko);
        postData.append('file_gambar_produk', formData.file_gambar_produk);
        postData.append('file_gambar_profil', formData.file_gambar_profil);

        axios.post('http://localhost/proyekppl/api/register_detail.php', postData
        ,{ headers: {"Content-Type": "multipart/form-data"},
    }
        )
        .then((response) => {
                console.log(response.data)
                to_Dashboard(response.data.usaha_id)
            })
        
    };

    function to_Dashboard(usaha_id){
        navigate(`/dashboard/${usaha_id}/beranda`)
    }



    return (


        <>
            <div className="font-bold flex justify-center items-center  border-3 border-blue-700">
                <div className="border-2 border-biru w-2/5 h-3/5 p-5 ">
                    <div className="flex justify-center mb-10">
                        <h1 className=" text-2xl">FORM BIODATA USAHA</h1>
                    </div>
                    <table>
                        <tr>
                            <td className="w-1/6">Nama Usaha</td>
                            <td>:</td>
                            <td className="w-full"><input type="text" className="ml-3 p-1 w-full my-3 rounded-sm outline outline-1 " onChange={handleInputChange} name="nama_usaha" /></td>
                        </tr>
                        <tr>
                            <td className="w-1/6">Alamat Toko</td>
                            <td>:</td>
                            <td className="w-full"><input type="text" className="ml-3 p-1 w-full my-3 rounded-sm outline outline-1 " onChange={handleInputChange} name="alamat" /></td>
                        </tr>
                        <tr>
                            <td className="w-1/6">Kota</td>
                            <td>:</td>
                            <td className="w-full"><input type="text" className="ml-3 p-1 w-full my-3 rounded-sm outline outline-1 " onChange={handleInputChange} name="kota" /></td>
                        </tr>
                        <tr>
                            <td className="w-1/6">Provinsi</td>
                            <td>:</td>
                            <td className="w-full"><input type="text" className="ml-3 p-1 w-full my-3 rounded-sm outline outline-1 " onChange={handleInputChange} name="provinsi" /></td>
                        </tr>

                        <tr>
                            <td className="w-1/6">Deskripsi Toko</td>
                            <td>:</td>
                            <td className="w-full">
                                <textarea id="" cols="20" rows="5" className="ml-3 p-1 w-full outline outline-1" onChange={handleInputChange} name='deskripsi_usaha' /></td>
                        </tr>
                        <tr>
                            <td className="w-1/6">Nama Produk</td>
                            <td>:</td>
                            <td className="w-full"><input type="text" className="ml-3 p-1 w-full my-3 rounded-sm outline outline-1 " onChange={handleInputChange} name='nama_produk' /></td>
                        </tr>
                        <tr>
                            <td className="w-1/6">Jenis Usaha</td>
                            <td>:</td>
                            <td className="w-full"><input type="text" className="ml-3 p-1 w-full my-3 rounded-sm outline outline-1 " onChange={handleInputChange} name='jenis_usaha' /></td>
                        </tr>
                        <tr>
                            <td className="w-1/6">Deskripsi Produk</td>
                            <td>:</td>
                            <td className="w-full"><textarea id="" cols="20" rows="5" className="ml-3 p-1 w-full outline outline-1" onChange={handleInputChange} name='deskripsi_produk' /></td>
                        </tr>
                        <tr>
                            <td className="w-1/6">Harga</td>
                            <td>:</td>
                            <td className="w-full"><input type="text" className="ml-3 p-1 w-full my-3 rounded-sm outline outline-1 " onChange={handleInputChange} name='harga' placeholder="contoh : 50000" /></td>
                        </tr>
                        <tr>
                            <td className="w-1/6">Foto Toko</td>
                            <td>:</td>
                            <td className="w-full"><input type="file" onChange={handleFileChange} accept=".jpeg, .jpg, .png" name="gambar_toko" id="" className="ml-3 p-1" /></td>
                        </tr>

                        <tr>
                            <td className="w-1/6">Foto Produk</td>
                            <td>:</td>
                            <td className="w-full"><input type="file" onChange={handleFileChange} accept=".jpeg, .jpg, .png" name="gambar_produk" id="" className="ml-3 p-1" /></td>
                        </tr>
                        <tr>
                            <td className="w-1/6">Foto Profil</td>
                            <td>:</td>
                            <td className="w-full"><input type="file" onChange={handleFileChange} accept=".jpeg, .jpg, .png" name="gambar_profil" id="" className="ml-3 p-1" /></td>
                        </tr>

                    </table>


                    <div className="flex justify-center">
                        <button className="my-5 px-32 block text-2xl font-bold  py-4 rounded-full  bg-biru" onClick={handleSubmit} >Simpan</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Detail_toko_form;
