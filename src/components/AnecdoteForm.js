import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const createNew = (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    e.target.anecdote.valule = ''
    dispatch(createAnecdote(anecdote))
  }

  return (
    <form onSubmit={createNew}>
      <h2>Create New</h2>
      <div>
        <input name="anecdote" />
      </div>
      <button type="submit">Create</button>
    </form>
  )
}

export default AnecdoteForm