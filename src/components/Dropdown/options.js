import React from 'react';

export function DropdownOption({ name, content: Content, backgroundHeight }) {
    return (
        <button 
            className='dropdown-option'>
                {name}
        </button>
    )
}