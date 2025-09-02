import React from 'react';
import { GridLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className="min-h-[calc(100vh-60px)] flex items-center justify-center">
            <GridLoader color="#c09e61" size="30px" />
        </div>
    );
};

export default Spinner;