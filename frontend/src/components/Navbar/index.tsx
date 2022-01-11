import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styless.css';

function Navbar(){
    return(
    <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/ThiagoTecRicardo/dsmovie" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/thiagotectricardo</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;