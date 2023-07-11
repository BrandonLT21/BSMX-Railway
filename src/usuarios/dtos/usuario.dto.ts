import { IsString, IsNotEmpty, IsEmail, Length, IsOptional, IsPositive } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {  

  @IsString()
  @IsNotEmpty()  
  @ApiProperty()
  correo: string;

  @IsOptional()
  @IsString()  
  @ApiProperty()
  contrasenia: string; 

}