import { useEffect, useState } from 'react'
import Rope from '../../images/src/LOGO_new.png'
import axios from 'axios'

export function Invoice_detail({ invoice_id }) {
    
    const [data, setData] = useState()
    const [ListProduk, setListProduk] = useState()

    useEffect(() => {
        axios.get('http://localhost/proyekppl/api/invoiceDetail.php', { params: { 'invoice_id': 'INV-531598-399' } })
            .then(response => {
                console.log(response.data.informasi)
                setData(response.data.informasi)
                setListProduk(response.data.products)
            })
    }, [])
    
    function konversiUang(uang) {
        return (uang).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        })

    }
    if(!data) return null
    const total_transaksi = ListProduk.reduce( (prev,obj)=>{
        return prev + (obj.harga * obj.kuantitas)
    },0 )
    
    return (
        <>  
            <div className="w-5/12  m-auto border p-5">
                <button className='bg-slate-200 py-2 px-4 rounded-md shadow-md shadow-black mb-5'>Export PDF</button>
                <div>
                    <section>
                        <div className="flex justify-between">
                            <h1 className="text-3xl  border-black border-b-8 py-1 px-2-b-8 border-double ">INVOICE</h1>
                            <img src={Rope} className='w-20 h-10 inline-block' />
                        </div>
                        <p className='font-bold'>Mitra : </p>
                        <p>{data.nama_usaha}</p>
                        <p>{data.alamat}, {data.kota}, {data.provinsi} </p>
                        <p>{data.no_hp}</p>
                    </section>
                    <br />

                    <section>
                        <div className="flex justify-between">
                            <div>
                                <h2 className="font-bold">Untuk : </h2>
                                <p>nama     : {data.klien}</p>
                                <p>email    : {data.email_pembeli}</p>
                                <p>alamat   : {data.alamat_pembeli}</p>
                                <p>no_hp    : {data.no_hp_pembeli}</p>
                            </div>
                            <div>
                                <br />
                                <p>Invoice ID : {data.invoice_id}</p>
                                <p>Tanggal pembuatan : {data.tgl_invoice}</p>
                            </div>
                        </div>

                    </section>
                    <section className='justify-center flex mt-4'>

                        <table className='border'>
                            <tr className='bg-lime-300 '>
                                <th className='border-black border py-1 px-2'>nama_produk</th>
                                <th className='border-black border py-1 px-2'>deskripsi_produk</th>
                                <th className='border-black border py-1 px-2'>harga</th>
                                <th className='border-black border py-1 px-2'>Kuantitas</th>
                                <th className='border-black border py-1 px-2'>Total</th>
                            </tr>

                            {/* isi row disini map*/}
                            {ListProduk?.map(each => {
                                return (
                                    <tr>
                                        <td className='border-black border py-1 px-2'>{each.nama_produk}</td>
                                        <div className='h-20 overflow-y-auto border-black border-b-2'>
                                            <td className=' py-1 px-2 '>{each.deskripsi_produk}</td>
                                        </div>
                                        <td className='border-black border py-1 px-2'>{konversiUang(parseInt(each.harga))}</td>  {/*ini harga produk*/}
                                        <td className='border-black border py-1 px-2'>{each.kuantitas}</td>
                                        <td className='border-black border py-1 px-2'>{konversiUang(each.kuantitas * each.harga)}</td>

                                    </tr>

                                )

                            })}

                            <tr className='bg-lime-300 '>
                                <th className='border-black border py-1 px-2'>Total Transaksi</th>
                                <th className='border-black border py-1 px-2'>:</th>
                                <th className='border-black border py-1 px-2'></th>
                                <th className='border-black border py-1 px-2'></th>
                                <th className='border-black border py-1 px-2'>{konversiUang(total_transaksi)}</th>
                            </tr>

                        </table>

                    </section>

                    <div className='border border-black w-36 mt-4 p-2 rounded-md'>
                        <p className='border-b-4 border-black'> Metode Pembayaran </p>
                        <p> {data.metode_bayar} </p>
                    </div>
                </div>
            </div>
        </>
    )

}