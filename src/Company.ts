import { faker } from "@faker-js/faker"

export default class Company {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    
    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude(),
        }
    }
}