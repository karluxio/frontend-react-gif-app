import PropTypes from "prop-types"

export const GifItem = ({ id, title, url }) => {
  return (

    <div className="card">
      <img src={url} />
      <p>{title}</p>
    </div>

  )
}

GifItem.prototypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
