'use client'

import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { getTicketList } from '@/components/TicketList/request';
import { ITicket } from '@/tsModels/ticket.models';


const TicketList = () => {
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
        <Card
          key={ticket._id}
          className="p-6 mt-6"
        >
          <CardHeader
            title={ticket.name}
            subheader={ticket.status}
          />

          <CardContent>
            <Typography paragraph>{ticket.email}</Typography>
            <Typography paragraph>{ticket.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
};

export default TicketList;
