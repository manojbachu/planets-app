// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-item" data-testid="planets">
      <img className="planet-image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem