import React from 'react';
import './SocialShare.css';

const SocialShare = ({ url, text }) => {
    const shareOptions = [
        { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
        { name: 'Twitter', url: `https://twitter.com/intent/tweet?url=${url}&text=${text}` },
        { name: 'LinkedIn', url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}` },
    ];

    return (
        <div className="social-share">
            <h4>Share this post:</h4>
            <ul>
                {shareOptions.map((option) => (
                    <li key={option.name}>
                        <a href={option.url} target="_blank" rel="noopener noreferrer">
                            {option.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialShare;
