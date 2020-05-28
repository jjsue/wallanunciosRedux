import React from 'react';
import renderer from 'react-test-renderer';


import Login from './../components/login';
describe('Snapshot', () => {
    describe('Hacer test snapshot', () => {
        it('Renderiza bien', () => {
            const tree = renderer.create(<Login />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});