import { useSelector, useDispatch } from "react-redux"
import { increaseVote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(increaseVote(id))
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    dispatch(setNotification(`You voted '${anecdote.content}'`))
  }

  return (
    <div>
      {anecdotes
        .filter(anecdote => {
          return anecdote.content.toLowerCase().includes(filter.toLowerCase())
        })
        .map(anecdote => {
          return (
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )
        }
        )
        .sort((a, b) => b.votes - a.votes)
      }
    </div>
  )

}

export default AnecdoteList