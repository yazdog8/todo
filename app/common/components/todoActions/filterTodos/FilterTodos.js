import React, {PropTypes} from 'react'

const FilterTodos = (props) => {
  const updateFilter = (e) => props.actions.filterTodos(e.target.value)
  return (
    <input type='text' onKeyUp={updateFilter} className='form-control' placeholder='Type to filter todos' />
  )
}

FilterTodos.propTypes = {
  actions: PropTypes.object.isRequired
}

export default FilterTodos
