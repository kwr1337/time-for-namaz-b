import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrayerModule } from './prayer/prayer.module'
import { MediaModule } from './media/media.module'
import { QRCodeModule } from './qrcode/qrcode.module'
import { AdminModule } from './admin/ admin.module'
import { ErrorMessageModule } from './errorMessage/error-message.module'
import { CityModule } from './сity/city.module'
import { MosqueModule } from './mosque/mosque.module'
import { AuditLogModule } from './audit-log/audit-log.module'

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
		AuditLogModule
	]
})
export class AppModule {}
