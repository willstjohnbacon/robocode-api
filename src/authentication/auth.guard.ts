import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.switchToHttp().getRequest();
    const userAuth = user.headers['authorization'];
    const userCredentials = this.authService.getCredentials(
      userAuth.split(' ')[1],
    );

    return this.authService
      .checkMentorAuth(userCredentials)
      .then((userExists) => {
        if (userExists) {
          return true;
        }
      })
      .catch((err) => {
        return false;
      });
  }
}
