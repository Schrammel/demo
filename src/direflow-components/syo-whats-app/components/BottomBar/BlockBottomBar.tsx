import React from 'react'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'
import { Slide } from '@material-ui/core'

export type Props = {
  open: boolean
}

export default function BlockBottomBar({ open }: Props) {
  return (
    <React.Fragment>
      <Slide direction="up" in={open} timeout={500} unmountOnExit mountOnEnter>
        <div>
          <Alert severity="warning">
            <AlertTitle>Envio de mensagens bloqueado</AlertTitle>
            A janela de 24 horas para resposta está fechada, aguarde uma nova mensagem do cliente.
          </Alert>
        </div>
      </Slide>
    </React.Fragment>
  )
}