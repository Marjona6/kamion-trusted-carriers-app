import styled from 'styled-components'

const ListingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.theme.light};
  background-color: ${(props) => props.theme.primary};
  border: 5px solid ${(props) => props.theme.secondary};
  border-radius: 30px;
  padding: 10px;
  font-size: 16px;
  min-height: 100px;
  min-width: 300px;
  margin: 20px 10px;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

export default ListingContainer
