/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import Products from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  findAll(): Promise<Products[]> {
    return this.productsRepository.find();
  }

  findOne(id?: string): Promise<Products> {
    return this.productsRepository.findOneBy({ id: parseInt(id) });
  }

  createOrUpdate(product: Products): Promise<Products> {
    return this.productsRepository.save(product);
  }
}
