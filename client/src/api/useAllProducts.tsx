import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../allInterface/productsInterface';

const useAllProducts = () => {
    const { data: products, isLoading, refetch, error } = useQuery<Product[]>({
        queryKey: ["product"],
        queryFn: async (): Promise<Product[]> => {
            const res = await axios.get("./products.json");
            return res?.data;
        },
    });
    return { products, isLoading, refetch, error }
};

export default useAllProducts;