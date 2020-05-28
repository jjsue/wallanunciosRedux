import { userNameReducer } from './../reducers/addUsernameReducer';
require('jest-localstorage-mock'); //Con esto hacemos un mock de la localstorage

describe('Reducers', () => {
    describe('userNameReducer', () => {
        test('Probamos el default, debe retornar el mismo valor que inital username', () => {
            const initialUsername = {
                username: 'Anon',
            }
            const action = {
                type: 'THIS_ACTION_DONT_EXIST',
            }
            let newStateTest = userNameReducer(initialUsername, action);
            expect(newStateTest).toEqual(initialUsername);
        });
        test('Probamos a pasarle un username en el payload', () => {
            const initialUsername = {
                username: 'Anon',
            }
            const expectedState = 'Manolo el testeador'
            const action = {
                type: 'ADD_USERNAME',
                payload: {
                    username: 'Manolo el testeador',
                },
            }
            let newStateTest = userNameReducer(initialUsername, action);
            expect(newStateTest).toEqual(expectedState);
        });
        test('Comprobamos si tambien se ha guardado en nuestra localStorage mockeada', () => {
            expect(Object.keys(localStorage.__STORE__).length).toBe(1);
            expect(localStorage.__STORE__.username).toBe('Manolo el testeador');
        });
        test('Vemos si nuestro reducer es capaz de tomar un valor de la localstore y guardar en el store redux', () => {
            const initialUsername = {
                username: 'Anon',
            }
            const expectedState = 'Manolo el testeador'
            const action = {
                type: 'READ_USERNAME_LOCALSTORAGE',
            }
            let newStateTest = userNameReducer(initialUsername, action);
            expect(newStateTest).toEqual(expectedState);
        });
    });
});
