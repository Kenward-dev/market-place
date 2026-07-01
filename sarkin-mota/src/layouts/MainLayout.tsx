import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar placeholder (we build real one next step) */}
      <header className="h-16 border-b flex items-center px-6">
        <h1 className="font-bold">Sarkin Mota</h1>
      </header>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="h-16 border-t flex items-center justify-center text-sm">
        © {new Date().getFullYear()} Sarkin Mota
      </footer>
    </div>
  )
}