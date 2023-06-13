'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { DeletarUser } from './buttons/DeletarUser'
import { UsersDB } from '../Types'

export const MostrarUsers = () => {
  const [users, setUsers] = useState<UsersDB[]>([])

  useEffect(() => {
    GetUsers()
  }, [])

  const GetUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3333/users')
      setUsers(response.data)
      // console.log(response.data[1]._id)
    } catch (erro) {
      console.error('Algo deu errado', erro)
    }
  }

  return (
    <div className="flex w-full flex-wrap bg-slate-200 px-5 py-5">
      {users.map((user, index) => (
        <div key={index} className="m-1 flex h-44 w-60 flex-col justify-between bg-slate-400 px-1 py-1">
          <div>
            <p>Nome: {user.nome}</p>
            <p>Email: {user.email}</p>
            <p>Telefone: {user.tel}</p>
            <p>CPF: {user.cpf}</p>
            <p>Endereço: {user.end}</p>
          </div>

          <div className="flex w-full justify-end space-x-5">
            <button>Atualizar</button>
            <DeletarUser id={user._id} />
          </div>
        </div>
      ))}
    </div>
  )
}
