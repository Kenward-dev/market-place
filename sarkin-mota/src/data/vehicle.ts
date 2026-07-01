import type { Vehicle } from "../types/vehicle"

export const vehicles: Vehicle[] = [
  {
    id: "1",
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    price: 14500000,
    mileage: 35000,
    fuelType: "Petrol",
    transmission: "Automatic",
    condition: "Used",
    color: "Black",
    description: "Clean Toyota Camry in excellent condition",
    images: ["https://source.unsplash.com/800x600/?toyota,car"],
    status: "available",
    featured: true,
  },
  {
    id: "2",
    brand: "Honda",
    model: "Accord",
    year: 2019,
    price: 13200000,
    mileage: 42000,
    fuelType: "Petrol",
    transmission: "Automatic",
    condition: "Used",
    color: "White",
    description: "Well maintained Honda Accord",
    images: ["https://source.unsplash.com/800x600/?honda,car"],
    status: "available",
    featured: false,
  }
]