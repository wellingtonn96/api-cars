export class Cars {
  id: number;
  description: string;
  brand: string;
  logo: string;

  constructor(description: string, brand: string, logo: string) {
    this.description = description;
    this.brand = brand;
    this.logo = logo;
  }
}
