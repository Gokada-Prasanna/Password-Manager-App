import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePassword} = props
  const {id, website, username, password, showStar} = passwordDetails

  const onDeletePasswordItem = () => {
    deletePassword(id)
  }

  return (
    <li className="password-list-items">
      <div className="user-and-delete-container">
        <div className="user-detail-container">
          <h1 className="website-first-letter">{website[0].toUpperCase()}</h1>
          <div>
            <p className="website">{website}</p>
            <p className="username">{username}</p>
            {showStar ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="star-image"
              />
            ) : (
              <p className="password">{password}</p>
            )}
          </div>
        </div>
        <button
          testid="delete"
          type="button"
          className="delete-button"
          onClick={onDeletePasswordItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
