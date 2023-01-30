export class Character {
	alive;
	constructor(public name: string, public family: string, public age: number) {
		this.name = name;
		this.family = family;
		this.age = age;
		this.alive = true;
	}

	die() {
		this.alive = false;
	}
}


export class King extends Character {
	constructor(name: string, family: string, age: number, public reign: number) {
		super(name, family, age);
		this.reign = reign;
	}

	greetings(): string {
		return 'Vais a morir todos';
	}
}



export class Fighter extends Character {
	constructor(
		name: string,
		family: string,
		age: number,
		public weapon: string,
		public skill: number,
	) {
		super(name, family, age);
		this.weapon = weapon;
		this.skill = skill;
	}

	greetings(): string {
		return 'Primero pego y luego pregunto';
	}
}
