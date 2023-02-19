import ChakraWrapper from "@/components/ChakraWrapper"
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
        </ChakraWrapper>
        </body>
    </html>
  )
}
