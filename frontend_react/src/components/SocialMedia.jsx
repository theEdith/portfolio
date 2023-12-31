import React from 'react';
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <BsTwitter />
            </div>
            <div>
                <BsFacebook />
            </div>
            <div>
                <BsInstagram/>
            </div>
        </div>
    )
}

export default SocialMedia
