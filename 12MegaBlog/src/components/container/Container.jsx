import React from 'react';

function container({children}) {
    return (
        <div>
            <div className='w-full max-w-7xl mx-auto'>
                {children}
            </div>
        </div>
    );
}

export default container;