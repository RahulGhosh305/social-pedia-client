import React from 'react';
import Navbar from './Navbar/navbar';
import Header from './Header/header';
import LeftPart from './Header/left-part';
import RightPart from './Header/right-part';
import PostBox from './Header/postBox';
import Posts from './Header/posts';
import Footer from './Footer/footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-3'>
                        <LeftPart />
                    </div>
                    <div className='col-md-6'>
                        <Header />
                        <PostBox />
                        <Posts />
                    </div>
                    <div className='col-md-3'>
                        <RightPart />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;