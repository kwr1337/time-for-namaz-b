import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common'
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { AuthGuard } from '@nestjs/passport'

@Controller('media')
export class MediaController {
	constructor(private readonly mediaService: MediaService) {}
	
	@Post()
	@UseGuards(AuthGuard('jwt'))
	create(@Body() createMediaDto: CreateMediaDto) {
		return this.mediaService.create(createMediaDto);
	}

	@Get()
	findAll() {
		return this.mediaService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.mediaService.findOne(+id);
	}

	@Patch(':id')
	@UseGuards(AuthGuard('jwt'))
	update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
		return this.mediaService.update(+id, updateMediaDto);
	}

	@Delete(':id')
	@UseGuards(AuthGuard('jwt'))
	remove(@Param('id') id: string) {
		return this.mediaService.remove(+id);
	}
}
