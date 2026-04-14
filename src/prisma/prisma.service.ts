import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { PrismaClient } from 'src/generated/prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const connectionString = process.env.DATABASE_URL;
    Logger.log(
      `Connecting to database at: ${connectionString?.replace(/\/\/.*@/, '//***@')}`,
    );
    const adapter = new PrismaPg({
      connectionString,
      connectionTimeoutMillis: 10000,
      ssl: { rejectUnauthorized: false },
    });
    super({ adapter });
  }
  async onModuleInit() {
    try {
      Logger.log('Attempting database connection...');
      await this.$connect();
      Logger.log('Connected to the database');
    } catch (error) {
      Logger.error('Error connecting to the database:', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
