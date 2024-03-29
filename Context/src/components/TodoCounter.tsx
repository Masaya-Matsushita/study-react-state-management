import { FC, useContext } from 'react'
import { TodosContext } from 'src/state/todo'

export const TodoCounter: FC = () => {
  const { todos } = useContext(TodosContext)

  return <h2>TODO: {todos.length}件</h2>
}
