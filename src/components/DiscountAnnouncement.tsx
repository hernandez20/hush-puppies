
interface props {
  message?: string
}

export default function DiscountAnnouncement({ message }:props) {
  if (!message) return null

  return (
    <div className="bg-deepTuscanRed text-white text-center text-xl font-semibold tracking-wide py-3">
      {message}
    </div>
  )
}
