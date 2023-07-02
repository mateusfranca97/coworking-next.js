import { statusOrder } from '../enum/statusOrder'

export interface Ticket {
  chegada?: Date
  matricula?: string
  nome?: string
  ticket?: string
  status?: statusOrder
  saida?: Date
}
