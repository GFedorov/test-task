
import React, { useEffect, useState } from 'react'
import GiraffeCard from '../ui/GiraffeCard'
import UpdateReport from '../ui/UpdateReport';
import FilingReport from '../ui/FilingReport';

//import fetch from 'isomorphic-unfetch';



const giraffeCatalog = () => {
  const [items, setItems] = useState()
  const [showInfo, setShowInfo] = useState(false)
  const toggleShowInfo = () => setShowInfo(!showInfo)
  useEffect(() => {
    fetch('http://localhost:8080/api/giraffe')
      .then(r => r.json())
      .then(data => {
        setItems(data.items)
      });
  }, []);

  if (!items) {
    return 'Loading...'
  }
  return (

    <div className="container">
      <div className="aside-menu">
        <div id="icon-wrapper">
          <div id="icon">
          </div>
          <div id="icon-info">
            Ферма Заслуженных Жирафов
                <p>России и СНГ</p>
          </div>
        </div>
        <div id="button-wrapper">
          <div className="aside-button">
            <i className="fas fa-home"></i>
            Главная
              </div>
          <div className="aside-button">
            <i className="fas fa-tasks"></i>
            Управление
              </div>
          <div className="aside-button selected">
            <i className="fas fa-horse-head"></i>
            Жирафы
              </div>
          <div className="aside-button">
            <i className="fas fa-user-friends"></i>
            Сотрудники
              </div>
          <div className="aside-button">
            <i className="fas fa-cog"></i>
            Настройки
              </div>
          <div className="aside-button">
            <i className="fas fa-tools"></i>
            Поддержка
              </div>
        </div>
      </div>
      <div className="main-window">
        <div id="main-inside-wrapper">
          <div id="main-top-bar">
            <div className="cage selected">
              Вольер 1
                </div>
            <div className="cage">
              Вольер 2
                </div>
            <div className="cage">
              Вольер 3
                </div>
            <div id="add-cage">
              <i className="fas fa-plus"></i>
            </div>
            <div id="top-right-side">
              <div id="notification">
                <i className="far fa-bell"></i>
              </div>
              <div id="login-icon">
              </div>
              <div id="mail">
                hello@giraffe.com
                  </div>
            </div>
          </div>
          <div id="separator">
          </div>
          <div id="header-wrapper">
            <div id="header-text">
              Жирафы
                </div>
            <div id="add-giraffe">
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <div id="card-wrapper">
            {items.map((giraffe, index) => {
              return <GiraffeCard key={index}
              {...giraffe}
               />})}
            {showInfo && <UpdateReport setShowInfo={setShowInfo} />}
            <FilingReport toggleShowInfo={toggleShowInfo}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default giraffeCatalog