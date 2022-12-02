import '../styles/globals.css'
import NavBar from './components/nav-bar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
