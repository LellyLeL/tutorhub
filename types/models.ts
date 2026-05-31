export interface Lesson {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
}

export interface Review {
    id: string;
    lessonId: string;
    userId: string;
    rating: number;
    comment: string;
    createdAt: Date;
}