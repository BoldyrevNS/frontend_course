import React from 'react'
import "../css/Modal.css"

interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}

const Modal = ({ children, title, onClose }: ModalProps) => {
  return (
    <>
      <div className="bg" onClick={onClose} />
      <div className="window">
        <h1 className="title">{ title }</h1>
        { children }
      </div>
    </>
  )
}

export default Modal;