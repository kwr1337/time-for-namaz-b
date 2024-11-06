import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import * as express from 'express';
import { AppModule } from './app.module'
import { join } from 'path';
async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors({
		origin: ['http://localhost:3000'],
		credentials: true,
		exposedHeaders: 'set-cookie'
	})
	app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
	await app.listen(4400)
}

bootstrap()
