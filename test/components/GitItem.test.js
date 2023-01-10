const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");

describe('Prueba de <GetItem />', () => {

    const
        title = 'Hola',
        url = 'http://localhost/EsteEsElUrl';
        
    test('Debe hacer match con el snapshot.', () => {


        const { container } = render( <GifItem title={title} url={url} /> );

        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado.', () => {

        render(<GifItem title={title} url={url} />);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('Debe mostrar el titulo del componente.', () => {

        render(<GifItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();

    })
});