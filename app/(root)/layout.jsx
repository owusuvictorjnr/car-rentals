import Navbar from '@/components/shared/Navbar'

export default function RootLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
    </div>
  )
}
