import { Review } from "./models";

export interface Tutor {
    id: string;
    name: string;
    email: string;
    password: string;
    qualifications: string[];
    subjects: string[];
    experience: number;
    availability: string;
    location: string;
    price: number;
    reviews: Review[];
    rating: number;
    createdAt: Date;
    updatedAt: Date;
}