import { Cartorio } from './Cartorio'
import { Usuario } from './Usuario'

export class Certidao {
    public id: number
    public nome: string
    public cartorio: Cartorio
    public usuario: Usuario
}