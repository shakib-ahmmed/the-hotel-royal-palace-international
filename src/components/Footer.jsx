import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* FOOTER */}
            <footer className="bg-base-100 p-6 mt-10 text-center">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Royal Palace Hotel. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;