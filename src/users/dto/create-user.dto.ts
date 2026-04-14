import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ description: 'The email of the user' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'The name of the user', example: 'John Doe' })
    @IsString()
    @MinLength(2)
    name: string;

    @ApiProperty({ description: 'Password', example: '123456' })
    @IsString()
    @MinLength(6)
    password: string;
}