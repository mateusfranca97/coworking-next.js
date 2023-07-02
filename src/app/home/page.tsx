'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from '../components/button/Button'
import List from '../components/list/List'
import Count from '../components/count/Count'
import { statusOrder } from '../enum/statusOrder'
import Modal from '../components/modal/modal'

function HomeComponent() {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  const handleBack = (e: any) => {
    e.preventDefault()
    router.push('/login')
  }

  const options = ['Inicio', 'Lista de espera', 'Resumo']

  const listOptions = options.map((element, index) => (
    <Button key={index} text={element}></Button>
  ))

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
            {listOptions}
          </main>
          <footer className="flex items-end justify-center basis-1/5">
            <Button text="Sign out" onClick={handleBack}></Button>
          </footer>
        </aside>
        <main>
          <div className="flex items-center justify-start">
            <header className="flex py-10 ml-10 space-x-5">
              <Count text={statusOrder.TOTAL} />
              <Count text={statusOrder.PENDING} />
              <Count text={statusOrder.SCHEDULED} />
              <Count text={statusOrder.COMPLETED} />
            </header>
            <div className="flex justify-center w-full">
              <Button text={'Cadastrar Chamado'} onClick={openModal} />
            </div>
          </div>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
          <List></List>
        </main>
      </div>
    </>
  )
}

export default HomeComponent
