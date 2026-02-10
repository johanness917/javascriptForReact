import { useState } from 'react';
import '../css/List.css'
import ListItem from './ListItem';

const List = ({ students, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('')
  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  //주의바람
  const getFilterData = () => {
    if (search === '') {
      return students;
    }
    return students.filter((student) => {
      return student.name.toLowerCase().includes(search.toLowerCase())
    })
  }

  const filterStudents = getFilterData();

  return <>
    <div className="List">
      <h4>성적리스트</h4>
      <input value={search} onChange={onChangeSearch} placeholder="검색할 이름을 입력하세요"
        className='search_bar' />
      <div className="list_wrapper">
        {filterStudents.map((student) => {
          return <ListItem key={student.id} {...student} onUpdate={onUpdate} onDelete={onDelete} />
        })}
      </div>
    </div>
  </>
}

export default List;