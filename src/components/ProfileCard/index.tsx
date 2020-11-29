import React from 'react'
import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import { Author } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />
}

const ProfileCard: React.FC<Author> = ({
  name,
  description,
  role,
  photo,
  socialLinks
}) => (
  <S.Card key={name}>
    <S.Image
      src={getImageUrl(photo.url)}
      alt={photo.alternativeText}
      loading="lazy"
    />

    <S.Name>{name}</S.Name>

    <S.Role>{role}</S.Role>

    <S.SocialLinks>
      {/* TODO: strapi has an open issue about nested queries returning null */}
      {socialLinks?.map((item) => (
        <S.Link key={item.title}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
