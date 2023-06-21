import { statusOrder } from "@/app/enum/statusOrder";

interface StatusTicket{
    status: statusOrder;
}

function StatusTicket(props: StatusTicket) {
    if(props.status === statusOrder.COMPLETED) {
        return(
            <p className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</p>
        ) 
    }  else if (props.status === statusOrder.PENDING) {
        return (
            <div>
            <p className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Pending</p>
            </div>
        )
    } else if (props.status === statusOrder.SCHEDULED) {
        return (
            <div>
            <p className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Scheduled</p>
            </div>
        )
    }
    return null;
}

export default StatusTicket;
