import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isclicked: false}

  onChange = () => {
    this.setState({isclicked: true})
  }

  emojicont = each => (
    <li key={each.name}>
      <img src={each.imageUrl} onClick={this.onChange} alt={each.name} />
      <p>{each.name}</p>
    </li>
  )

  render() {
    const {resources} = this.props
    const {isclicked} = this.state
    const {emojis, loveEmojiUrl} = resources
    console.log(emojis)
    return (
      <div className="main-cont">
        {!isclicked && (
          <div className="sub-cont1">
            <h1>
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-cont">
              {emojis.map(each => this.emojicont(each))}
            </ul>
          </div>
        )}
        {isclicked && (
          <div className="sub-cont2">
            <img src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank You</h1>
            <p>
              We will use your feedback to improve our customer support
              perfromance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
