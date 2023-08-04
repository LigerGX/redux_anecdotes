import { useSelector, useDispatch } from "react-redux"
import { removeNotification } from "../reducers/notificationReducer"

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)

  if (notification) {
    setTimeout(() => dispatch(removeNotification()), 5000)
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      { notification }
    </div>
  )
}

export default Notification