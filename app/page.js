import Clock from "@/components/clock"
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div suppressHydrationWarning className="h-screen dark:bg-[#1f1f1f] flex flex-col">
      <div className="right-0 absolute p-4">
      <ModeToggle />
      </div>
      <Clock />
    </div>
  )
}
