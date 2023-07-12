"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { useForm } from "react-hook-form"
import StatusTicket from "@/app/components/StatusTicket/StatusTicket"
import { StatusOrder } from "@/app/enum/statusOrder"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { initialListTicket } from "../../page"
import { Ticket } from "@/app/models/Ticket"

function EditTicket({params}: {params:{ id:number }}){
    const router = useRouter()

    const createTicketFormSchema = z.object({
        chegada: z.date(),
        matricula: z
        .string()
        .nonempty('A matricula é obrigatória')
        .min(6, 'Quantidade de caracteres inferior a 6.'),
        nome: z.string().nonempty('Nome é obrigatório'),
        ticket: z.string().min(12, 'Número do chamado inferior ao padrão.'),
        saida: z.date(),
        tratativa: z.string()
      })
    
      type CreateTicketFormData = z.infer<typeof createTicketFormSchema>
    
      const {
        register,
      } = useForm<CreateTicketFormData>({
        resolver: zodResolver(createTicketFormSchema),
      })

    const [listTicket, setListTicket] = useState(initialListTicket) 

    return(
      <>
      {params.id && (
        <div>
            <header className="h-16 w-screen flex items-center justify-between px-10 border-b-[1px] border-b-green-600">
                <h1 className="text-2xl">Editar Ticket</h1>
                <p onClick={() => router.push('/home')} className="flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">Voltar</p>
            </header>
            <main className="m-5 h-full flex justify-center">
                <form action="" className="flex flex-col">
                    <label htmlFor="chegada">Chegada</label>
                    <input
                        className="border mt-1 h-8 rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        {...register('chegada')}
                        id="matricula"
                        type="text"
                        autoComplete="off"
                        value={listTicket[params.id].chegada}
                      />
                    <label htmlFor="chegada">Matricula</label>
                    <input
                        className="border mt-1 pl-2 h-8 rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        {...register('matricula')}
                        id="matricula"
                        type="text"
                        autoComplete="off"
                        maxLength={6}
                        value={listTicket[params.id].matricula}
                      />
                    <label htmlFor="chegada">Nome</label>
                    <input
                        className="border mt-1 pl-2  h-8 rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        {...register('nome')}
                        id="matricula"
                        type="text"
                        autoComplete="off"
                        maxLength={6}
                        value={listTicket[params.id].nome}
                      />
                    <label htmlFor="chegada">Ticket</label>
                    <input
                        className="border mt-1 pl-2  h-8 rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        {...register('ticket')}
                        id="matricula"
                        type="text"
                        autoComplete="off"
                        maxLength={6}
                        value={listTicket[params.id].ticket}
                      />
                    <label htmlFor="chegada">Saida</label>
                    <input
                        className="border mt-1 pl-2  h-8 rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        {...register('saida')}
                        id="matricula"
                        type="text"
                        autoComplete="off"
                        maxLength={6}
                        value={listTicket[params.id].saida}
                      />
                    <label htmlFor="chegada">Status</label>
                    <div className="flex m-2 space-x-5">
                        <StatusTicket status={StatusOrder.COMPLETED}/>
                        <StatusTicket status={StatusOrder.PENDING}/>
                        <StatusTicket status={StatusOrder.SCHEDULED}/>
                    </div>
                    <label htmlFor="chegada">Tratativa</label>
                    <input
                        className="border mt-1 pl-2 h-8 rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        {...register('tratativa')}
                        id="tratativa"
                        type="text"
                        autoComplete="off"
                      />
                    <div className="flex m-5 justify-center">
                        <button
                            type="button"
                            className="flex w-full justify-center rounded-md border border-transparent bg-green-100 px-4 py-3 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        >
                            Atualizar
                        </button>
                    </div>
                </form>
            </main>
        </div>
         )}
      </>
    )
}

export default EditTicket