import React from 'react';
const UpdateReport = (props) => {
    const { setShowInfo } = props
    return (
        <div id="update-wrapper">
            Обновления
             <div id="update-close" onClick={e => setShowInfo(false)}>
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
                            <div className="status wait">Ожидается</div>
                        </td>

                    </tr>
                    <tr>
                        <td>01 июня 2020</td>
                        <td>Новый жираф</td>
                        <td>Пряники</td>
                        <td className='p0'>
                            <div className="status done">Выполнено</div>
                        </td>

                    </tr>
                    <tr>
                        <td>01 июня 2020</td>
                        <td>Новый жираф</td>
                        <td>Пряник</td>
                        <td>
                            <div className="status not-approved">Не подтвержден</div>
                        </td>

                    </tr>
                    <tr>
                        <td>01 июня 2020</td>
                        <td>Новый жираф</td>
                        <td>Пряник</td>
                        <td>
                            <div className="status decline">Отклонено</div>
                        </td>

                    </tr>
                </table>
            </div>



        </div>
    )
}

export default UpdateReport