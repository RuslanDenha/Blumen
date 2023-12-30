export enum TICKET_STATUS {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
}

export const ticketStatusLabels = {
  [TICKET_STATUS.NEW]: 'New',
  [TICKET_STATUS.IN_PROGRESS]: 'In progress',
  [TICKET_STATUS.RESOLVED]: 'Resolved',
};

export const ticketStatusOptions = [
  {
    value: TICKET_STATUS.NEW,
    label: ticketStatusLabels[TICKET_STATUS.NEW],
  },
  {
    value: TICKET_STATUS.IN_PROGRESS,
    label: ticketStatusLabels[TICKET_STATUS.IN_PROGRESS],
  },
  {
    value: TICKET_STATUS.RESOLVED,
    label: ticketStatusLabels[TICKET_STATUS.RESOLVED],
  },
]

export interface ITicketDraft {
  name: string;
  email: string;
  description: string;
  status: TICKET_STATUS;
  answer?: string;
}

export interface ITicket extends ITicketDraft{
  _id: string;
}
