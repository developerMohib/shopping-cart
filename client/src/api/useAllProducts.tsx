import { useQuery } from '@tanstack/react-query';
import { Product } from '../allInterface/productsInterface';
import instance from './Instance';

interface HookProps {
    sort: string;
    category: string;
    search: string;
    currentPage:number;
}

interface ProductResponse {
    products: Product[];
    totalProducts: number;
    totalPages: number;
}

const useAllProducts = ({ sort, category, search,currentPage }: HookProps) => {
    const { data, isLoading, refetch, error } = useQuery<ProductResponse>({
        queryKey: ["product", sort, category, search,currentPage],
        queryFn: async (): Promise<ProductResponse> => {
            const res = await instance.get("/product/all", {
                params: { sort, category, search ,currentPage},
            });
            const { products, totalProducts, totalPages } = res.data;
            return { products, totalProducts, totalPages };
        },
        enabled: !!sort, // Ensures the query runs only if `sort` has a value
    });

    return {
        products: data?.products || [],
        totalProducts: data?.totalProducts || 0,
        totalPages: data?.totalPages || 0,
        isLoading,
        refetch,
        error,
    };
};

export default useAllProducts;
