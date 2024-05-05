import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getHello(): string {
    return 'WOW PSHSHSHSHSH!';
  }

  public introduce(): string {
    return 'SALAM BRATAN, I am Jery`s colleague!';
  }
}
