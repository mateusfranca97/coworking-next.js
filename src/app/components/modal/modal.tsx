import { Ticket } from "@/app/models/Ticket";
import { Dialog, Transition } from "@headlessui/react"
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

function Modal(){

    let [isOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false)
      }

      const ticketList: Ticket[] = []

      function createTicket(data: Ticket){
        data.chegada = new Date();
        ticketList.push(data)
        closeModal()
        console.log(ticketList)
      }

      const createTicketFormSchema = z.object({
        matricula: z.string()
        .nonempty("A matricula é obrigatória")
        .min(6, "Quantidade de caracteres inferior a 6.")
        .max(6, 'Quantidade de caracteres superior a 6.'),
        nome: z.string().nonempty("Nome é obrigatoria")
        .nonempty("O nome é obrigatorio."),
        ticket: z.string()
        .max(12, "Número do chamado superior ao padrão.")
        .min(12, "Número do chamado inferior ao padrão."),
      })

      type CreateTicketFormData = z.infer<typeof createTicketFormSchema>

      const { register, handleSubmit, formState:{ errors } } = useForm<CreateTicketFormData>({
          resolver: zodResolver(createTicketFormSchema),
      })

    return(
        <>
        <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
>
                    Cadastrar Ticket
                  </Dialog.Title>
                    <form action="" onSubmit={handleSubmit(createTicket)}>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="matricula">Matricula</label>
                            <input 
                                className="border" 
                                {...register('matricula')}
                                id="matricula"
                                type="text" 
                                autoComplete="off" 
                                />
                                {errors.matricula && <span>{errors.matricula.message}</span>}
                            <label htmlFor="matricula">Nome</label>
                            <input 
                                className="border" 
                                {...register('nome')}
                                type="text" 
                                id="nome"  
                                autoComplete="off" 
                                />
                                {errors.nome && <span>{errors.nome.message}</span>}
                            <label htmlFor="matricula">Ticket</label>
                            <input 
                                className="border" 
                                {...register('ticket')}
                                type="text" 
                                id="ticket"  
                                autoComplete="off" 
                                />
                                {errors.ticket && <span>{errors.ticket.message}</span>}
                        </div>

                        <div className="flex space-x-14 mt-4 justify-center">
                            <button
                                type="submit"
                                className="flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                >
                                Cadastrar
                            </button>
                            <button
                                type="button"
                                className="flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                                >
                                Limpar
                            </button>
                            <button
                                type="button"
                                className="flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                                >
                                Fechar
                            </button>
                        </div>
                    </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

        </>
    )
}
export default Modal