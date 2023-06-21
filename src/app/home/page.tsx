"use client";

import { useRouter } from "next/navigation";
import { Dialog, Transition } from '@headlessui/react'
import Button from "../components/button/Button";
import List from "../components/list/List";
import { Fragment, useState } from "react";

function HomeComponent(){
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }

    const router = useRouter();

    const handleBack = (e: any) => {
        e.preventDefault();
        router.push('/login')
    }

    const options = [
        'Inicio',
        'Lista de espera' 
    ]

    const listOptions = options.map((element)=> <Button text={element}></Button>)

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
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
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