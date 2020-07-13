import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3 bg-light">
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between">
                <div>
                    <h3 className="h5">Link-uri rapide:</h3>
                    <p className="mb-1">
                        <Link to='/about'>Despre</Link>
                    </p>
                    <p className="m-0">
                        <Link to='/terms-and-conditions'>Termeni și condiții</Link>
                    </p>
                </div>
                <div>
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="mb-1">
                        <a href="mailto:caiuspuiu@gmail.com">
                            <Mail className="mr-1 mb-1 footer-icon"/>
                            caiuspuiu@gmail.com
                        </a>
                    </p>
                    <p className="m-0"><Phone className="mr-1 footer-icon"/>+0761524888</p>
                </div>
                <div>
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="mb-1">
                        <a href="https://github.com/CaiusPuiu">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            CaiusPuiu
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="s">
                            <LinkedIn className="mr-1 footer-icon"/>
                            
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-3">
                
            </div>
        </footer>
    );
}

export default Footer;