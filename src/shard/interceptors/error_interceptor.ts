import { Injectable, BadGatewayException } from '@nestjs/common';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor {
  intercept(context, next) {
    return next.handle().pipe(
      catchError((err) =>
        throwError(
          () =>{
            console.log(err,'er')
            return  new BadGatewayException({
                data: err,
                code: 0,
                message: '请求失败',
                result: false,
              })
          },
        ),
      ),
    );
  }
}
