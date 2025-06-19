import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba en GifGrid', () => {
  const category = 'Godzilla';
  test('Debe mostrar el loading en el estado inicial ', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  })

  test('debe de mostrar items cuando se carguen las imagenes con useFetchGifs', () => {
    const images = [
      {
        id: '1',
        url: 'https://example.com',
        title: '3'
      },
      {
        id: '2',
        url: 'https://example.com',
        title: '4'
      }
    ];
    useFetchGifs.mockReturnValue({
      gifs: images,
      isLoading: false
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  })
  
  
})
