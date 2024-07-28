import { faker } from "@faker-js/faker"

export default class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.fullName()
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude(),
        }
    }
}
