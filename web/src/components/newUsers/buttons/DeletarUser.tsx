import axios from 'axios'
import { IdGetUsers } from '@/components/Types'

export const DeletarUser = ({ id, getUsers }: IdGetUsers) => {

  const AtualizarPag = () => {
    Deletar()
    getUsers()
  }

  const Deletar = async () => {
    try {
      await axios.delete(`http://localhost:3333/users/${id}`)
    } catch (erro) {
      console.error('Algo deu errado', erro)
    }
  }

  return (
    <button className="rounded bg-slate-600 px-2 py-1 text-white" onClick={AtualizarPag}>
      Deletar
    </button>
  )
}
