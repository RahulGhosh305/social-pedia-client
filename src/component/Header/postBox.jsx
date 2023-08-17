import React from 'react';
import { useForm } from "react-hook-form"
import styles from './header.module.css';

const PostBox = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className={styles.postBox}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control rounded-5" placeholder="Whats on your mind...!" {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <label for="img" className='my-2'>Upload a image</label>
                <br />
                <input type="file" id="img" name="img" accept="image/*" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default PostBox;