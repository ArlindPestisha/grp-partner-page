import React, { useState, useEffect } from "react"
import "./index.scss"
import Themes from "../../data/themes.json"
import Input from "./input"

const ButtonRow = props => {
  const [workReg, setWorkReg] = useState(false)
  const [themes, setThemes] = useState(false)
  const [hq, setHq] = useState(false)
  const [types, setTypes] = useState(false)

  const handleWorkreg = e => {
    e.preventDefault()
    setWorkReg(!workReg)
  }

  return (
    <div className="main__container">
      <div className="inputWrap">
        <form>
          <button onClick={() => handleWorkreg}>Working Region</button>
          <ul style={workReg ? { display: "block" } : { display: "none" }}>
            {Themes.workingRegion.map(input => {
              return (
                <Input
                  value={input.value}
                  change={props.changed}
                  display={input.value[1]}
                />
              )
            })}
          </ul>
        </form>
      </div>
      <div className="inputWrap">
        <form>
          <button onClick={() => setThemes(!themes)}>Themes</button>
          <ul style={themes ? { display: "block" } : { display: "none" }}>
            {Themes.themes.map(input => {
              return (
                <Input
                  value={input.value}
                  change={props.changed}
                  display={input.value[1]}
                />
              )
            })}
          </ul>
        </form>
      </div>
      <div className="inputWrap">
        <form>
          <button onClick={() => setHq(!hq)}>Headquarters</button>
          <ul style={hq ? { display: "block" } : { display: "none" }}>
            {Themes.hq.map(input => {
              return (
                <Input
                  value={input.value}
                  change={props.changed}
                  display={input.value[1]}
                />
              )
            })}
          </ul>
        </form>
      </div>
      <div className="inputWrap">
        <form>
          <button onClick={() => setTypes(!types)}>Organization Type</button>
          <ul style={types ? { display: "block" } : { display: "none" }}>
            {Themes.types.map(input => {
              return (
                <Input
                  value={input.value}
                  change={props.changed}
                  display={input.value[1]}
                />
              )
            })}
          </ul>
        </form>
      </div>
    </div>
  )
}

export default ButtonRow
