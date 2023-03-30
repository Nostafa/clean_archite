import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

interface Iproduct {
  name: string;
  desc: string;
  stock: number;
  price: number;
}

export class ProductDto implements Iproduct {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  desc: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  stock: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  price: number;
}
