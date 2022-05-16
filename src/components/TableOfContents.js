import { Link } from 'react-router-dom'

const TableOfContents = () => {
  return (
    <div>
      <h3>Table of Contents</h3>
      <Link to="/">Home</Link>
      <br />
      <Link to="/legend-button">LegendButton</Link>
      <br />
      <Link to="/checkbox-with-circle">CheckboxWithCircle</Link>
    </div>
  )
}

export default TableOfContents
