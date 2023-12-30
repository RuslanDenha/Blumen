'use client'

import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { ITicket } from '@/tsModels/ticket.models';
import TicketListCard from '@/components/TicketList/TicketListCard';

interface ITicketListProps {
  isAdmin?: boolean
  ticketList: ITicket[]
  loadTickets: () => void
}

const TicketList = ({ isAdmin = false, ticketList, loadTickets }: ITicketListProps) => {
  useEffect(() => {
    loadTickets();
  }, [])

  return (
    <Paper
      className="p-6 mt-6 bg-gray-50"
      variant="outlined"
    >
      {[...ticketList].reverse().map((ticket) => (
        <TicketListCard
          key={ticket._id}
          ticket={ticket}
          isAdmin={isAdmin}
          loadTickets={loadTickets}
        />
      ))}
    </Paper>
  );
};

export default TicketList;
