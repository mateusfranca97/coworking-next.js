import { useEffect, useState } from 'react'
import { listTicket } from '../list/List'
import { statusOrder } from '@/app/enum/statusOrder'

interface countProps {
  amount?: number
  text: string
}

function Count(props: countProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let filteredCount = 0
    switch (props.text) {
      case statusOrder.PENDING:
        filteredCount = listTicket.filter(
          (ticket) => ticket.status === statusOrder.PENDING,
        ).length
        console.log('PENDING:', filteredCount)
        break
      case statusOrder.SCHEDULED:
        filteredCount = listTicket.filter(
          (ticket) => ticket.status === statusOrder.SCHEDULED,
        ).length
        console.log('SCHEDULED:', filteredCount)
        break
      case statusOrder.COMPLETED:
        filteredCount = listTicket.filter(
          (ticket) => ticket.status === statusOrder.COMPLETED,
        ).length
        console.log('COMPLETED:', filteredCount)
        break
      default:
        filteredCount = listTicket.length
        console.log('TOTAL:', filteredCount)
        break
    }
    setCount(filteredCount)
  }, [props.amount, props.text])

  return (
    <div className="w-40 h-20 bg-slate-600 rounded text-white p-3 space-y-2">
      <p className="text-lg">{count}</p>
      <p className="text-xs">{props.text}</p>
    </div>
  )
}

export default Count
