import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getTest(): any {
    return {
      name: "lzc",
      age: 300
    };
  }

  getUser(): any {
    return {
      name: "fll",
      age: 28
    };
  }
}
