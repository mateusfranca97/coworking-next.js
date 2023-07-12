import { StatusOrder } from '../enum/statusOrder'

export interface Ticket {
  chegada?: Date
  matricula?: string
  nome?: string
  operacao?: string
  ticket?: string
  status?: StatusOrder
  saida?: Date
  tratativa?: string
}
