export const getGifsBycategory = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key={}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data.data.map((x) => ({ id: x.id, title: x.title, url: x.images.downsized_medium.url }));
};