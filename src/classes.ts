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
		public skill: number
	) {
		super(name, family, age);
		this.weapon = weapon;
		this.skill = skill;
	}

	greetings(): string {
		return 'Primero pego y luego pregunto';
	}
}

export class Advisor extends Character {
	constructor(
		name: string,
		family: string,
		age: number,
		public advising: string
	) {
		super(name, family, age);
		this.advising = advising;
	}

	greetings(): string {
		return 'No sé por qué, pero creo que voy a morir pronto';
	}
}

export class Squire extends Character {
	serving;
	constructor(name: string, family: string, age: number, public grade: number) {
		super(name, family, age);
		this.serving = 'fighter';
		this.grade = grade;
	}

	greetings(): string {
		return 'Soy un loser';
	}
}
