/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
