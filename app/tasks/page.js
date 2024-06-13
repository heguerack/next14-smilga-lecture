// import TaskForm from '@/components/TaskForm'
import TaskFormCustom from '@/components/TaskFormCustom'
import TaskList from '@/components/TaskList'
export const dynamic = 'force-dynamic'

export default function TasksPage() {
  return (
    // <div className='w-[24rem]'>
    <div className='max-w-lg'>
      {/* <TaskForm /> */}
      <TaskFormCustom />
      <TaskList />
    </div>
  )
}
