import { useVehicleStore } from "./store/useVehicleStore"

export default function App() {
  const vehicles = useVehicleStore((state) => state.vehicles)

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Sarkin Mota</h1>

      {vehicles.map((v) => (
        <div key={v.id} className="border p-3 mb-2 rounded">
          {v.brand} {v.model} - ₦{v.price}
        </div>
      ))}
    </div>
  )
}