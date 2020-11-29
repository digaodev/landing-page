import React from 'react'

import { SectionConceptsProps } from 'types/api'
import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'

const SectionConcepts = ({ title, concepts }: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom reverseColor>
        {title}
      </Heading>
      <S.List>
        {concepts.map((item) => (
          <S.Item key={item.id}>{item.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
