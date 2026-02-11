import { memo } from 'react';
import '../css/Header.css'

const Header = ({ count }) => {
  console.log(`HEADER ${count}`)
  return <>
    <div className="Header">
      <h3>오늘 달력📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  </>
}

export default memo(Header);