import Company from "./Company.ts";
import CustomMap from "./CustomMap";
import { loadLibraries } from "./libraries-loader.ts";
import User from "./User";

loadLibraries
  .then(() => {
    const map = new CustomMap("map");
    
    const user = new User();
    const company = new Company();

    map.addUserMarker(user);
    map.addCompanyMarker(company);
  })
  .catch((error) =>
    console.error(`Error loading libraries: ${(error as Error).message}`)
  );
