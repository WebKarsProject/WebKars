import { createContext, useContext, useState } from 'react'
import { IAxiosData, ICommentContext, IProviderProps, IRegisterComment } from '../../interface'
import { Instance } from '../../services/axios'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AuthContext } from '../Auth/AuthContext'

export const commentContext = createContext<ICommentContext>({} as ICommentContext)

const commentProvider = ({ children }: IProviderProps) => {
  const { setLoading } = useContext(AuthContext)
  const [comments, setComments] = useState<any>({})
  const [listComment, setListComment] = useState<boolean>(false)
  const [currentId, setCurrentId] = useState<string>('')

  const createComment = async (idVehicle: string, body: any) => {
    setLoading(true)
    setListComment(true)
    try {
      await Instance.post(`/vehicle/${idVehicle}/comment`, body)
      toast.success(`Comentário postado com sucesso!`)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData
        toast.error(`${data.message}❗❗`)
      }
    } finally {
      setLoading(false)
      setListComment(false)
    }
  }

  const getComment = async (id: string) => {
    setLoading(true)
    try {
      const response = await Instance.get(`/comment/${id}`)
      setComments((prevComments: any) => ({ ...prevComments, [id]: response }))
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData
        toast.error(`${data.message}❗❗`)
      }
    } finally {
      setLoading(false)
    }
  }

  const editComment = async (body: IRegisterComment) => {
    setLoading(true)
    try {
      const response = await Instance.patch(`/comment/${currentId}`, body)
      setListComment(!listComment)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData
        toast.error(`${data.message}❗❗`)
      }
    } finally {
      setLoading(false)
    }
  }

  const deleteComment = async (id:string) => {
    setLoading(true)
    try {
      await Instance.delete(`/comment/${id}`)
      setListComment(!listComment)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData
        toast.error(`${data.message}❗❗`)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <commentContext.Provider
      value={{
        createComment,
        getComment,
        comments,
        listComment,
        editComment,
        deleteComment,
        setCurrentId
      }}
    >
      {children}
    </commentContext.Provider>
  )
}

export default commentProvider
