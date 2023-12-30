import { ITicketDraft } from '@/tsModels/ticket.models';

export interface IRequest {
  json: () => Promise<ITicketDraft>;
  nextUrl: {
    searchParams: {
      get: (param: string) => string;
    }
  }
}
