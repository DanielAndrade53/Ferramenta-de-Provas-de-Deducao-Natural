import React, { useEffect } from 'react';
import '../styles/Warning.css';

function Warning({ message, onClose, autoDismiss = true, duration = 4000 }) {
    // Auto-dismiss after a duration
    useEffect(() => {
        if (autoDismiss) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => clearTimeout(timer); // clean up
        }
    }, [autoDismiss, duration, onClose]);

    return (
        <div className="popup-warning">
            <span>{message}</span>
            <button onClick={onClose} className="close-btn">×</button>
        </div>
    );
}

export default Warning;
