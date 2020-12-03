import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';


export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    massKg: number;

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
     }

     sumMass(items: Payload[]): number {
        let total = 0 
        for(let i =0; i < items.length; i++) {
            total += items[i].massKg;
        }
        return total;
     }

     currentMassKg(): number {
        let totalMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
        return totalMass;
     }

     canAdd(item: Payload): boolean {
         if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true; 
         } else {
             return false; 
         }
     }

     addCargo(cargo: Cargo): boolean {
        let check = this.canAdd(cargo) 
        if (check === true) {
            this.cargoItems.push(cargo)
            return true;
        } else {
            return false;
        }
     }

     addAstronaut(astronaut: Astronaut): boolean {
         let check1 = this.canAdd(astronaut)
         if (check1 === true) {
            this.astronauts.push(astronaut)
            return true;
        } else {
            return false;
        }  
    }

 }
