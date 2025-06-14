import { useEffect, useState } from 'react';
import { getGifsBycategory } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const getGifs = async () => {
      const data = await getGifsBycategory(category);
      setGifs(data);
      setIsLoading(false);
    };

    useEffect(() => {
      getGifs();
    }, []);
    return { isLoading, gifs };
};