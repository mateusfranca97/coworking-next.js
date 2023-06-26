"use client";

import { useRouter } from "next/navigation";
import {  useState } from "react";
import Button from "../components/button/Button";
import List from "../components/list/List";
import Modal from "../components/modal/Modal";

function HomeComponent(){
    const router = useRouter();
    const modal = Modal
    
    let [isOpen, setIsOpen] = useState(true);

    function openModal() {
        setIsOpen(true)
    }

    const handleBack = (e: any) => {
        e.preventDefault();
        router.push('/login')
    }

    const options = [
        'Inicio',
        'Lista de espera' 
    ]

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
                className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                Cadastrar um Ticket
                </button>
            </div>
            <Modal></Modal>
            <List></List>
            </main>
        </div>
        </>
    )
    
}

export default HomeComponent