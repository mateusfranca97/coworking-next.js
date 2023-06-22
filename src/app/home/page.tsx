"use client";

import { useRouter } from "next/navigation";
import { Dialog, Transition } from '@headlessui/react'
import Button from "../components/button/Button";
import List from "../components/list/List";
import { FormEvent, Fragment, useState } from "react";
import { Ticket } from "../models/Ticket";

function HomeComponent(){
    const router = useRouter();

    let [isOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false)
      }
    
    function openModal() {
        setIsOpen(true)
    }

    function clearModal() {
        
    }



    const handleBack = (e: any) => {
        e.preventDefault();
        router.push('/login')
    }

    const options = [
        'Inicio',
        'Lista de espera' 
    ]

    let [matricula, setMatricula] = useState('');
    let [nome, setNome] = useState('');
    let [ticket, setTicket] = useState('');

    let listOrder: Ticket[] = []

    const handleCadastrar = (e: any) => {
        e.preventDefault();
        let ticket: Ticket = {chegada: new Date()}
        console.log(ticket);
    }

    const listOptions = options.map((element,index)=> <Button key={index} text={element}></Button>)

    return (
        <>
        <div className="flex flex-row">

            <aside className="flex flex-col w-60 h-screen bg-slate-100">
                <header className="basis-1/5 flex items-center justify-center">
                <h1 className="text-2xl font-semibold"><span className="text-green-600">co</span>Working</h1>
                </header>
                <main className="flex flex-col items-center basis-96">
                {listOptions}
                </main>
                <footer className="flex items-end justify-center basis-1/5">
                    <Button text="Sign out" onClick={handleBack}></Button>
                </footer>
            </aside>
            <main>
            <div className="flex items-center justify-center">
                <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                Cadastrar um Ticket
                </button>
            </div>

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
                    <form action="" onSubmit={handleCadastrar}>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="matricula">Matricula</label>
                            <input 
                                onChange={(e)=> setMatricula((e.target.value))}
                                className="border" 
                                name="matricula" 
                                id="matricula" 
                                type="text" 
                                autoComplete="off" 
                                required/>
                            <label htmlFor="matricula">Nome</label>
                            <input 
                                onChange={(e)=> setNome((e.target.value))}
                                className="border" 
                                name="nome" 
                                type="text" 
                                id="nome"  
                                autoComplete="off" 
                                required/>
                            <label htmlFor="matricula">Ticket</label>
                            <input 
                                onChange={(e)=> setTicket((e.target.value))}
                                className="border" 
                                name="ticket" 
                                type="text" 
                                id="ticket"  
                                autoComplete="off" 
                                required/>
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
                <List></List>
            </main>
        </div>
        </>
    )
    
}

export default HomeComponent