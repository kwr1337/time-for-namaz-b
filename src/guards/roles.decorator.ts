import { SetMetadata } from '@nestjs/common';
import { $Enums } from '../../prisma/generated/client'
import Role = $Enums.Role

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
