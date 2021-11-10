import { useState } from 'react';
import { schedule1, schedule2, schedule3 } from './data';

function App() {
  
  const [selectSchedule, setSelectSchedule] = useState('Первый график')
  const [state, setState] = useState({
    schedule1,
    schedule2,
    schedule3
  })

  const handleSelectSchedule = (e) => {
    let value = e.target.value
    setSelectSchedule(value);
    console.log(e.target.value);
  }

  const handlesSchedule1Reservation = (type, id) => () => {
    setState(prev => ({
      ...prev,
      [type]: prev[type].map(item => {
        if (item.id === id) {
          item.type = '❌';
        }

        return item;
      })
    }))
    alert('Вы забронировали время');
  }

  const schedules = [
    'Первый график',
    'Второй график',
    'Третий график'
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <select onChange={handleSelectSchedule}>
            {schedules.map((schedule, i) => {
              return (
                <option key={i} id={i} value={schedule}>{schedule}</option>
              )
            })}
          </select>
        </div>
      </div>
      <div className="row">
            {selectSchedule === schedules[0] 
          ? (
            <div className="col-sm-4 border">
              <table>
                <tbody>
                  {state.schedule1.map(row => (
                    <tr key={row.id} id={row.id}>
                      <td className="text-center">{row.option}</td>
                      <td className="text-center ps-3">{row.type}</td>
                      <td className="text-center ps-3">
                        {
                          row.type === '❌'
                            ? (
                              <button 
                                className='btn btn-sm btn-danger' 
                                disabled
                              >
                                Забронированно
                              </button>
                            )
                            : (
                              <button 
                                className='btn btn-sm btn-success' 
                                onClick={handlesSchedule1Reservation('schedule1', row.id)}
                              >
                                Забронировать
                              </button>
                            )
                        }
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
          : (<div></div>)
        }
        {selectSchedule === schedules[1] 
          ? (
            <div className="col-sm-4 border">
              <table>
                <tbody>
                  {schedule2.map(row => (
                    <tr key={row.id} id={row.id}>
                      <td className="text-center">{row.option}</td>
                      <td className="text-center ps-3">{row.type}</td>
                      <td className="text-center ps-3">
                        {
                          row.type === '❌'
                            ? (
                              <button 
                                className='btn btn-sm btn-danger' 
                                disabled
                              >
                                Забронированно
                              </button>
                            )
                            : (
                              <button 
                                className='btn btn-sm btn-success' 
                                onClick={handlesSchedule1Reservation('schedule2', row.id)}
                              >
                                Забронировать
                              </button>
                            )
                        }
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
          : (<div></div>)
        }
        {selectSchedule === schedules[2] 
          ? (
            <div className="col-sm-4 border">
              <table>
                <tbody>
                  {schedule3.map(row => (
                    <tr key={row.id} id={row.id}>
                      <td className="text-center">{row.option}</td>
                      <td className="text-center ps-3">{row.type}</td>
                      <td className="text-center ps-3">
                        {
                          row.type === '❌'
                            ? (
                              <button 
                                className='btn btn-sm btn-danger' 
                                disabled
                              >
                                Забронированно
                              </button>
                            )
                            : (
                              <button 
                                className='btn btn-sm btn-success' 
                                onClick={handlesSchedule1Reservation('schedule3', row.id)}
                              >
                                Забронировать
                              </button>
                            )
                        }
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
          : (<div></div>)
        }
      </div>
    </div>
  );
}

export default App;
