import { CardComponent, Header, ListaAvatar } from "@/components"
import { Container } from "@mui/material"
import { currencyConverter } from "@/utils"

function Home() {
  const ListaVendedores = [
      {
        avatar: '/dnc-avatar.png',
        name: 'Gabriel Silva',
        subtitle: currencyConverter(1234.54)
      },

      {
        avatar: '/dnc-avatar.png',
        name: 'Maria Laura',
        subtitle: currencyConverter(2344.54)
      },

      {
        avatar: '/dnc-avatar.png',
        name: 'Josefa',
        subtitle: currencyConverter(500.00)
      }
  ]
  return (
    <>
     <Header />
     <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
              <ListaAvatar listData={ListaVendedores} />
        </CardComponent>
     </Container>

    </>
  )
}

export default Home
