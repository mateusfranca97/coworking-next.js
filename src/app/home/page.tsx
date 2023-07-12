'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { StatusOrder } from '../enum/statusOrder'
import Button from '../components/button/Button'
import List from '../components/list/List'
import Count from '../components/count/Count'
import Modal from '../components/modal/modal'
import { Ticket } from '@/app/models/Ticket'

export let initialListTicket: Ticket[] = [
  {
    chegada: new Date(),
    matricula: '331276',
    nome: 'Mateus Gomes de França',
    operacao: 'ALELO',
    ticket: 'TKT-00651234',
    saida: new Date(),
    status: StatusOrder.COMPLETED,
  },
  {
    chegada: new Date(),
    matricula: '331502',
    nome: 'Maria Vitoria Antonino de França',
    operacao: 'BRADESCO',
    ticket: 'TKT-00651235',
    saida: new Date(),
    status: StatusOrder.PENDING,
  },
  {
    chegada: new Date(),
    matricula: '331853',
    nome: 'Joao Victor Gomes de França',
    operacao: 'NET',
    ticket: 'TKT-00651236',
    saida: new Date(),
    status: StatusOrder.SCHEDULED,
  },
]

// se for uma constante e não for mudar pode colocar fora do componente
const options = ['Inicio', 'Calendario'] as const

function HomeComponent() {

  // se vc precisa que sua lista seja usada em vários lugares, vc pode colocar ela no componente pai
  // e passar ela como props para os componentes filhos, ou vc pode usar o context api, nesse caso usei
  // a primeira estratégia
  const [listTicket, setListTicket] = useState<Ticket[]>(initialListTicket)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const openModal = () => setIsOpen(true)

  const handleBack = () => router.push('/login')

  const getCount = (status: StatusOrder) => {
    return listTicket.filter((ticket) => ticket.status === status).length
  }

  const getTotal = () => {
    return listTicket.length
  }

  const onDeleteTicket = (index: number) => {
    setListTicket((prevList) => prevList.filter((_, i) => i !== index))
  }

  return (
    <>
      <div className="flex flex-row">
        <aside className="flex flex-col w-64 h-screen bg-slate-100">
          <header className="basis-1/5 flex items-center justify-center">
            <h1 className="text-2xl font-semibold">
              <span className="text-green-600">co</span>Working
            </h1>
          </header>
          <main className="flex flex-col items-center basis-96">
            {options.map((element, index) => (
              <Button key={index} text={element} />
            ))}
          </main>
          <footer className="flex items-end justify-center basis-1/5">
            <Button text="Sign out" onClick={handleBack}></Button>
          </footer>
        </aside>
        <main>
          <div className="flex items-center justify-start">
            <header className="flex py-10 ml-10 space-x-5">
              <Count
                text={StatusOrder.TOTAL}
                count={getTotal()}
              />
              <Count
                text={StatusOrder.PENDING}
                count={getCount(StatusOrder.PENDING)}
              />
              <Count
                text={StatusOrder.SCHEDULED}
                count={getCount(StatusOrder.SCHEDULED)}
              />
              <Count
                text={StatusOrder.COMPLETED}
                count={getCount(StatusOrder.COMPLETED)}
              />
            </header>
            <div className="flex justify-center w-full">
              <Button text={'Cadastrar Chamado'} onClick={openModal} />
            </div>
          </div>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
          <List listTicket={listTicket} onDeleteTicket={onDeleteTicket}/>
        </main>
      </div>
    </>
  )
}

export default HomeComponent
