import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import * as express from 'express'
import { AppModule } from './app.module'
import { join } from 'path'
import { ValidationPipe } from '@nestjs/common'
import * as fs from 'fs'

// Импорт Swagger модулей
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
	console.log('Запуск приложения...');
	const app = await NestFactory.create(AppModule, {
		logger: ['error', 'warn', 'log', 'debug', 'verbose'],
	})

	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors({
		origin: true,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
		credentials: true,
	})
	app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))

	// Включаем валидацию
	app.useGlobalPipes(new ValidationPipe())

	// Конфигурация Swagger
	const config = new DocumentBuilder()
		.setTitle('Time For Namaz API')
		.setDescription('API для приложения Time For Namaz')
		.setVersion('1.0')
		.addBearerAuth() // Добавление поддержки Bearer токенов, если нужно
		.build()

	// Создание документа и настройка Swagger по пути /api-docs
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	// Определяем порт
	const PORT = 8080;

	// Создаем файл с портом для Timeweb Cloud
	try {
		fs.writeFileSync('.port', PORT.toString())
		console.log('Файл .port создан успешно')
	} catch (error) {
		console.error('Ошибка при создании файла .port:', error)
	}

	console.log(`Запуск сервера на порту ${PORT}...`);
	
	await app.listen(PORT, '0.0.0.0', () => {
		console.log(`Сервер успешно запущен на порту ${PORT}`);
		console.log('Настройки CORS:', app.getHttpAdapter().getInstance()._cors);
	})
}

// Добавляем обработку необработанных исключений
process.on('unhandledRejection', (reason, promise) => {
	console.error('Необработанное отклонение промиса:', reason);
});

process.on('uncaughtException', (error) => {
	console.error('Необработанное исключение:', error);
});

bootstrap()
