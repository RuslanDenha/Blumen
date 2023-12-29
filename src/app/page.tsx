import React from 'react'
import TicketRequestForm from '@/components/TicketRequestForm/TicketRequestForm'
import TicketList from '@/components/TicketList';

export default function Home() {
  return (
    <div>
      <TicketRequestForm />
      <TicketList />
    </div>
  )
}
