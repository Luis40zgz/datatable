import React from "react"
import "./Datatable.css"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Datatable({ data }) {
  const [datas, setDatas] = useState(data)
  document.addEventListener("DOMContentLoaded", () => {
    const sortAsc = document.querySelectorAll(".asc")
    const sortDes = document.querySelectorAll(".des")
    console.log(sortAsc)
    sortAsc.forEach((element) => {
      console.log(element)
      element.addEventListener("click", (e) => {
        console.log(e)
        const key = e.target.getAttribute("scope-sort")
        const sortedData = datas.sort((a, b) => a[key] - b[key])
        setDatas(sortedData)
      })
      console.log(element)
    })
  })
  return (
    <div className="container">
      <table className="table">
        <thead className="head">
          <tr>
            <th>
              Entrada<span>&nbsp;</span>
              <span className="asc" scope-sort="entrada">
                &uarr;
              </span>
              <span className="des" scope-sort="entrada">
                &darr;
              </span>
            </th>
            <th>
              Camara<span>&nbsp;</span>
              <span className="asc" scope-sort="camara">
                &uarr;
              </span>
              <span className="des" scope-sort="camara">
                &darr;
              </span>
            </th>
            <th>
              Otro<span>&nbsp;</span>
              <span className="asc" scope-sort="otro">
                &uarr;
              </span>
              <span className="des" scope-sort="otro">
                &darr;
              </span>
            </th>
            <th>
              Tally<span>&nbsp;</span>
              <span className="asc" scope-sort="tally">
                &uarr;
              </span>
              <span className="des" scope-sort="tally">
                &darr;
              </span>
            </th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody className="body">
          {data.map(({ entrada, camara, otro, tally }) => (
            <tr key={entrada}>
              <td>{entrada}</td>
              <td>{camara}</td>
              <td>{otro}</td>
              <td>{tally}</td>
              <td>
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
