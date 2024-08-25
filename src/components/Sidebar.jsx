import React from 'react';

const Sidebar = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-800 text-white">
            {/* Sidebar content */}
            <div className="flex flex-col items-center justify-center mt-10">
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-4.418 0-8-3.582-8-8 0-3.866 2.745-7.106 6.383-7.858.468-.09.641.204.641.454v1.566c-2.59.57-3.135 1.4-3.135 2.992 0 .725.26 1.39.772 1.92-.27.77-.26 1.658.03 2.42.28.98.78 1.79 1.51 2.42-.27.08-.56.12-.86.12-.21 0-.42-.02-.62-.08.43 1.33 1.64 2.26 3.01 2.28-.56.44-1.22.7-1.94.7-.12 0-.24-.01-.36-.02 1.38.88 3.01 1.4 4.79 1.4 5.16 0 8.01-4.29 8.01-8.01 0-.12 0-.24-.01-.36.55-.39 1.03-.88 1.41-1.43-.51.23-1.06.38-1.64.45.59-.36 1.05-.93 1.26-1.61-.55.32-1.16.52-1.81.52-.14 0-.28 0-.42-.02.63-.4 1.12-1.02 1.35-1.75z" />
                    </svg>
                </a>
                <a href="https://linkedin.com/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21h-2v-6.75c0-1.24-.5-2.44-1.41-3.32C13.19 9.5 12.09 9 11 9s-2.19.5-2.59 1.93C7.5 11.81 7 13.01 7 14.25V21H5v-6.75c0-1.79.72-3.52 2-4.78C8.28 8.72 9.97 8 11 8s2.72.72 3 1.47c1.28 1.26 2 3 2 4.78V21zm-6-11a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </a>
                {/* Add more social links here */}
            </div>
        </div>
    );
};

export default Sidebar;