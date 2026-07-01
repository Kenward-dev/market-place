export interface Vehicle {
  id: string
  brand: string
  model: string
  year: number
  price: number
  mileage: number
  fuelType: string
  transmission: string
  condition: string
  color: string
  description: string
  images: string[]
  status: 'available' | 'sold' | 'reserved'
  featured: boolean
}