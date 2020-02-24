import { CharacterModel } from '../models';

interface ICharacterDto {
  id: number;
  name: string;
  img: string;
  slug: string;
}

export class CharacterDto implements ICharacterDto {
  id: number;
  img: string;
  name: string;
  slug: string;

  constructor(character: CharacterModel) {
    this.id = character.id;
    this.img = character.img;
    this.name = character.name;
    this.slug = character.slug;
  }
}
