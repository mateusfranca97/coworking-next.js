import { Ticket } from '@/app/models/Ticket'
import StatusTicket from '../StatusTicket/StatusTicket'
import { useRouter } from 'next/navigation'

type ListProps = {
  listTicket: Ticket[]
  onDeleteTicket: (index: number) => void
}

function List({ listTicket, onDeleteTicket  }: ListProps) {

  const router = useRouter()
  
  const onEditTicket = (ticket: number) => (
    router.push(`/home/ticket/${ticket}`)
  )


  return (
    <div className="w-[83vw]">
      <div className="flex font-sans overflow-hidden">
        <div className="w-full m-5">
          <div className="bg-white shadow-md rounded my-6">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-center">Chegada</th>
                  <th className="py-3 px-6 text-center">Matricula</th>
                  <th className="py-3 px-6 text-center">Nome</th>
                  <th className="py-3 px-6 text-center">Operação</th>
                  <th className="py-3 px-6 text-center">Ticket</th>
                  <th className="py-3 px-6 text-center">Saida</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center"></th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {listTicket.map((ticket, index) => (
                  <tr
                    className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
                    key={index}
                  >
                    <td className="py-3 px-6 text-left">
                      <p className="text-xs">
                        {ticket.chegada?.toLocaleDateString()}
                      </p>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <p className="text-xs">{ticket.matricula}</p>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <p className="text-xs">{ticket.nome}</p>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <p className="text-xs">{ticket.operacao}</p>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="text-xs">{ticket.ticket}</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="text-xs">
                        {ticket.saida?.toLocaleDateString()}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <StatusTicket
                        key={index}
                        status={ticket.status}
                      ></StatusTicket>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="w-4 mr-2 transform hover:text-green-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        <div className="w-4 mr-2 transform hover:text-green-500 hover:scale-110"
                        onClick={() => onEditTicket(index)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                        <div
                          className="w-4 mr-2 transform hover:text-green-500 hover:scale-110"
                          onClick={() => onDeleteTicket(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
