import { StatusOrder } from '@/app/enum/statusOrder'
import React from 'react'

interface StatusTicketProps {
  status?: StatusOrder
}

function StatusTicket(props: StatusTicketProps) {
  if (props.status === StatusOrder.COMPLETED) {
    return (
      <p className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
        {StatusOrder.COMPLETED}
      </p>
    )
  } else if (props.status === StatusOrder.PENDING) {
    return (
      <p className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
        {StatusOrder.PENDING}
      </p>
    )
  } else if (props.status === StatusOrder.SCHEDULED) {
    return (
      <p className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs ">
        {StatusOrder.SCHEDULED}
      </p>
    )
  }
}

export default StatusTicket
