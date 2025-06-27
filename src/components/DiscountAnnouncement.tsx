import type { messageProps } from "@/types/types"

export default function DiscountAnnouncement({ message }:messageProps) {
  if (!message) return null

  return (
    <div className="bg-deepTuscanRed text-white text-center text-xl font-semibold tracking-wide py-3">
      {message}
    </div>
  )
}
