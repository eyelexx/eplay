import { useState } from 'react'

import Section from '../Section'

import play from '../../assets/images/botao-play 1.png'
import zoom from '../../assets/images/mais-zoom 1.png'
import closeIcon from '../../assets/images/close 1.png'

import * as S from './styles'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  type: 'image' | 'video'
  url: string
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closemodal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={closeIcon} alt="Ícone de fechar" onClick={closemodal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="Imagem" />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closemodal()
          }}
        ></div>
      </S.Modal>
    </>
  )
}
export default Gallery
