import { statusOrder } from '@/app/enum/statusOrder'
import React from 'react'

interface StatusTicketProps {
  status?: statusOrder
}

function StatusTicket(props: StatusTicketProps) {
  if (props.status === statusOrder.COMPLETED) {
    return (
      <p className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
        {statusOrder.COMPLETED}
      </p>
    )
  } else if (props.status === statusOrder.PENDING) {
    return (
      <p className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
        {statusOrder.PENDING}
      </p>
    )
  } else if (props.status === statusOrder.SCHEDULED) {
    return (
      <p className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs ">
        {statusOrder.SCHEDULED}
      </p>
    )
  }
}

export default StatusTicket
