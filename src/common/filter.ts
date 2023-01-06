import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

export class HttpFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    console.log(exception);
    const status = exception.getStatus();

    response.status(status).json({
      success: false,
      time: new Date(),
      status,
      data: exception.message,
      path: request.url,
    });
  }
}
