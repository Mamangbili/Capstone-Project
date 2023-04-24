const Biodata = () => {
    return (
        <div className="font-bold flex justify-center items-center  border-3 border-blue-700">
            <div className="border-2 border-biru w-2/5 h-3/5 p-5 ">
                <div className="flex justify-center mb-10">
                    <h1 className=" text-2xl">FORM BIODATA USAHA belom selesai</h1>
                </div>
                <table>
                    <tr>
                        <td className="w-1/6">Nama Usaha</td>
                        <td>:</td>
                        <td className="w-full"><input type="text" className="ml-3 w-full my-3 rounded-sm outline outline-1 "/></td>
                    </tr>
                    <tr>
                        <td className="w-1/6">Alamat Toko</td>
                        <td>:</td>
                        <td className="w-full"><input type="text" className="ml-3 w-full my-3 rounded-sm outline outline-1 "/></td>
                    </tr>
                    <tr>
                        <td className="w-1/6">Nomor HP</td>
                        <td>:</td>
                        <td className="w-full"><input type="text" className="ml-3 w-full my-3 rounded-sm outline outline-1 "/></td>
                    </tr>
                    <tr>
                        <td className="w-1/6">Deskripsi Toko</td>
                        <td>:</td>
                        <td className="w-full">
                            <textarea name="" id="" cols="20" rows="5" className="ml-3 w-full outline outline-1"/></td>
                    </tr>
                    <tr>
                        <td className="w-1/6">Jenis Produk</td>
                        <td>:</td>
                        <td className="w-full"><input type="text" className="ml-3 w-full my-3 rounded-sm outline outline-1 "/></td>
                    </tr>
                    <tr>
                        <td className="w-1/6">Deskripsi Produk</td>
                        <td>:</td>
                        <td className="w-full"><textarea name="" id="" cols="20" rows="5" className="ml-3 w-full outline outline-1"/></td>
                    </tr>

                    <tr>
                        <td className="w-1/6">Foto Toko</td>
                        <td>:</td>
                        <td className="w-full"><input type="file" name="" id="" className="ml-3" /></td>
                    </tr>

                    <tr>
                        <td className="w-1/6">Foto Produk</td>
                        <td>:</td>
                        <td className="w-full"><input type="file" name="" id="" className="ml-3" /></td>
                    </tr>

                </table>


                <div className="flex justify-center">
                    <button className="my-5 px-32 block text-2xl font-bold  py-4 rounded-full  bg-biru">Simpan</button>
                </div>

            </div>
        </div>
    );
};

export default Biodata;
