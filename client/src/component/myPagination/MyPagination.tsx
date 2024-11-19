import React from 'react';

interface MyPaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const MyPagination: React.FC<MyPaginationProps> = ({
    totalPages,
    currentPage,
    onPageChange,
}): JSX.Element => {
    const renderPage = () => {
        const pageNumber: JSX.Element[] = [];
        const visiblePage = 3;

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 || 
                i === totalPages || 
                (i >= currentPage - visiblePage && i <= currentPage + visiblePage)
            ) {
                pageNumber.push(
                    <a
                        key={i}
                        href={`#page=${i}`}
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(i);
                        }}
                        className={`p-2 mx-1 border-t border-transparent ${
                            currentPage === i
                                ? 'current text-text border-text'
                                : 'hover:border-gray-400'
                        }`}
                    >
                        {i}
                    </a>
                );
            } else if (
                i === currentPage - visiblePage - 1 ||
                i === currentPage + visiblePage + 1
            ) {
                pageNumber.push(
                    <span key={`ellipsis-${i}`} className="p-2 mx-1">
                        ...
                    </span>
                );
            }
        }

        return pageNumber;
    };

    return (
        <div className="w-full mx-auto border-t border-gray-200 font-mono mt-16 text-center">
            <nav className="pagination flex flex-wrap justify-center text-text -mt-px">
                {/* Previous Button */}
                {currentPage > 1 && (
                    <a
                        href={`#page=${currentPage - 1}`}
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(currentPage - 1);
                        }}
                        className="p-2 mx-1"
                    >
                        ⇽
                    </a>
                )}

                {/* Page Numbers */}
                {renderPage()}

                {/* Next Button */}
                {currentPage < totalPages && (
                    <a
                        href={`#page=${currentPage + 1}`}
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(currentPage + 1);
                        }}
                        className="p-2 mx-1"
                    >
                        ⇾
                    </a>
                )}
            </nav>
        </div>
    );
};

export default MyPagination;
