import ChakraWrapper from "@/components/ChakraWrapper"
import Footer from "@/views/Footer"
import NavBar from "@/views/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <head />
      
      <body>
        <ChakraWrapper>  
          <NavBar />      
        {children}
        <Footer />
        </ChakraWrapper>
        </body>
    </html>
  )
}
