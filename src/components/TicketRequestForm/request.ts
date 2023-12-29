import axios from "axios";
import { ITicketDraft } from '@/tsModels/ticket.models';

export const postTicket = async (ticket: ITicketDraft) => {
  try {
    const res = await axios.post("/api/tickets", ticket);

    if (res.status !== 201) {
      throw new Error("Failed to create a ticket");
    }
  } catch (error) {
    console.log(error);
  }
}
