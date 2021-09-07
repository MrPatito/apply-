import React from 'react'
import { useEffect, useState } from 'react'
function Card(props) {
  let APIMapon =
    'https://mapon.com/api/v1/unit/list.json?key=ed6dc5516f66531096e66628e84d10fd2371c87a'

  const [vehicles, setVehicles] = useState()

  fetch(APIMapon)
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((data) => {
      setVehicles(data)
    })
  // console.log(vehicles)
  return (
    <div className="Card">
      <div>
        <h2>Route report</h2>
      </div>
      <div>
        <p>Vehicle number</p>
        <select name="Select vehicle">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
  )
}
export default Card
