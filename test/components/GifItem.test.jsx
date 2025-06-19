import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Probando GifItems Components', () => {
    const gif = { title: 'Title', url: 'https://example.com/' };
    test('Debe coincidir con el snapshot', () => {
      const  { container } = render(<GifItem gif={gif}/>);
      expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen y el alt indicado', () => {
      render(<GifItem gif={gif}/>);
      const { src, alt } = screen.getByRole('img');
      expect(src).toBe(gif.url);
      expect(alt).toBe(gif.title);
    });

    test('debe mostrar el título en el componente', () => {
      render(<GifItem gif={gif}/>);
      expect(screen.getByText(gif.title)).toBeTruthy();
    });
    
    
});
