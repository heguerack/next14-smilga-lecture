'use server'

import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'

export default async function createTaskAction(formData) {
  console.log(formData)
  const content = formData.get('content')
  console.log(content)
  await prisma.task.create({
    data: {
      content,
    },
  })
  revalidatePath('/tasks')
}
