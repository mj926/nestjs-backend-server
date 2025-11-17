import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // ✨ CORS 설정 추가 ✨
  app.enableCors({
    origin: 'http://localhost:5173', // Vue 개발 서버 주소
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  // ✨ 추가 끝 ✨

  await app.listen(3000); // NestJS는 기본 포트 3000번 사용

  // await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
