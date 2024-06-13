'use client'

import deleteTaskAction from '@/actions/deleteTaskAction'
import { useEffect } from 'react'
import { useFormStatus, useFormState } from 'react-dom'
import toast from 'react-hot-toast'

const DeleteButton = () => {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending}>{pending ? 'DELETING...' : 'DELETE'}</button>
  )
}

const initialState = {
  message: null,
  messageDescription: null,
}

export default function DeleteForm({ id }) {
  // console.log(id)

  // const handleDelete = async (e) => {
  //   e.preventDefault()
  //   await deleteTaskAction(id)
  // }

  const [state, formAction] = useFormState(deleteTaskAction, initialState)

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('There was an error')
      return
    }

    if (state.message === 'success') {
      toast.success('Succesfully Deleted')
      return
    }
  }, [state])

  return (
    <form action={formAction} className='bg-red-500'>
      {/* <form action={() => deleteTaskAction(id)}> */}
      {/* second approch/}
      {/* <input type='hidden' name='id' value={id} /> */}
      <input type='hidden' name='id' value={id} />
      <DeleteButton />
    </form>

    //diferent approach (3rd approach)
    // <form onSubmit={handleDelete}>
    //   <input type='hidden' name='id' value={id} />
    //   <button className='bg-red-500 p-1'>DELETE</button>
    // </form>
  )
}
