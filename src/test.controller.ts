import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
	@Get('health')
	getHealth(): string {
		return 'Server is up and running!';
	}
}
