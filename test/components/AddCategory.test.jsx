import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Prueba en AppCategory', () => {
  test('Debe de cambiar el valor en la caja de texto', () => {
    render(<AddCategory onNewCategory={ () => {} } />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Hola' } });
    expect(input.value).toBe('Hola');
  })

  test('debe de llamar onNewCategory si el input tiene un valor ', () => {
    const inputValue = 'Hola';
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={ onNewCategory } />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  })

  test('no debe de llamar onNewCategory si el input está vacío', () => {
    const inputValue = '';
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={ onNewCategory } />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(onNewCategory).not.toHaveBeenCalled();
  })
  
  
})
