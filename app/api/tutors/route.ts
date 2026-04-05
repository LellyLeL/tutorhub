import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ tutors: [{ name: "Souvik", subject: "Math" }, { name: "Vikas", subject: "Science" }] });
}   