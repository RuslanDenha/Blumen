import axios from "axios";
import { ITicket } from '@/tsModels/ticket.models';

type ticketsPromise = { tickets: ITicket[] }

export const getTicketList = async (): Promise< ITicket[] | undefined> => {
  try {
    const res = await axios.get<ticketsPromise>("/api/tickets");

    if (res.status !== 200) {
      throw new Error("Failed to load list of tickets");
    }

    return res.data.tickets
  } catch (error) {
    console.log(error);
  }
}

export const deleteTicket = async (id: string) => {
  try {
    const res = await axios.delete(`/api/tickets?id=${id}`);

    if (res.status !== 200) {
      throw new Error("Failed to delete a ticket");
    }
  } catch (error) {
    console.log(error);
  }
}
