import { useQuery } from '@tanstack/react-query';
import { Product } from '../allInterface/productsInterface';
import instance from './Instance';

interface HookProps {
    sort: string,
    category : string,
    search : string,
}

const useAllProducts = ({ sort, category,search }: HookProps) => {
    // console.log('sort ',sort)
    const { data: products, isLoading, refetch, error } = useQuery<Product[]>({
        queryKey: ["product",sort,category,search],
        queryFn: async (): Promise<Product[]> => {
            const res = await instance.get("/product/all", {
                params: { sort,category,search}
            });
            return res?.data;
        },
        enabled : !!sort ,
    });
    return { products, isLoading, refetch, error }
};

export default useAllProducts;