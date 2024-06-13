import createTaskAction from '@/actions/createTaskAction'

export default function TaskForm() {
  return (
    <form action={createTaskAction} className='join  w-full'>
      <input
        placeholder='Enter Task'
        className='input  input-bordered join-item w-full'
        name='content'
        type='rext'
        required
      />
      <button className='btn btn-primary join-item'>Create Task</button>
    </form>
  )
}
