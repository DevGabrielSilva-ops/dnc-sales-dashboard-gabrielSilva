import { CardComponent, CustomTable, Header, ListaAvatar } from "@/components"
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

  const DadosTable = {
      headers: ['Name', 'Email','Actions'],
      rows: [
        [
          <span>Nome 1</span>,
          <span>Nome@gmail.com</span>,
          <button>Action</button>
        ],

         [
          <span>Nome 2</span>,
          <span>Nome2@gmail.com</span>,
          <button>Action</button>
        ],

          [
          <span>Nome 3</span>,
          <span>Nome3@gmail.com</span>,
          <button>Action</button>
        ]
      ]
  }
  return (
    <>
     <Header />
     <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
              <ListaAvatar listData={ListaVendedores} />
        </CardComponent>
        <CardComponent>
              <CustomTable headers={DadosTable.headers} rows={DadosTable.rows} />
        </CardComponent>
     </Container>

    </>
  )
}

export default Home
