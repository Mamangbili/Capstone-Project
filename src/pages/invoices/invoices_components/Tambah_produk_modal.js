import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export function Tambah_produk_modal({$usaha_id}){
    const [data, setData] = useState()
    
    useEffect(() => {
        axios.get('http://localhost/proyekppl/api/pordukSaya.php',{params:{'usaha_id':$usaha_id}})
        .then(response=> setData(data.data))
    })

    

    return(
        <>
            <div className="w-full min-h-screen bg-gray-300 flex justify-center items-center">

                <div className="w-72 h-72 border border-black ">

                    <label htmlFor="">Produk</label>
                    <select name="" id="">
                    {data.map((each) => {
                        return(
                            <option value={each.nama_produk}>{each.nama_produk}</option>
                        )
                    })}

                    </select>

                </div>

            </div>

        </>
    )
}