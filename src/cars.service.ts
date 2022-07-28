import { Injectable } from '@nestjs/common';
import { Cars } from './cars.model';

@Injectable()
export class CarsService {
  cars: Cars[] = [
    new Cars(
      'Ferrari F8',
      'Ferrari',
      'https://www.carlogos.org/car-logos/ferrari-logo-750x1100.png',
    ),
    new Cars(
      'Lamborghini Aventador',
      'Lamborghini',
      'https://www.carlogos.org/car-logos/lamborghini-logo-1000x1100.png',
    ),
    new Cars(
      'Porsche 911',
      'Porsche',
      'https://www.carlogos.org/car-logos/porsche-logo-2100x1100.png',
    ),
  ];

  getAll(): Cars[] {
    return this.cars;
  }

  getOne(id: number): Cars {
    return this.cars[0];
  }

  create(cars: Cars) {
    this.cars.push(cars);
  }

  update(cars: Cars): Cars {
    return cars;
  }

  delete(id: number) {
    this.cars.pop();
  }
}
