import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock( '../../src/hooks/useFetchGifs' );

describe('Pruebas en <GifGrid/>', () => { 

    const category = 'Goku';

    test('Debe mostrar el loadin', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid  category={ category }/>);


        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

     });

     test('Debe mostar items cuando se cargan las imagenes mediante el useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC', 
                title: 'Goku',
                url: 'https://goku.com'
            },
            {
                id: '123',
                title: 'Vegeta',
                url: 'https://vegeta.com'
            }   
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid  category={ category }/>);


        expect( screen.getAllByRole('img').length ).toBe(2);






      })

 });