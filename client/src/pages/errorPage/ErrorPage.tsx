import React from 'react';

const ErrorPage: React.FC = (): JSX.Element => {
    const goBack = () => {
        window.history.back()
    }
    return (
        <div className='flex items-center justify-center h-screen' >
            <button onClick={goBack} className='bg-bg text-text px-10 py-8 rounded-md' >Go Back </button>
        </div>
    );
};

export default ErrorPage;