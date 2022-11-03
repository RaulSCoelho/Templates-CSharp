import React from 'react'
import { FiDownload } from 'react-icons/fi'
import { MdAddBox, MdDelete } from 'react-icons/md'

import { ButtonStyleProps, ButtonStyle } from './styles'

interface ButtonProps extends ButtonStyleProps {
  onClick?: () => void
}

export const AddButton: React.FC<ButtonProps> = props => {
  return (
    <ButtonStyle size={props.size}>
      <MdAddBox className="button add-button" onClick={props.onClick} />
    </ButtonStyle>
  )
}

export const DeleteButton: React.FC<ButtonProps> = props => {
  return (
    <ButtonStyle size={props.size}>
      <MdDelete className="button delete-button" onClick={props.onClick} />
    </ButtonStyle>
  )
}

export const DownloadButton: React.FC<ButtonProps> = props => {
  return (
    <ButtonStyle size={props.size}>
      <FiDownload className="button download-button" onClick={props.onClick} />
    </ButtonStyle>
  )
}
