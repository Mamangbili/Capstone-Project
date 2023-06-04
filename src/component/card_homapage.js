import { Link, useNavigate } from "react-router-dom";


const Card_hompage = (props) => {
   

    return (



        
            <div className="border-2 w-1/2 mr-5 my-4 flex item-center justify-center rounded-xl shadow-slate-600 shadow-md"  >
                <div className=" w-full px mx-10 flex flex-col justify-center items-center">
                    <div className="w-full flex justify-center">
                        <img src={
                            props.URLgambar
                        }
                            className="w-28 h-24" />
                    </div>
                    <h1 className="font-bold">{
                        props.judul
                    }</h1>
                    <p className="text-xs">{
                        props.text
                    }</p>
                </div>

            </div>
    );
};

// props -- gambar
// props -- judul
// props -- text

export default Card_hompage;
