import {Character, King, Fighter} from './classes';

describe('Given a class creator', () => {
	describe('When you create a new <Character> with the arguments are "pepe", "baratheon", "12"', () => {
		test('Then if we ask for foo.alive it should return true', () => {
			const foo = new Character('pepe', 'baratheon', 12);
			expect(foo.alive).toBe(true);
			foo.die();
			expect(foo.alive).toBe(false);
		});
	});

	describe('When you create a new <King> with the arguments are "pepe", "baratheon", 12, 2', () => {
		test('Then if foo.alive it should return true.', () => {
			const foo = new King('pepe', 'baratheon', 12, 2);
			expect(foo.alive).toBe(true);
		});
		test('foo.greetings() should be "Vais a morir todos"', () => {
			const foo = new King('pepe', 'baratheon', 12, 2);
			expect(foo.greetings()).toBe('Vais a morir todos');
		});
	});

	describe('When you create a new <Fighter> if the arguments are "pepe", "baratheon", 12, 2 ', () => {
		const foo = new Fighter('pepe', 'baratheon', 12, 'knife', 10);
		test('Then foo.alive should be true.', () => {
			expect(foo.alive).toBe(true);
		});

		test('foo.greetings() should be "Primero pego y luego pregunto"', () => {
			expect(foo.greetings()).toBe('Primero pego y luego pregunto');
		});

		test('foo.weapon() should be "knife"', () => {
			expect(foo.greetings()).toBe('Primero pego y luego pregunto');
		});

		test('foo.skill() should be 10', () => {
			expect(foo.skill).toBe(10);
		});
	});
});
