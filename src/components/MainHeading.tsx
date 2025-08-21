import React from 'react'
import ComponentStyles from '../styles/components/ComponentSlyles'

export const MainHeading = ({text}:{text:string}) => {
  return (
    <h1 className={ComponentStyles.mainHeading} id="pageHeading">{text}</h1>
  )
}
