import { connectToDatabase } from '@/app/lib/db/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import { User } from '@/types/user';

export async function POST(request: NextRequest) {
 try {
 const { db } = await connectToDatabase();
 const body = await request.json();
 const { name, email, password, role } = body;
 if (!name || !email || !password || !role) {
 return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
 }
 const existingUser = await db.collection('users').findOne({ email });
 if (existingUser) {
 return NextResponse.json({ error: 'User already exists' }, { status: 409 });
 }
 const hashedPassword = await bcryptjs.hash(password, 10);
 const newUser: User = { name, email, password: hashedPassword, role, createdAt: new Date(), updatedAt: new Date(), };
 const result = await db.collection('users').insertOne(newUser);
 return NextResponse.json({ success: true, userId: result.insertedId }, { status: 201 });
 } catch (error) {
 console.error('Registration error:', error);
 return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
 }
}