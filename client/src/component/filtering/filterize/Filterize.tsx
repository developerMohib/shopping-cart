import React, { ChangeEvent } from 'react';

interface CategoryProps {
    handleCategorise: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
    category: string;
}

const Filterize: React.FC<CategoryProps> = ({ handleCategorise, category }): JSX.Element => {

    const myCategory : string[] = ["all", "smartphone", "tablet", "electronics", "laptop", "audio", "wearable", "camera", "home appliance",]


    return (
        <div className="md:mt-6 mt-2">
            <h1>Filtering by category </h1>
            <ul className="md:block flex md:flex-col flex-row md:mt-6 mt-2">
                {myCategory.map((cat) => (
                    <li key={cat} className="flex items-center mb-2">
                        <input
                            type="radio"
                            id={cat}
                            name="categoryFilter"
                            value={cat}
                            className="mr-2"
                            onChange={handleCategorise}
                            checked={category === cat}
                        />
                        <label htmlFor={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filterize;