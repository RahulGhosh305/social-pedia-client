import React from 'react';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import RightPart from './Header/right-part';

const Message = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className="row my-5">
                    <RightPart />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Message;