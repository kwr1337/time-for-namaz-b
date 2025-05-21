export async function logAction(prisma, userId: number, action: string, entity: string, entityId: number, oldValue: any, newValue: any) {
  await prisma.auditLog.create({
    data: { userId, action, entity, entityId, oldValue, newValue }
  });
} 