export const getUVData = async ({ lat, lon }: { lat: string; lon: string }) => {
  const data = await fetch(
    `https://${process.env.VERCEL_URL}/api/weather/uv_index?lat=${lat}&lon=${lon}`
  )

  if (!data.ok) {
    throw new Error("Failed to fetch data")
  }

  return data.json()
}
