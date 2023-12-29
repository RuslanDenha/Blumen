import { connectMongoDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import Ticket from '@/models/ticket';
import { ITicketDraft } from '@/tsModels/ticket.models';

interface IRequest {
  json: () => Promise<ITicketDraft>;
}

export async function POST(request: IRequest)  {
  const { name, description, email, status } = await request.json();

  await connectMongoDB();
  await Ticket.create({ name, description, email, status });

  return NextResponse.json(
    { message: 'Ticket created' },
    { status: 201 },
  )
}

export async function GET() {
  await connectMongoDB();
  const tickets = await Ticket.find();
  return NextResponse.json({ tickets });
}
