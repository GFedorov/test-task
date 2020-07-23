import React from 'react'


const GitaffeCard = (props)=>{
  const{name,weight,sex,height} = props
  

    return (<div className="card">
                  <div className="edit-card">
                  
                  <div className="card-settings">
                    <div className="edit selected">  
                      Редактировать
                    </div>
                    <div className="delete">  
                      Удалить
                    </div>
                  </div>
                  </div>
                  <div className="giraffe-photo">
                  </div>
                  <div className="giraffe-name">
                    {name}
                  </div>
                  <div className="giraffe-icons-wrapper">
                    <div className="giraffe-icons" />
                    <div className="giraffe-icons" />
                    <div className="giraffe-icons" />
                  </div>
                  <div className="giraffe-data-wrapper">
                    <div className="giraffe-data">
                      {sex}
                    </div>
                    <div className="giraffe-data">
                      {weight}
                    </div>
                    <div className="giraffe-data">
                      {height}
                    </div>
                  </div>
                  <div className="giraffe-info-wrapper">
                    <div className="giraffe-info">
                      <b>Цвет: </b>Стандарт
                    </div>
                    <div className="giraffe-info">
                      <b>Диета: </b>Растительная
                    </div>
                    <div className="giraffe-info">
                      <b>Характер: </b>Кокетка
                    </div>
                  </div>
                </div>)
                
}

export default GitaffeCard