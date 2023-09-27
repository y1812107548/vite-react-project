import { useEffect, useRef } from 'react'

export default function Modal({ isOpen, children }: {isOpen: boolean, children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if(!isOpen){
      return
    }
    const dialog = ref.current;
    console.log(dialog);
    dialog?.showModal()
    return () => {
      dialog?.close()
    }
  },[isOpen])
  return (
    <dialog ref={ref}>{children}</dialog>
  )
}
