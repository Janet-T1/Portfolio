import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = ({ setOpen, isOpen }) => {
    return (
        <button onClick={() => setOpen((prev) => !prev)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
        </button>
    );
};

export default ToggleButton;
