import axios from "axios";
import { ITicket, ITicketDraft } from '@/tsModels/ticket.models';


export const getTicketById = async (id: string): Promise<ITicket | undefined> => {
  try {
    const res = await axios.get<ITicket>(`/api/tickets/${id}`);

    if (res.status !== 200) {
      throw new Error("Failed to fetch ticket");
    }

    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export const editTicketById = async (id: string, ticket: ITicketDraft) => {
try {
    const res = await axios.put(`/api/tickets/${id}`, ticket);

    if (res.status !== 200) {
      throw new Error("Failed to edit ticket");
    }

    return res.data;
  } catch (err) {
    console.log(err);
  }
}
