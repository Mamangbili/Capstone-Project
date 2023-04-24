const Form_daftar = () => {
    return (
        <div className="transition">
            <input type="text" name="nama" placeholder="Nama" className="block my-5 w-full h-9 rounded-sm outline outline-1"/>
            <input type="text" name="username" placeholder="Username" className="block my-5 w-full h-9 rounded-sm outline outline-1"/>
            <input type="tel" name="phone" placeholder="Nomor Handphone" className="block my-5 w-full h-9 rounded-sm outline outline-1"/>
            <input type="email" name="email" placeholder="Email" className="block my-5 w-full h-9 rounded-sm outline outline-1"/>
            <input type="password" name="password" placeholder="Password" className="block my-5 w-full h-9 rounded-sm outline outline-1"/>
            <input type="password" name="password-konfirmasi" placeholder="Konfirmasi password" className="block my-5 w-full h-9 rounded-sm outline outline-1"/>

            <div className="justify-center flex">
                <button className="text-2xl font-bold w-full h-10 rounded-full bg-biru my-5">Daftar</button>
            </div>
        </div>
    )
}

export default Form_daftar
