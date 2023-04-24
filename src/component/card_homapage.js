const Card_hompage = (props) => {
    return (

        <div className="border-2 border-red-500 w-1/2 mr-5 my-4 flex item-center justify-center rounded-xl shadow-slate-600 shadow-md">
            <div className="border-2 border-blue-500 px-28 mx-10">
              <div>
                  <img src={
                          props.URLgambar
                      }
                      alt=""
                      className="w-1//4 h-2/5"/>
                  #gambar
              </div>
              <h1>{
                  props.judul
              }judul</h1>
              <p>{
                  props.text
              }text</p>
            </div>
        </div>
    );
};

// props -- gambar
// props -- judul
// props -- text

export default Card_hompage;
