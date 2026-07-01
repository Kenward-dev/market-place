import { create } from "zustand"
import { vehicles as initialVehicles } from "../data/vehicle"
import type { Vehicle } from "../types/vehicle"

interface VehicleState {
  vehicles: Vehicle[]
  favorites: string[]
  compare: string[]

  toggleFavorite: (id: string) => void
  toggleCompare: (id: string) => void
}

export const useVehicleStore = create<VehicleState>((set) => ({
  vehicles: initialVehicles,
  favorites: [],
  compare: [],

  toggleFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((v) => v !== id)
        : [...state.favorites, id],
    })),

  toggleCompare: (id) =>
    set((state) => {
      const exists = state.compare.includes(id)

      if (exists) {
        return {
          compare: state.compare.filter((v) => v !== id),
        }
      }

      if (state.compare.length >= 3) return state

      return {
        compare: [...state.compare, id],
      }
    }),
}))