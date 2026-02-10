import { useState } from 'react';
import '../css/Editor.css'

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState('')
  const onChangeContent = (e) => {
    setContent(e.target.value)
  }
  const onSubmit = () => {
    onCreate(content);
    setContent('')
  }
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit
    }
  }

  return <>
    <div className="Editor">
      <input value={content} onChange={onChangeContent}
        onKeyDown={onKeyDown} placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
  </>


}

export default Editor;