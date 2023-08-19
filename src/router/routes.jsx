import React from 'react';
import { Routes, Route } from "react-router-dom";


import Home from '../component/home';
import About from '../component/about';
import Message from '../component/message';
import PostDetails from '../component/postDetails';
import ErrorPage from '../component/error-page';
import SignIn from '../component/SignInSignUp/signIn';
import SignUp from '../component/SignInSignUp/signup';
import PrivateOutlet from './PrivateOutlet';

const RootRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/message" element={<Message />} />
            <Route path="/*" element={<PrivateOutlet />}>
                <Route path="about" element={<About />} />
                <Route path="post-details/:id" element={<PostDetails />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default RootRouter;

