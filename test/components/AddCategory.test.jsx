import { fireEvent, render, screen } from '@testing-library/react';
import AddCategory from '../../src/components/AddCategory';

describe('Prueba en AddCategory.', () => {
    const inputValue = 'Goku';

    test('Debe cambiar el valor de la caja de texto / input.', () => {
        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox');


        fireEvent.input(input, { target: { value: 'Goku' } });

        expect(input.value).toBe('Goku');



        screen.debug();


    });


    test('Debe llamar onNewCategory si el input tiene algún valor.', () => {

        const onNewCategory = jest.fn();


        render(<AddCategory onNewCategory={onNewCategory} />);


        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');


        fireEvent.input(input, { target: { value: inputValue } });

        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        screen.debug();

    });

    test('No debe llamar onNewCategory si el input es vacio.', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const
            input = screen.getByRole('textbox'),
            form = screen.getByRole('form');

        fireEvent.input( input, { target: {  } } );

        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);

        // O tambien

        expect( onNewCategory ).not.toHaveBeenCalled();
    });

});