import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString, Max, Min } from "class-validator";


export class CreateReviewDto {
    
  @ApiProperty({ description: 'The rating of the movie' })
  @IsInt()
  @Min(1)
  @Max(10)
  rating: number;

  @ApiProperty({ description: 'The comment of the review', required: false })
  @IsString() 
  @IsOptional()
  comment?: string;

  @ApiProperty({ description: 'The ID of the movie being reviewed' })
  @IsString()
  movieId: string;
}