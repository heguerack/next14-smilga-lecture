import Link from 'next/link'
// import DeleteForm from '@/components/DeleteForm'
import getAllTasksAction from '@/actions/getAllTasksAction'

export default async function TaskList() {
  const tasks = await getAllTasksAction()
  if (tasks.length === 0) return <h2>No Tasks to show at this time!</h2>

  return (
    <div className='flex flex-col gap-4 mt-8 '>
      {tasks.map((task, i) => (
        <div
          className=' flex bg-white p-2 justify-between items-center'
          key={task.id}>
          <div className={task.completed === true ? 'line-through' : ''}>
            {' '}
            {task.content}
          </div>
          <div className='flex gap-2'>
            <Link href={`/tasks/edit/${task.id}`} className='bg-green-400 p-1'>
              EDIT
            </Link>
            {/* <DeleteForm id={task.id} /> */}
            {/* <DeleteForm id={task.id} /> */}
          </div>
        </div>
      ))}
    </div>
  )
}
