export default async function getSingleTaskAction(id) {
  const task = await prisma.task.findUnique({
    where: {
      // id: parseInt(id), // Convert id to an integer
      id,
    },
  })
  return task
}
