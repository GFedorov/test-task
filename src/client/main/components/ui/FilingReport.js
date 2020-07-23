import React from 'react'
const FilingReport = (props) => {
  const { toggleShowInfo } = props
  // toggleShowInfo = props.toggleShowInfo
  return (



    <div id="filling-wrapper">
      <div id="filling-close">
        <i className="fas fa-times"></i>
      </div>
      <div id="filling-percent">75%</div>
      <div id="filling-text">Заполение вольера</div>
      <div id="progress-wrapper">
        <div id="filling-bar">
          <div id="filling-progress"></div>

        </div>
        <div id="filling-information-btn" onClick={toggleShowInfo}> Информация</div>
      </div>





    </div>
  )
}

export default FilingReport