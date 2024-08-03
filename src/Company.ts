import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export default class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
  content(): string {
    return `
        <div>
            <h2>${this.name}</h2>
            <h4>${this.catchPhrase}</h4>
        </div>
    `;
  }
}
