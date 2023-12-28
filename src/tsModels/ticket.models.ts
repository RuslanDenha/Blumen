export enum TICKET_STATUS {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
}

export interface ITicket {
  name: string;
  email: string;
  description: string;
  status: TICKET_STATUS;
}
