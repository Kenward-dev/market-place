import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import App from "../App"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}