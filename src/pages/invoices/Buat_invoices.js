export function Buat_invoices(){

    return (
        <>
            <div className="flex   items-center flex-col">
                <div className="w-96">
                    <div className="flex justify-center"> 
                        <h1 className="text-2xl ">FORM PEMBUATAN INVOICES</h1>
                    </div> 
                    <div className="flex border border-red-200">
                        <form action="">
                            <label htmlFor="penagih" className="font-bold" >Nama Penagih :</label>
                            <input id='penagih' class='border-2 border-black rounded-sm ml-2 p-1  ' htmlFor='penagih' type="text inline-block" />
                            <table>
                                <th><h2>Tagihan untuk </h2> </th>
                                <tr>
                                    <td><label htmlFor="nama">Nama </label></td>
                                    <td>:</td>
                                    <td><input type="text" id='nama' class='border-2 border-black rounded-sm ml-2 p-1  '/></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="alamat">Alamat </label></td>
                                    <td>:</td>
                                    <td><input type="text" id='alamat' class='border-2 border-black rounded-sm ml-2 p-1  '/></td>
                                </tr>
                                <tr>
                                    <td> <label htmlFor="no_hp">No Hp </label></td>
                                    <td>:</td>
                                    <td><input type="text" id='no_hp'class='border-2 border-black rounded-sm ml-2 p-1  '/></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="email">Email </label></td>
                                    <td>:</td>
                                    <td><input type="text" id='email' class='border-2 border-black rounded-sm ml-2 p-1  '/></td>
                                </tr>
                            </table>

                                    <div className="border">
                                        <label htmlFor="metode_pembayaran">Metode Pembayaran :</label>
                                        <textarea name="metode_pembayaran" id="metode_pembayaran" cols="30" rows="5" class='border-2 border-black rounded-sm ml-2 p-1 block '></textarea>
                                    </div>

                                    <button type='button' className="py-1 px-2 bg-slate-400 rounded-xl my-2 shadow mb-5"> callback modal tambah produk</button>
                        </form>
                    </div>

                </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="bg-lime-200 border border-black py-1 px-2">Produk</th>
                                <th className="bg-lime-200 border border-black py-1 px-2">Deskripsi</th>
                                <th className="bg-lime-200 border border-black py-1 px-2">Harga</th>
                                <th className="bg-lime-200 border border-black py-1 px-2">Jumlah</th>
                                <th className="bg-lime-200 border border-black py-1 px-2">Harga Total</th>
                            </tr>
                        </thead>

                        <tbody>
                        {/* generetae row */}
                            <tr>
                                <td>a</td>
                                <td>2</td>
                                <td>4</td>
                                <td>3</td>
                                <td>5</td>
                            </tr>

                        </tbody>

                    </table>

                <button className="bg-lime-200 px-10 py-4 rounded-md shadow shadow-md shadow-black mt-5"> Kirim </button>

            </div>

        </>

    )
}