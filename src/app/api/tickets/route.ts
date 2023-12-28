import { connectMongoDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import Ticket from '@/models/ticket';
import { ITicket } from '@/tsModels/ticket.models';

interface IRequest {
  json: () => Promise<ITicket>;
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
