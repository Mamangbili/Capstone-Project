// gambar -- text
const Kontak = (props) => {
  return (
    <div>
      <a href={props.URLgambar}>
        <img src={props.gambar} alt="not found" className="w-52 h-52" />
      </a>
      <p className="text-24">{props.text}</p>
    </div>
  );
};

//props -- link
//props -- gambar
//props -- text

export default Kontak;
