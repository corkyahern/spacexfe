import { Rocket } from "./rocket";

export class Launch {
    constructor(
        public id: number,
        public date: Date,
        public success: boolean,
        public rocket: Rocket
    ){}
}
