'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
// import { redirect } from 'next/dist/server/api-utils'

export default async function editeTaskAction(formData) {
  const id = formData.get('id')
  const content = formData.get('content')
  const completed = formData.get('completed')

  console.log(completed)
  await prisma.task.update({
    where: { id },
    data: {
      content,
      completed: completed === 'on' ? true : false,
    },
  })
  revalidatePath('/tasks')
  redirect('/tasks')
}
