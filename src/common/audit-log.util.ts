export async function logAction(prisma, userId: number, action: string, entity: string, entityId: number, oldValue: any, newValue: any) {
  try {
    await prisma.auditLog.create({
      data: { userId, action, entity, entityId, oldValue, newValue }
    });
  } catch (error) {
    // Логируем ошибку, но не прерываем выполнение
    console.error('Error creating audit log:', error);
    // Если это ошибка уникального ограничения, просто пропускаем
    if (error.code === 'P2002') {
      console.warn('Audit log entry already exists, skipping...');
      return;
    }
    // Для других ошибок пробрасываем дальше
    throw error;
  }
} 