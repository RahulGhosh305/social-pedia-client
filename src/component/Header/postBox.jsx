import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostBox = () => {
    const [imageURL, setImageURl] = useState(null);
    const [userInfo, setUserInfo] = useState("")
    const [post, setPost] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch('https://social-pedia-server-780h.onrender.com/api/v1/auth/protected-user', {
            method: 'POST',
            body: JSON.stringify({ token: token }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setUserInfo(data)
            });

    }, [])

    const refresh = () => {
        window.location.reload();
    }

    // handle image input
    const handleImageUpload = async (event) => {
        const imageData = new FormData()
        imageData.set('key', 'a246b045a78484bd307e45fbf7eb0ee7')
        imageData.append('image', event.target.files[0])

        await axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response => {
                setImageURl(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    }
    // console.log(userInfo);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')
        if (!token) {
            return navigate('/signin')
        }

        const postData = {
            postText: post,
            postPhoto: imageURL,
            comments: [],
            like: [],
            user: {
                name: userInfo?.username,
                photo: userInfo?.photo
            }
        }
        console.log(postData)
        await fetch("https://social-pedia-server-780h.onrender.com/api/v1/social/post", {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                refresh()
            })

    };


    return (
        <div className={styles.postBox}>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Whats on your mind...!"
                    className='form-control rounded-5'
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                />
                <br />

                <input onChange={handleImageUpload} type='file' />
                <input type="submit" />
                <br />
            </form>

        </div>
    );
};

export default PostBox;