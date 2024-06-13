'use client'

import createTaskActionCustom from '@/actions/createTaskActionCustom'
import { useEffect, useState } from 'react'
import { useFormStatus, useFormState } from 'react-dom'
import toast from 'react-hot-toast'

const SubmitBtn = () => {
  const { pending } = useFormStatus()
  console.log(useFormStatus())
  console.log(pending)
  return (
    <button className='btn btn-primary join-item ' disabled={pending}>
      {pending ? 'Please wait .. ' : 'Create Task'}
    </button>
  )
}

const initialState = {
  message: null,
  messageDescription: null,
}

export default function TaskFormCustom() {
  const [state, formAction] = useFormState(createTaskActionCustom, initialState)
  const [task, setTask] = useState('')

  useEffect(() => {
    if (state.message === 'error') {
      // toast.error(state.erorrDescription)
      toast.error('There was an error')
      return
    }

    if (state.message === 'success') {
      toast.success('Succesfully Created')
      setTask('')
      return
    }
  }, [state])

  return (
    // <form action={createTaskActionCustom} className='join  w-full'>
    <form action={formAction} className=''>
      {state.message === 'error' ? (
        <p className='mb-2 text-red-700'>{state.messageDescription}</p>
      ) : null}
      <div className='join  w-full'>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Enter Task'
          className='input  input-bordered join-item w-full'
          name='content'
          type='rext'
          required
        />
        <SubmitBtn />
      </div>
    </form>
  )
}
