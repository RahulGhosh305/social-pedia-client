import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h4 className={styles.footerTitle}>Social Pedia</h4>
                        <p className={styles.footerSubtext}>Share your beautiful memories to see all your friend and family and you looks others peoples stories happily. </p>


                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h4 className={styles.footerTitle}>Information</h4>
                        <ul className="list-group">
                            <li className={styles.footerListItem}>About</li>
                            <li className={styles.footerListItem}>Service</li>
                            <li className={styles.footerListItem}>Terms and Condition</li>
                            <li className={styles.footerListItem}>Become a partner</li>
                            <li className={styles.footerListItem}>Privacy and Policy</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h4 className={styles.footerTitle}>Customer Support</h4>
                        <ul className="list-group">
                            <li className={styles.footerListItem}>FAQ</li>
                            <li className={styles.footerListItem}>How it works</li>
                            <li className={styles.footerListItem}>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h4 className={styles.footerTitle}>Have a Questions?</h4>
                        <div className="d-flex align-items-center">
                            <li className={styles.questionText} >26/A House, Nazrul Ave, KandirPar</li>
                        </div>
                        <div className="d-flex align-items-center">
                            <li className={styles.questionText} >+880 1521 555 222</li>
                        </div>
                        <div className="d-flex align-items-center">
                            <li className={styles.questionText} >socialpedia@gmail.com</li>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mx-3 text-center">All right reserve 2023 by Social pedia organization.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;