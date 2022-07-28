import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Cars } from './cars.model';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  obterTodos(): Cars[] {
    return this.carsService.getAll();
  }

  @Get(':id')
  obterUm(@Param() params): Cars {
    return this.carsService.getOne(params.id);
  }

  @Post()
  criar(@Body() cars: Cars) {
    this.carsService.create(cars);
  }

  @Put()
  alterar(@Body() cars: Cars): Cars {
    return this.carsService.update(cars);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.carsService.delete(params.id);
  }
}
