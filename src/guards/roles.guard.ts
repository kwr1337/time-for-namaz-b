import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { $Enums } from '../../prisma/generated/client'
import Role = $Enums.Role

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
			context.getHandler(),
			context.getClass(),
		]);
		if (!requiredRoles) {
			return true;
		}
		const request = context.switchToHttp().getRequest();
		const user = request.user;
		if (!user || !requiredRoles.includes(user.role)) {
			throw new UnauthorizedException('You do not have the required permissions');
		}
		return true;
	}
}