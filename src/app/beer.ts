export interface Beer {
  id?: string | undefined;
  name: string;
  image_url: string;
  description: string;
}

export class CBeer {
  id: string | undefined;
  name: string;
  image_url: string;
  description: string;

  constructor(
    id: string | undefined,
    name: string,
    image_url: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.image_url = image_url;
    this.description = description;
  }
}
