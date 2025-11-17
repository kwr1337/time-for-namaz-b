import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import * as express from 'express'
import { AppModule } from './app.module'
import { join } from 'path'

// Импорт Swagger модулей
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
	console.log('Запуск приложения...');
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors({
		origin: ['https://nmzvrm.ru'],
		credentials: true,
		exposedHeaders: 'set-cookie'
	})
	app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))

	// Конфигурация Swagger
	const config = new DocumentBuilder()
		.setTitle('Название API')
		.setDescription('Описание API')
		.setVersion('1.0')
		.addBearerAuth() // Добавление поддержки Bearer токенов, если нужно
		.build()

	// Создание документа и настройка Swagger по пути /api-docs
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api-docs', app, document)

	// Используем стандартный порт 8080 для Node.js приложений в облаке
	const PORT = 8080;
	console.log(`Приложение запускается на порту: ${PORT}`);
	await app.listen(PORT);
	console.log(`Приложение успешно запущено на порту ${PORT}`);
}

bootstrap()