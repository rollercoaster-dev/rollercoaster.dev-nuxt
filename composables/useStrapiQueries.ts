import type { PageAttributes } from '@/types/strapi.types';

export const useStrapiQueries = () => {
  const config = useRuntimeConfig();
  const API_URL =
    `${config.public.strapiUrl}` || 'http://localhost:1337';

  const fetchStrapiData = async <T>(endpoint: string, token?: string): Promise<T> => {
    try {
      const headers: Record<string, string> = {};

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      } else {
        headers['Authorization'] = `Bearer ${config.private.strapiToken}`;
      }

      const { data, error } = await useAsyncData(
          endpoint,
          () => $fetch<T>(`${API_URL}/${endpoint}`, { headers })
      );

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

  return { fetchStrapiData };
};
