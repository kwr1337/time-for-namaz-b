import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateErrorMessageDto } from './dto/create-error-message.dto';
import { UpdateErrorMessageDto } from './dto/update-error-message.dto';

@Injectable()
export class ErrorMessageService {
	constructor(private prisma: PrismaService) {}

	create(createErrorMessageDto: CreateErrorMessageDto) {
		return this.prisma.errorMessage.create({ data: createErrorMessageDto });
	}

	findAll() {
		return this.prisma.errorMessage.findMany();
	}

	findOne(id: number) {
		return this.prisma.errorMessage.findUnique({ where: { id } });
	}

	update(id: number, updateErrorMessageDto: UpdateErrorMessageDto) {
		return this.prisma.errorMessage.update({
			where: { id },
			data: updateErrorMessageDto,
		});
	}

	remove(id: number) {
		return this.prisma.errorMessage.delete({ where: { id } });
	}
}
