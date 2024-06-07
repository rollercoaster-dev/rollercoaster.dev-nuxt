import type {PageAttributes} from '@/types/strapi.types';

export const useStrapiQueries = () => {
    const config = useRuntimeConfig();
    const API_URL = `${config.public.strapiUrl}` || 'http://localhost:1337';

    const fetchStrapiData = async <T>(endpoint: string): Promise<T> => {
        try {
            console.log(`${API_URL}/${endpoint}`);
            const { data, error } = await useFetch<T>(`/strapi/${endpoint}`);

            if (error.value) {
                throw error.value;
            }

            if (!data.value) {
                console.error("No data received for endpoint:", endpoint);
                throw new Error(`No data received for endpoint: ${endpoint}`);
            }

            return data.value as T;
        } catch (error) {
            console.error("fetchStrapiData", error);
            throw error;
        }
    };

    return {fetchStrapiData};
};
