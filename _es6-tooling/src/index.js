export class Programmer {
  role = "developer";
  #experience;
  constructor(name, technology, experience) {
    this.name = name;
    this.technology = technology;
    this.#experience = experience;
  }
  develop() {
    console.log(
      `${this.name} develops software using ${this.technology} with ${
        this.#experience
      } years of experience`
    );
  }
  getExperience() {
    return this.#experience;
  }
}

const dev= new Programmer('Steven', 'JavaScript', 5);
dev.develop();
