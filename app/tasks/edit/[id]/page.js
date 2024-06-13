import editeTaskAction from '@/actions/editTaskAction'
import getSingleTaskAction from '@/actions/getSingleTaskAction'
import Link from 'next/link'

export default async function EditTaskPage({ params }) {
  const task = await getSingleTaskAction(params.id)
  const id = params.id
  console.log(task.completed)
  return (
    <div className=''>
      <button className='bg-green-300'>
        <Link href={'/tasks'}>Back ot tasks</Link>
      </button>
      <form action={editeTaskAction}>
        <div className=''>
          <label htmlFor=''>Edit Taskask</label>
        </div>
        <div className=''>
          <input type='hidden' name='id' value={id} />
          <input type='text' name='content' defaultValue={task.content} />
          <input
            type='checkbox'
            name='completed'
            defaultChecked={task.completed}
          />
        </div>
        <button>Edit</button>
      </form>
    </div>
  )
}
