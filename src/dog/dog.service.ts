import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'HI, HOW ARE YOU? I am Spike!';
  }

  public introduce(): string {
    return 'I am the supporter of Jerry and the prosecutor of Tom!';
  }

  public modifyMyDetail(): string {
    return 'Modified successfully!';
  }
}
