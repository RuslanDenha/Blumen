'use client';

import React, { useState } from 'react'
import TicketRequestForm from '@/components/TicketRequestForm/TicketRequestForm'
import TicketList from '@/components/TicketList';
import {ITicket} from '@/tsModels/ticket.models';
import {getTicketList} from '@/components/TicketList/request';

export default function Home() {
  const [ticketList, setTicketList] = useState<ITicket[]>([]);

  const loadTickets = async () => {
    getTicketList()
      .then((tickets = []) => {
        setTicketList(tickets);
      })
  }

  return (
    <div>
      <TicketRequestForm
        loadTickets={loadTickets}
      />
      <TicketList
        ticketList={ticketList}
        loadTickets={loadTickets}
      />
    </div>
  )
}
