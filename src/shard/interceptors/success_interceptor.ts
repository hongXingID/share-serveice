import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

interface Data<T> {
  data: T;
}

@Injectable()
export class SuccessInterceptor<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Data<T>> {
    return next.handle().pipe(
      map((data) => {
        return {
          data, // data即为 Service层或者Controller层的返回值
          code: 200,
          message: '请求成功',
          result: true,
        };
      }),
    );
  }
}
