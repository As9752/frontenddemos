export class Product {
    id:number;
    title: string;
    description: string;
    price: number;
    createdAt?:string;
    imgUrl?:string;
    constructor(id:number,title: string, description: string, price: number,createdAt:string,imgUrl:string) {
      this.id=id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.createdAt=createdAt;
      this.imgUrl=imgUrl;
    }
  }
  // export interface ApiResponse{
  //   id: number;
  // name: string;
  // description: string;

  // }