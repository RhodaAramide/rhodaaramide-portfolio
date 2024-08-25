import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <p className="text-sm">© 2024 RhodaAramide. All rights reserved.</p>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-sm hover:text-gray-400">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:text-gray-400">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:text-gray-400">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;