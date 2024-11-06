import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly prisma: PrismaService,
		private readonly configService: ConfigService,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configService.get<string>('JWT_SECRET'),
		});
	}

	async validate(payload: any) {
		if (!payload.id) {
			throw new UnauthorizedException('Payload does not contain id');
		}

		const admin = await this.prisma.admin.findUnique({
			where: { id: payload.id },
		});
		if (!admin) {
			throw new UnauthorizedException();
		}
		return admin;
	}

}
