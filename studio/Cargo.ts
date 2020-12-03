import { Payload } from './Payload';


export class Cargo implements Payload {
    massKg: number;
    materials: string;


    constructor(massKg: number, materials: string) {
        this.massKg = massKg;
        this.materials = materials;
     }
 }
