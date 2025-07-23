import React from 'react';
import './Notification.scss';

const Notification = ({ notification }) => {
    const { show, message } = notification;

    return (
        <div className={`notification-container ${show ? 'show' : ''}`}>
            {message}
        </div>
    );
};

export default Notification;