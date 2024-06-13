'use server'
import { z } from 'zod'

import { revalidatePath } from 'next/cache'

export default async function deleteTaskAction(prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // console.log(id)
  // const id = formData.get('id')

  const id = formData.get('id')

  try {
    // z.object({
    //   content: z.string().min(5),
    // }).parse({ content })
    await prisma.task.delete({
      where: { id },
    })
    revalidatePath('/tasks')
    return {
      message: 'success',
      messageDescription: 'Evrything went like so smooth!',
    }
  } catch (error) {
    return {
      message: 'error',
      messageDescription: 'Must be more than 5 characters',
    }
  }
}
