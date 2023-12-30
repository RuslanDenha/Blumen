import connectMongoDB from "@/libs/mongodb";
import Ticket from '@/models/ticket';
import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

interface IParams {
  params: {
    id: string;
  }
}

export async function PUT(request: NextRequest, { params }: IParams) {
  const { id } = params;
  const { name, description, email, status, answer } = await request.json();

  await connectMongoDB();
  await Ticket.findByIdAndUpdate(id,  { name, description, email, status, answer });
  return NextResponse.json({ message: "Ticket updated" }, { status: 200 });
}

export async function GET(_: NextRequest, { params }: IParams) {
  const { id } = params;
  await connectMongoDB();
  const ticket = await Ticket.findOne({ _id: id });
  return NextResponse.json(ticket, { status: 200 });
}
