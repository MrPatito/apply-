import React from 'react'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

//dasdasdasdad
function Card(props) {
  const [vehicles, setVehicles] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
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

  const options = [
    { value: 'Select vehicle', label: '' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <div className="Card">
      <div className="Title">
        <h2>Route report</h2>
      </div>
      <h3>Vehicle Number</h3>
      <div className="SelectVehicle">
        <Select className="Vehicles" options={options} />
      </div>
      <div>
        <h3>Period</h3>
      </div>
      <div>
        <h3>From</h3>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div>
        <h3>To</h3>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
    </div>
  )
}
export default Card
