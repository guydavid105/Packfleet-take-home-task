export interface StopModel {
    id: number;
    title: string;
    address: string;
    timeSlot: string;
    stopTime: string;
    ETA: string;
    trackingPhrase: [string, string];
    status: "completed" | "pending" | "missed";
}
