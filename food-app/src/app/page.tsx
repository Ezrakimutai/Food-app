import NavBar from "@/components/Navbar";
import FoodItems from "@/components/FoodItems";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar />
      <FoodItems/>
    </main>
  )
}
