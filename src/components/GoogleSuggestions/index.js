// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchList: ''}

  onChangeInput = event => {
    const userGiven = event.target.value
    this.setState({searchList: userGiven})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchList} = this.state
    console.log(searchList)
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchList),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google"
        />
        <ul className="card-container">
          <div className="inputElement">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.onChangeInput}
            />
          </div>
          <div className="list-of-search">
            {filteredList.map(each => (
              <SuggestionItem details={each} key={each.id} />
            ))}
          </div>
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
