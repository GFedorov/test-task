import React,{useState} from 'react'



const GitaffeCard = (props)=>{
  const{name,weight,sex,height,color,diet,character} = props;
  console.log({name,weight,sex,height,color,diet,character});
  const[showEdit, setShowEdit] = useState(false);
  const[editMode, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode(!editMode)

  const[showedName, setShowedName] = useState(name);
  const[showedSex, setShowedSex] = useState(sex);
  const[showedWeight, setShowedWeight] = useState(weight)

    return (<div className="card">
                  <div className="edit-card">
                  <i className="fas fa-ellipsis-h" onClick={e=>setShowEdit(!showEdit)}></i>
                  {showEdit && (
                    <div className="card-settings">
                    <div className="edit selected" onClick={e=> toggleEditMode()}>  
                      Редактировать
                    </div>
                    <div className="delete">  
                      Удалить
                    </div>
                  </div>
                  )}
                  
                  </div>
                  <div className="giraffe-photo">
                  </div>
                  <div className="giraffe-name">
                    {editMode ? (
                      <input value={showedName} onChange={e => {
                        setShowedName(e.target.value)
                      }}/>
                    ) : showedName}
                  </div>
                  <div className="giraffe-icons-wrapper">
                    <div className="giraffe-icons">
                    <i className="fas fa-venus-mars"></i>
                    </div>

                    <div className="giraffe-icons">
                    <i className="fas fa-balance-scale"></i>
                    </div>
                    <div className="giraffe-icons">
                    <i className="fas fa-ruler-vertical"></i>
                    </div>
                  </div>
                  <div className="giraffe-data-wrapper">
                    <div className="giraffe-data">
                    {editMode ? (
                      <input value={showedSex} onChange={e => {
                        setShowedSex(e.target.value)
                      }}/>
                    ) : showedSex}
                    </div>
                    <div className="giraffe-data">
                    {editMode ? (
                      <input value={showedWeight} onChange={e => {
                        setShowedWeight(e.target.value)
                      }}/>
                    ) : showedWeight}
                    </div>
                    <div className="giraffe-data">
                      {height}
                    </div>
                  </div>
                  <div className="giraffe-info-wrapper">
                    <div className="giraffe-info">
                      <b>Цвет: </b>{color}
                    </div>
                    <div className="giraffe-info">
                      <b>Диета: </b>{diet}
                    </div>
                    <div className="giraffe-info">
                      <b>Характер: </b>{character}
                    </div>
                  </div>
                  {
                    editMode && (
                      <div className="save">
                        Сохранить
                      </div>
                    )
                  }
                </div>)
                
}

export default GitaffeCard