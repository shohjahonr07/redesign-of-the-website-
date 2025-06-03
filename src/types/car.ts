
export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  image: string;
  condition: string;
  category: 'personal' | 'business';
  bodyType: string;
  mpg: number;
  co2: number;
  description: string;
  features: string[];
  monthlyPrice: number;
  initialPayment: number;
  term: number;
}
