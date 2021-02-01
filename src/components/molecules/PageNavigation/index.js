import styled from 'styled-components'

import TinyButton from '../../atoms/buttons/TinyButton'

const ButtonsContainer = styled.div`
  border: 2px solid ${(props) => props.theme.dark};
  display: flex;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`

const PageNavigation = ({ activePage = 1, lastPage = 1, onClick }) => {
  let pagesArray = []
  for (let i = 1; i <= lastPage; i++) {
    pagesArray.push(i)
  }
  return (
    <ButtonsContainer>
      {pagesArray.map((page) => (
        <TinyButton
          key={page}
          active={page === activePage}
          buttonText={page}
          onClick={onClick}
        />
      ))}
    </ButtonsContainer>
  )
}

export default PageNavigation
