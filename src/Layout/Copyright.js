import Link from 'next/link';
import React from 'react';



const Copyright = () => {
    return (
        <div className="copyright">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 text-center text-lg-start">
                        <p>&copy; {new Date().getFullYear()}  MINDMATRIXCARE PRIVATE LIMITED</p>
                    </div>
                    <div className="col-lg-4">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
