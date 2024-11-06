import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { ErrorMessageService } from './error-message.service';
import { CreateErrorMessageDto } from './dto/create-error-message.dto';
import { UpdateErrorMessageDto } from './dto/update-error-message.dto';

@Controller('error-messages')
export class ErrorMessageController {
	constructor(private readonly errorMessageService: ErrorMessageService) {}

	@Post()
	create(@Body() createErrorMessageDto: CreateErrorMessageDto) {
		return this.errorMessageService.create(createErrorMessageDto);
	}

	@Get()
	findAll() {
		return this.errorMessageService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.errorMessageService.findOne(id);
	}

	@Patch(':id')
	update(@Param('id') id: number, @Body() updateErrorMessageDto: UpdateErrorMessageDto) {
		return this.errorMessageService.update(id, updateErrorMessageDto);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.errorMessageService.remove(id);
	}
}
