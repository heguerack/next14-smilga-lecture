'use server'
import { z } from 'zod'

import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'

// export default async function createTaskAction(formData) {
export default async function createTaskAction(prevState, formData) {
  // console.log(formData)
  await new Promise((resolve) => setTimeout(resolve, 200))

  const content = formData.get('content')
  console.log(content)

  // const Task = z.object({
  //   content: z.string().min(5),
  // })

  try {
    // Task.parse({ content })
    z.object({
      content: z.string().min(5),
    }).parse({ content })
    await prisma.task.create({
      data: {
        content,
      },
    })
    revalidatePath('/tasks')
    return {
      message: 'success',
      messageDescription: 'Evrything went like so smooth!',
    }
  } catch (error) {
    // we shoudnt try to return the actual error, it seems like a bug, or error situation if we do
    return {
      message: 'error',
      messageDescription: 'Must be more than 5 characters',
    }
  }
}
