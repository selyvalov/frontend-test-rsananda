import React, { Component } from 'react'
import MasterIcd from './component/master-icd'



export default class App extends Component {
  state = {
    title: "Master ICD",
    masters: [
      {
        english_name: "icd_tens_name_english",
        nama: "icd_tens_name_bahasa",
        kode: "icd_tens_code",
        type: "icd_tens_type"
      },
      {
        english_name: "icd_tens_name_english2",
        nama: "icd_tens_name_bahasa2",
        kode: "icd_tens_code2",
        type: "icd_tens_type2"
      }
    ]
  }
  
  render() {
    return (
      <div>
        <MasterIcd></MasterIcd>
      </div>
    )
  }
}
