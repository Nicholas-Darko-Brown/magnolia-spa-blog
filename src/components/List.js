import React from 'react'
import { EditableArea } from '@magnolia/react-editor';

const List = ({ list }) => {
  return (
    <ul> {list && <EditableArea content={list} />} </ul>
  )
}

export default List