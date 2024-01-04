import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat
      ad sequi beatae asperiores vitae nesciunt cumque saepe pariatur. Error quo
      voluptas dolor aut pariatur corporis voluptatum vel nesciunt doloribus!
    </Descricao>
  </Card>
)
export default Product
