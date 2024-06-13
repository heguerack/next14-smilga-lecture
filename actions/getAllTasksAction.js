'use server'

import prisma from '@/utils/db'

export default async function getAllTasksAction() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  // console.log(tasks)
  return tasks
}
