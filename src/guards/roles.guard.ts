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
		console.log('RolesGuard - Required roles:', requiredRoles);
		console.log('RolesGuard - User:', user);
		console.log('RolesGuard - User role:', user?.role);
		if (!user || !requiredRoles.includes(user.role)) {
			console.log('RolesGuard - Access denied');
			throw new UnauthorizedException('You do not have the required permissions');
		}
		console.log('RolesGuard - Access granted');
		return true;
	}
}
