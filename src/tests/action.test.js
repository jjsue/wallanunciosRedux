import addUsername from './../actions/addUsername';
require('jest-localstorage-mock'); //Con esto hacemos un mock de la localstorage

describe('Actions', () => {
    describe('addUsernameAction', () => {
        test('Probamos la action addUsername que debe hacer que se guarde en el store el nombre de usuario que le pasamos por parametro', () => {
            const user = 'Miguelito'
            const expectedObject = {
                type: 'ADD_USERNAME',
                payload: {
                    username: user,
                },
            }
            let toTest = addUsername(user);
            expect(expectedObject).toEqual(toTest);
        });
    });
});
