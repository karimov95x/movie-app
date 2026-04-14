import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { PrismaService } from 'src/prisma/prisma.service';
import cookieParser from 'cookie-parser';
import request from 'supertest';

// Этот файл будет использоваться для настройки тестового окружения и общих утилит для e2e тестов
export let app: INestApplication;
export let prisma: PrismaService;

let isInitialized = false;

export async function setupApp() {
  if (isInitialized) return;
  isInitialized = true;

  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication();
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.init();
  prisma = moduleFixture.get<PrismaService>(PrismaService);
}

// Функция для очистки базы данных перед каждым тестом
export async function cleanDatabase() {
  await prisma.review.deleteMany();
  await prisma.movie.deleteMany();
  await prisma.user.deleteMany();
}

// Функция для регистрации пользователя
export async function registerUser(
  email: string,
  password: string,
  name: string,
) {
  const res = await request(app.getHttpServer())
    .post('/auth/register')
    .send({ email, password, name });

  if (res.status !== 201) {
    throw new Error(
      `registerUser failed [${res.status}]: ${JSON.stringify(res.body)}`,
    );
  }
  return res;
}

// Функция для логина и получения accessToken
export async function loginAs(
  email: string,
  password: string,
): Promise<string> {
  const res = await request(app.getHttpServer())
    .post('/auth/login')
    .send({ email, password });
  return res.body.accessToken;
}
