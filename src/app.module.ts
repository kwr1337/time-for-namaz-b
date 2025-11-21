import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrayerModule } from './prayer/prayer.module'
import { MediaModule } from './media/media.module'
import { QRCodeModule } from './qrcode/qrcode.module'
import { AdminModule } from './admin/ admin.module'
import { ErrorMessageModule } from './errorMessage/error-message.module'
import { CityModule } from './сity/city.module'
import { MosqueModule } from './mosque/mosque.module'
import { AuditLogModule } from './audit-log/audit-log.module'
import { TranslationModule } from './translation/translation.module'
import { MosqueLanguageSettingsModule } from './mosque-language-settings/mosque-language-settings.module'
import { NamesOfAllahModule } from './names-of-allah/names-of-allah.module'
import { RequestLoggerMiddleware } from './common/request-logger.middleware'

@Module({
	imports: [
		ConfigModule.forRoot(),
		PrayerModule,
		MediaModule,
		QRCodeModule,
		AdminModule,
		ErrorMessageModule,
		CityModule,
		MosqueModule,
		AuditLogModule,
		TranslationModule,
		MosqueLanguageSettingsModule,
		NamesOfAllahModule
	]
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(RequestLoggerMiddleware)
			.forRoutes('*');
	}
}
