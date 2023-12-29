import React from 'react'
import TicketList from '@/components/TicketList';

export default function AdminHome() {
  return (
    <div>
      <TicketList isAdmin />
    </div>
  )
}
