// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details} = props
  const {id, suggestion} = details
  console.log(id)
  console.log(suggestion)

  return (
    <li className="list">
      <p className="description">{suggestion}</p>
      <div className="arrow">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </div>
    </li>
  )
}
export default SuggestionItem
