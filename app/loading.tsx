export default function Loading() {
  return (
    <div className="monday-news-page h-screen flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
      <p className="text-white text-lg">Loading Monday News...</p>
    </div>
  )
}