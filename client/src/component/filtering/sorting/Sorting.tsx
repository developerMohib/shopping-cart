import React, { ChangeEvent } from 'react';
interface SortingProps {
    handleSorting: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
    sort: string;
}

const Sorting: React.FC<SortingProps> = ({handleSorting,sort}): JSX.Element => {
    return (
        <div>
            <h1>Product sorting</h1>
            <ul className="md:block flex md:flex-col flex-row md:mt-6 mt-2">
                <li className="flex items-center mb-2">
                    <input
                        type="radio"
                        id="default"
                        name="sortOption"
                        value=" "
                        className="mr-2"
                        onChange={handleSorting}
                        checked={sort === " "}
                    />
                    <label htmlFor="default">default</label>
                </li>
                <li className="flex items-center mb-2">
                    <input
                        type="radio"
                        id="highToLow"
                        name="sortOption"
                        value="highToLow"
                        className="mr-2"
                        onChange={handleSorting}
                        checked={sort === "highToLow"}
                    />
                    <label htmlFor="highToLow">High To Low</label>
                </li>
                <li className="flex items-center">
                    <input
                        type="radio"
                        id="lowToHigh"
                        name="sortOption"
                        value="lowToHigh"
                        className="mr-2"
                        onChange={handleSorting}
                        checked={sort === "lowToHigh"}
                    />
                    <label htmlFor="lowToHigh">Low To High</label>
                </li>
            </ul>
        </div>
    );
};

export default Sorting;