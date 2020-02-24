import { ComicsModel } from '../models';

interface IComicsDto {
  id: number;
  price: number;
  title: string;
  img: string;
  description: string;
}

export class ComicsDto implements IComicsDto {
  id: number;
  price: number;
  title: string;
  img: string;
  description: string;

  constructor(comics: ComicsModel) {
    this.id = comics.id;
    this.description = comics.description;
    this.img = comics.img;
    this.price = comics.price;
    this.title = comics.title;
  }
}
