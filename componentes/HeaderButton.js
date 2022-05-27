import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'

const btnHeader = (props) => {
  return (
    <HeaderButton 
        {...props}
        IconComponent={Ionicons}
        iconSize={25}
        color={'lightgrey'}
    />
  )
}

export default btnHeader