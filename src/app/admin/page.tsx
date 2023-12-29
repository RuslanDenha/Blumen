'use client';

import React, { useState } from 'react'
import TicketList from '@/components/TicketList';
import {ITicket} from '@/tsModels/ticket.models';
import {getTicketList} from '@/components/TicketList/request';

export default function AdminHome() {
  const [ticketList, setTicketList] = useState<ITicket[]>([]);

  const loadTickets = async () => {
    getTicketList()
      .then((tickets = []) => {
        setTicketList(tickets);
      })
  }

  return (
    <div>
      <TicketList
        isAdmin
        ticketList={ticketList}
        loadTickets={loadTickets}
      />
    </div>
  )
}
