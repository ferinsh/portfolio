import placeHolderLogo from '../assets/logoipsum-399.svg'

const Header = () => {
    return (
        <>
            <section className="header" id="mainheader">
                <img src={placeHolderLogo} className='header-logo' alt="place holder logo" />
                <section className="header-controls-holder">
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
                </section>
            </section>
        </>
    )
}

export default Header