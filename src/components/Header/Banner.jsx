const Banner = ({ headerBgImg, headerText }) => {
    return (
        <header style={{backgroundImage: `url(${headerBgImg})`}} className="banner">
            <h1 className="banner--text">{headerText}</h1>
        </header>
    )
}

export default Banner