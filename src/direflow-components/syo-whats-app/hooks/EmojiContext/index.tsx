import React from 'react'
export { EmojiButton } from './EmojiButton'
export { EmojiItens } from './EmojiItens'

type EmojiConfig = {
  name: string
  begin: number
  count: number
  exclude?: number[]
  include?: number[]
}


type IUseEmoji = {
  open: boolean
  toggleOpen: (value?: boolean) => void
  onClick?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void
}

const UseEmoji = React.createContext<IUseEmoji>({
  open: false,
  toggleOpen: () => { throw Error('toggle open not implemented') },
  onClick: () => { throw Error('onclick not implemented') }
})

export function Emoji(props: Partial<IUseEmoji> & { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  const toggleOpen = (value?: boolean) => {
    if (value === undefined) {
      value = !open
    }
    setOpen(value)
  }

  const value: IUseEmoji = {
    open: props.open || open,
    toggleOpen: props.toggleOpen || toggleOpen,
    onClick: props.onClick
  }

  return <UseEmoji.Provider value={value}>
    {props.children}
  </UseEmoji.Provider>
}

export function useEmoji() {
  return React.useContext(UseEmoji)
}