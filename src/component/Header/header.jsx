import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './header.module.css';

import user from "../../assets/user.png"
import c1 from "../../assets/c1.jpg"
import c2 from "../../assets/c2.jpg"
import c3 from "../../assets/c3.jpg"
import c4 from "../../assets/c4.jpg"
import c5 from "../../assets/c5.jpg"
import c6 from "../../assets/c6.jpg"

import instraImg1 from "../../assets/instagram-img1.jpg"
import instraImg2 from "../../assets/instagram-img2.jpg"
import instraImg3 from "../../assets/instagram-img3.jpg"
import instraImg4 from "../../assets/instagram-img4.jpg"
import instraImg5 from "../../assets/instagram-img5.jpg"
import instraImg6 from "../../assets/instagram-img6.jpg"

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="px-2">
                        <div className={`card ${styles.storyContainer}`}>
                            <div className={styles.topLeft}>
                                <img src={user} className="card-img-top rounded-5" alt="..." />
                            </div>
                            <img src={user} className="card-img-top" alt="..." />
                            <span className={styles.bottomLeft}>User</span>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className={`card ${styles.storyContainer}`}>
                            <div className={styles.topLeft}>
                                <img src={c1} className="card-img-top rounded-5" alt="..." />
                            </div>
                            <img src={instraImg1} className="card-img-top" alt="..." />
                            <span className={styles.bottomLeft}>John Doe</span>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className={`card ${styles.storyContainer}`}>
                            <div className={styles.topLeft}>
                                <img src={c2} className="card-img-top rounded-5" alt="..." />
                            </div>
                            <img src={instraImg2} className="card-img-top" alt="..." />
                            <span className={styles.bottomLeft}>Samiul Karim</span>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className={`card ${styles.storyContainer}`}>
                            <div className={styles.topLeft}>
                                <img src={c3} className="card-img-top rounded-5" alt="..." />
                            </div>
                            <img src={instraImg3} className="card-img-top" alt="..." />
                            <span className={styles.bottomLeft}>Smith</span>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className={`card ${styles.storyContainer}`}>
                            <div className={styles.topLeft}>
                                <img src={c4} className="card-img-top rounded-5" alt="..." />
                            </div>
                            <img src={instraImg4} className="card-img-top" alt="..." />
                            <span className={styles.bottomLeft}>Farrah</span>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className={`card ${styles.storyContainer}`}>
                            <div className={styles.topLeft}>
                                <img src={c5} className="card-img-top rounded-5" alt="..." />
                            </div>
                            <img src={instraImg5} className="card-img-top" alt="..." />
                            <span className={styles.bottomLeft}>Jacab Sha</span>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className={`card ${styles.storyContainer}`}>
                            <div className={styles.topLeft}>
                                <img src={c6} className="card-img-top rounded-5" alt="..." />
                            </div>
                            <img src={instraImg6} className="card-img-top" alt="..." />
                            <span className={styles.bottomLeft}>Simi Khan</span>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}