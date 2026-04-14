import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsInt, IsOptional, Min, Max } from 'class-validator';
import { Genre } from 'src/generated/prisma/enums';

export class CreateMovieDto {
  @ApiProperty({ description: 'The title of the movie' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'The description of the movie'})
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'The year the movie was released' })
  @IsInt()
  @Min(1888) // The year the first movie was made
  @Max(new Date().getFullYear()) // The current year
  year: number;

  @ApiProperty({ description: 'The genre of the movie' })
  @IsEnum(Genre)
  genre: Genre;
}
