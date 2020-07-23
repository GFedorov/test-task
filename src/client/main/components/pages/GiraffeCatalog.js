
import React, { useEffect, useState } from 'react'
import GiraffeCard from '../ui/GiraffeCard'
//import fetch from 'isomorphic-unfetch';



const giraffeCatalog = () => {
  const [items, setItems] = useState()
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
              return <GiraffeCard key={index} name={giraffe.name} weight={giraffe.weight} sex={giraffe.sex} height={giraffe.heigth} />
            })}
            <div id="update-wrapper">
              Обновления
             <div id="update-close">
                <i className="fas fa-times"></i>

              </div>
              <div id="update-separator">

              </div>
              <div id="update-data">
                <table>
                  <tr>
                    <th>Дата</th>
                    <th>Действие</th>
                    <th>Жираф</th>
                    <th>Статус</th>
                  </tr>
                  <tr>
                    <td>01 июня 2020</td>
                    <td>Новый жираф</td>
                    <td>Пряник</td>
                    <td >
                    <div className="status-wait">Ожидается</div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>01 июня 2020</td>
                    <td>Новый жираф</td>
                    <td>Пряники</td>
                    <td className='p0'>
                    <div className="status-done">Выполнено</div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>01 июня 2020</td>
                    <td>Новый жираф</td>
                    <td>Пряник</td>
                    <td>
                    <div className="status-not-approved">Не подтвержден</div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>01 июня 2020</td>
                    <td>Новый жираф</td>
                    <td>Пряник</td>
                    <td>
                    <div className="status-decline">Отклонено</div>
                    </td>
                    
                  </tr>
                </table>
              </div>



            </div>

            <div id="filling-wrapper">
              <div id="filling-close">
                <i className="fas fa-times"></i>
              </div>
              <div id="filling-percent">75%</div>
                <div id="filling-text">Заполение вольера</div>
                <div id="filling-bar">
                  <div id="filling-progress"></div>
                </div>
                <div id="filling-information"></div>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default giraffeCatalog