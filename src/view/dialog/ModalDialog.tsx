import { useState} from 'react'
import Modal from './Modal';

export default function ModalDialog() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => setVisible(true)}>打开对话框</button>
      <Modal isOpen={visible}>
          hello there!

          <br />
          <div>
            主要内容
          </div>
          <button onClick={() => setVisible(false)}>
            关闭
          </button>
      </Modal>
    </>
  )
}
