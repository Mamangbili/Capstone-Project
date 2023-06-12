import { useEffect, useState } from 'react'
import myimage from '../../images/src/34-2023-06-03 055839-Screenshot (744).png'
import axios from 'axios';
import { useFetcher, useNavigate, useParams } from 'react-router-dom';
import { Modal_submit_tambah_produk } from './Modal_submit_tambah_produk';
import { Modal_tidak_valid } from './Modal_validasi';

export function Tambah_produk() {


    // const [FileGambar, setFileGambar] = useState()
    // useEffect(() => {

    // }, [FileGambar])


    // function gantiGambar(event) {
    //     console.log(event.target.files[0])
    //     setFileGambar(event.target.files[0])
    // }



    const { usaha_id } = useParams()
    const [imagePreview, setImagePreview] = useState(null);
    const [UrlGambar, setUrlGambar] = useState()

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        setUrlGambar(values => ({
            ...values,
            'url_gambar_produk': e.target.files[0].name,
            'file_gambar_produk': e.target.files[0]
        }))
        console.log(e.target.files[0].name)
        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = (event) => {
                setImagePreview(event.target.result);
            };  

            reader.readAsDataURL(selectedFile);
        }
    };

   

    const [Input, setInputForm] = useState({})

    function formChange(event) {
        const nama = event.target.name
        const value = event.target.value
        console.log(value)
        setInputForm(values => ({ ...values, [nama]: value }))
    }

    
    function namaGambarGenerator(url_gambar_produk){
        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime.toISOString().slice(0, 19).replace('T', ' ');
        const url_name = usaha_id + '-' + formattedDateTime + '-' + url_gambar_produk
        const urlWithoutSpaces = url_name.replace(/[\/:]/g, '');
        return urlWithoutSpaces
    }
    
    function kirim() {

        const nama_gambar_baru = namaGambarGenerator(UrlGambar.url_gambar_produk)
        const postForm = new FormData()

        postForm.append('nama_produk', Input.nama_produk)
        postForm.append('deskripsi_produk', Input.deskripsi_produk)
        postForm.append('harga', Input.harga)
        postForm.append('usaha_id', usaha_id)
        postForm.append('url_gambar_produk', nama_gambar_baru)
        postForm.append('file_gambar_produk', UrlGambar.file_gambar_produk)

        axios.post('http://localhost/proyekppl/api/tambahProduk.php', postForm, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(response => console.log(response))
    }


    const [ModalSubmit, setModalSubmit] = useState(false)


    function tutupModalSubmit() {
        setModalSubmit(false)
    }


    const navigate = useNavigate()
    function tambahFN() {
        kirim()
        tutupModalSubmit()
        navigate(`/dashboard/${usaha_id}/toko/${usaha_id}`)
    }

    const [ModalTidakValid, setModalTidakValid] = useState(false)

    function validasi() {

        
        console.log('modasubmit', ModalSubmit)
        if (Input.nama_produk === null || Input.deskripsi_produk === null || Input.harga === null || UrlGambar === null ||
            Input.nama_produk === undefined || Input.deskripsi_produk === undefined || Input.harga === undefined || UrlGambar === undefined ||
            Input.nama_produk === '' || Input.deskripsi_produk === '' || Input.harga === '' || UrlGambar === '') {
            return false
        }
        return true

        
    }

    function hilangModalValidasi() {
        setModalTidakValid(false)

    }

    function tampilkanModalSubmit() {
        console.log('sebelumValidasi modal submit',ModalSubmit)
        if (validasi()) {
            console.log('validasi benar')
            setModalSubmit(true)

            //kirim post api

        }
        else {
            console.log('harusnya salah')
            setModalSubmit(false)
            setModalTidakValid(true)
        }
    }

    useEffect(() => {

    }, [ModalSubmit,ModalTidakValid])
    return (

        <>
            {ModalTidakValid ? <Modal_tidak_valid okFN={hilangModalValidasi} /> : null}
            {ModalSubmit ? <Modal_submit_tambah_produk tambahFN={tambahFN} batalFN={tutupModalSubmit} /> : null}
            <div className="h-[100vh] w-[100vw] absolute  flex justify-center">
                <div className="w-4/12 h-auto border   ">

                    <div className="flex justify-center border-gray-400 bg-slate-300 rounded-md border flex-col items-center p-3 gap-y-3">
                        {/* gambar */}
                        <div className='w-full border'>
                            {imagePreview && <img src={imagePreview} alt="Preview" className='w-full object-contain' />}
                        </div>
                        <input type="file" onChange={handleImageChange} />


                        <label htmlFor="">Nama Produk :</label>
                        <input onChange={formChange} type="text" className='border-black rounded-md  p-2 border ' name='nama_produk' />

                        <label htmlFor="">Harga</label>
                        <input onChange={formChange} type="number" className='border-black rounded-md  p-2 border ' name='harga' />

                        <label htmlFor="">Deskripsi Produk</label>
                        <textarea rows={5} onChange={formChange} type="text" className='border-black rounded-md border p-2' border name='deskripsi_produk' />


                        <button onClick={tampilkanModalSubmit} className='my-2 px-4 py-2 bg-lime-300 shadow-md shadow-black rounded-md'>Buat Produk Baru</button>
                    </div>
                </div>
            </div>
        </>
    )
}