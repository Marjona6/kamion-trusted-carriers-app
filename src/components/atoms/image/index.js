import styled from 'styled-components'

const StyledImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 30px;
  object-fit: cover;
`

const StyledImage = ({ src, altText }) => {
  return <StyledImg src={src} alt={altText} />
}

export default StyledImage
