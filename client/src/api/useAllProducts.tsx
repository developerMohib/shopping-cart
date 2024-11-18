import { useQuery } from '@tanstack/react-query';
import { Product } from '../allInterface/productsInterface';
import instance from './Instance';

const useAllProducts = () => {
    const { data: products, isLoading, refetch, error } = useQuery<Product[]>({
        queryKey: ["product"],
        queryFn: async (): Promise<Product[]> => {
            const res = await instance.get("/product/all");
            return res?.data;
        },
    });
    return { products, isLoading, refetch, error }
};

export default useAllProducts;