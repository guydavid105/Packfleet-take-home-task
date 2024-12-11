import { DriverModel } from "../../../models/DriverModel";
import { StopModel } from "../../../models/StopModel";

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomName = (): string => {
  const names = ["John", "Jane", "Mike", "Alice", "Bob", "Charlie", "Emily", "Sophia", "David", "Lucas"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Rodriguez"];
  const firstName = names[getRandomInt(0, names.length - 1)];
  const lastName = lastNames[getRandomInt(0, lastNames.length - 1)];
  return `${firstName} ${lastName}`;
};

const generateRandomShopName = (): string => {
  const shopPrefixes = ["Green", "Blue", "Golden", "Happy", "Fast", "Silver", "Cozy", "Big", "Sunny", "Lucky"];
  const shopTypes = ["Grocers", "Bakery", "Hardware", "Pharmacy", "Deli", "Cafe", "Boutique", "Stationery", "Market", "Restaurant"];
  const randomPrefix = shopPrefixes[Math.floor(Math.random() * shopPrefixes.length)];
  const randomType = shopTypes[Math.floor(Math.random() * shopTypes.length)];
  return `${randomPrefix} ${randomType}`;
};

const getRandomAddress = (): string => {
  const streets = ["Main St", "Elm St", "Oak St", "Pine St", "Maple Ave", "Broadway"];
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const postcodes = [
    "EC1A 1BB", "W1A 0AX", "M1 1AE", "B33 8TH", "CR2 6XH", "DN55 1PT", "E1 6AN", "N1 9GU", "SE1 2SW", "SW1A 1AA",
    "W1D 3QF", "WC2N 5DU", "NW1 4RY", "E14 5AB", "N16 5SA", "SE10 9NF", "SW7 2AZ", "W2 1NW", "WC1E 6BT",
    "NW3 2QG", "E2 8AA", "N7 8LT", "SE5 8AF", "SW3 6RD", "W8 5TT", "WC1H 9EX", "NW5 1TL", "E3 5AA", "N19 5JT",
    "NW3 2QG", "E2 8AA", "N7 8LT", "SE5 8AF", "SW3 6RD", "W8 5TT", "WC1H 9EX", "NW5 1TL", "E3 5AA", "N19 5JT"];
  const street = streets[getRandomInt(0, streets.length - 1)];
  const city = cities[getRandomInt(0, cities.length - 1)];
  const postcode = postcodes[getRandomInt(0, postcodes.length - 1)];
  return `${getRandomInt(100, 9999)} ${street}, ${city}, ${postcode}`;
};

const getRandomStopTime = (): string => {
  return `${getRandomInt(5, 20)}m ${getRandomInt(0, 59)}s`;
};

const getRandomETA = (): string => {
  const hours = getRandomInt(0, 23);
  const minutes = getRandomInt(0, 59);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};

const getRandomTrackingPhrase = (): [string, string] => {
  const randomWords1 = [
    "umbrella", "giraffe", "piano", "mountain", "galaxy", "whisper", "cactus", "jazz", "ocean", "volcano",
    "robot", "butterfly", "telescope", "marathon", "sapphire", "labyrinth", "harmony", "quasar", "nebula", "paradox"
  ];
  const randomWords2 = [
    "phoenix", "serenade", "eclipse", "mirage", "cascade", "zenith", "rhapsody", "epiphany", "solstice", 
    "odyssey", "euphoria", "symphony", "kaleidoscope", "reverie", "twilight", "aurora", "blossom", "crescendo", 
    "enigma", "fable"
  ];
  return [randomWords1[getRandomInt(0, randomWords1.length - 1)], randomWords2[getRandomInt(0, randomWords2.length - 1)]];
};

const getRandomStatus = (): "completed" | "pending" | "missed" => {
  const statuses: ["completed", "pending", "missed"] = ["completed", "pending", "missed"];
  return statuses[getRandomInt(0, statuses.length - 1)];
};

const generateFakeStops = (count: number): StopModel[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: generateRandomShopName(),
    address: getRandomAddress(),
    timeSlot: `${getRandomInt(9, 17)}:00 - ${getRandomInt(9, 17)}:00`,
    stopTime: getRandomStopTime(),
    ETA: getRandomETA(),
    trackingPhrase: getRandomTrackingPhrase(),
    status: getRandomStatus(),
  }));
};

const generateFakeDrivers = (count: number): DriverModel[] => {
  return Array.from({ length: count }, () => ({
    name: getRandomName(),
    stops: generateFakeStops(getRandomInt(3, 10)), 
    milesLeft: parseFloat((Math.random() * 100).toFixed(2)), 
    shiftLength: `${getRandomInt(6, 10)}h ${getRandomInt(0, 59)}m`, 
    SDH: parseFloat((Math.random() * 1).toFixed(2)), 
    ending: getRandomETA(), 
  }));
};

export default generateFakeDrivers;
