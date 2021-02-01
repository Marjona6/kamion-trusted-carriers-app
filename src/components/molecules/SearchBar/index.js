import React from 'react'
import styled from 'styled-components'

import TextInput from '../../atoms/inputs/TextInput'

const SearchBar = ({
  labelText = 'Search',
  labelId = 'search',
  placeholderText = 'Type to search',
  value,
  onChange
}) => {
  return (
    <TextInput
      labelText={labelText}
      labelId={labelId}
      placeholderText={placeholderText}
      value={value}
      onChange={onChange}
    />
  )
}

export default SearchBar
