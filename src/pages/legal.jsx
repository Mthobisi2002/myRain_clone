import React from 'react';
import "../styles/legal.css";
import PdfViewer from '../displays/PdfViewer';

function Legal() {
    return (
        <div className='legal'>
            <PdfViewer />
        </div>
    )
}

export default Legal;