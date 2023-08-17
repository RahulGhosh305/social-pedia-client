import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";


import Home from '../component/home';
import About from '../component/about';
import Message from '../component/message';
import PostDetails from '../component/postDetails';
import ErrorPage from '../component/error-page';
import SignIn from '../component/SignInSignUp/signIn';
import SignUp from '../component/SignInSignUp/signup';

const RootRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/message" element={<Message />} />
            <Route path="/post-details" element={<PostDetails />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default RootRouter;