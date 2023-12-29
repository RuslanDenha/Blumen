export enum TICKET_STATUS {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
}

export interface ITicketDraft {
  name: string;
  email: string;
  description: string;
  status: TICKET_STATUS;
}

export interface ITicket {
  _id: string;
  name: string;
  email: string;
  description: string;
  status: TICKET_STATUS;
}
