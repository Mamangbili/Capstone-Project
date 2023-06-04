// gambar -- text
const Kontak = (props) => {
    return (<a href={props.websiteURL}>
        <div className="flex gap-3">
            <img src={props.gambarURL}
                alt="not found"
                className="w-5 h-5 inline-block"/>
            <p className="text-24"> {
                props.text
            }</p>
        </div>
    </a>)
}

// props -- link
// props -- gambar
// props -- text

export default Kontak
