import React from 'react'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Card(props) {
  const [vehicles, setVehicles] = useState()
  const [startDate, setStartDate] = useState(new Date())
  console.log(vehicles)

  useEffect(() => {
    let APIMapon =
      'https://mapon.com/api/v1/unit/list.json?key=ed6dc5516f66531096e66628e84d10fd2371c87a'

    fetch(APIMapon)
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => {
        setVehicles(data)
      })
  }, [])

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
      <div>
        <h2>Period</h2>
      </div>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div>
        <label htmlFor="start">To:</label>
        <input
          type="date"
          id="start"
          name="trip-end"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
      </div>
    </div>
  )
}
export default Card
