class Character {
	#isLive: boolean;

	constructor(public name: string, public family: string, public age: number) {
		this.name = name;
		this.family = family;
		this.age = age;
		this.#isLive = true;
	}
}


const king = new Character('Joffrey', 'Baratheon', 13);

console.log(king);
console.log('hola');
