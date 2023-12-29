'use client'

import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { getTicketList } from '@/components/TicketList/request';
import { ITicket } from '@/tsModels/ticket.models';
import TicketListCard from '@/components/TicketList/TicketListCard';

interface ITicketListProps {
  isAdmin: boolean
}

const TicketList = ({ isAdmin = false }: ITicketListProps) => {
  const [ticketList, setTicketList] = useState<ITicket[]>([]);


  useEffect(() => {
    getTicketList()
      .then((tickets = []) => {
        setTicketList(tickets);
      })
  }, [])

  return (
    <Paper
      className="p-6 mt-6 bg-gray-50"
      variant="outlined"
    >
      {ticketList.map((ticket) => (
        <TicketListCard
          key={ticket._id}
          ticket={ticket}
          isAdmin={isAdmin}
        />
      ))}
    </Paper>
  );
};

export default TicketList;
