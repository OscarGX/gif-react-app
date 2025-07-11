import { getGifsBycategory } from '../../src/helpers/getGifs';

describe('Probar función GetGifs', () => {
  test('Debe retornar un arreglo de gifs', async () => {
    const gifs = await getGifsBycategory('Godzilla');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String)
    });
  });
});
