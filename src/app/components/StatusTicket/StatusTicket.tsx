import { StatusOrder } from '@/app/enum/statusOrder'
import React from 'react'

interface StatusTicketProps {
  status?: StatusOrder
  hasActions?: boolean
}

function StatusTicket({status, hasActions}: StatusTicketProps) {

  if (status === StatusOrder.COMPLETED) {
    return (
      <p className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs cursor-pointer selection:text-white">
        {StatusOrder.COMPLETED}
      </p>
    )
  } else if (status === StatusOrder.PENDING) {
    return (
      <p className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs cursor-pointer">
        {StatusOrder.PENDING}
      </p>
    )
  } else if (status === StatusOrder.SCHEDULED) {
    return (
      <p className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs cursor-pointer">
        {StatusOrder.SCHEDULED}
      </p>
    )
  }
}

export default StatusTicket
