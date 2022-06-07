import './AnimalDiv.css';

export default function AnimalDiv({ name, type, says, top, left }) {
  return (<div className='animal-div' style={ { position: 'relative', top: { top }, left: { left } }}>
    <p>{ name }</p>
    <p>They say { says }</p>
    <img src={`/animals/${type}.svg`}/>
  </div>);
}