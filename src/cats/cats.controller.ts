import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { HttpExceptionFilter } from '../common/excepections/http-exception.filter';
import { CatsService } from './cats.service';
import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @Post()
  async signUp() {
    return 'signup';
  }

  @Post('login')
  logIn() {
    return 'login';
  }

  @Post('logout')
  logOut() {
    return 'logout';
  }

  @Post('uploads/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}
