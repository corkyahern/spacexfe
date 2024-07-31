import { Launch } from "./launch";

export class Rocket {
    constructor(
        public id: number,
        public name: string,
        public weightInPounds: number,
        public launches: Launch[]
    ){}
}
