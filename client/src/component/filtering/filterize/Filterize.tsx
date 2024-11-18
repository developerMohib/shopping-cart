import React, { ChangeEvent } from 'react';

interface CategoryProps {
    handleCategorise: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
    category: string;
}

const Filterize: React.FC<CategoryProps> = ({ handleCategorise, category }): JSX.Element => {
    return (
        <div className="md:mt-6 mt-2">
            <h1>Filtering by category </h1>
            <ul className="md:block flex md:flex-col flex-row md:mt-6 mt-2">
                <li className="flex items-center mb-2">
                    <input
                        type="radio"
                        id="all"
                        name="categoryFilter"
                        value="all"
                        className="mr-2"
                        onChange={handleCategorise}
                        checked = {category === "all"}
                    />
                    <label htmlFor="all">All</label>
                </li>
                <li className="flex items-center mb-2">
                    <input
                        type="radio"
                        id="laptop"
                        name="categoryFilter"
                        value="laptop"
                        className="mr-2"
                        onChange={handleCategorise}
                        checked = {category === "laptop"}
                    />
                    <label htmlFor="laptop">Laptop</label>
                </li>
                <li className="flex items-center">
                    <input
                        type="radio"
                        id="smartphone"
                        name="categoryFilter"
                        value="smartphone"
                        className="mr-2"
                        onChange={handleCategorise}
                        checked = {category === "smartphone"}
                    />
                    <label htmlFor="smartphone">Smartphone</label>
                </li>
            </ul>
        </div>
    );
};

export default Filterize;