const Form_masuk = () => {
    return (
        <div className="transition">
            <input className="block my-5 rounded-sm h-12 outline-1 outline  w-full" type="email" name="email" placeholder="masukan email"/>
            <input className="block my-5 rounded-sm h-12 outline-1 outline  w-full" type="password" name="password" placeholder="masukan password"/>
            <a href="#">Lupa password?</a>
            <div className="flex justify-center">
                <button className="my-5 bg-biru w-2/3 h-12 rounded-full text-2xl font-bold">
                    Masuk
                </button>
            </div>
        </div>
    );
};

export default Form_masuk;
