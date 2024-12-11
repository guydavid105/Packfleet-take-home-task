import { StopModel } from "./StopModel";

export interface DriverModel {
    name: string;
    stops: StopModel[];
    milesLeft: number;
    shiftLength: string;
    SDH: number;
    ending: string;
}
