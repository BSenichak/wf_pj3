import React, { useState } from 'react'
import style from "./MCalendar.module.scss"
import { getCalendarDates } from '../../utils/calendar';


export default function MCalendar(props) {
    const [currentDate, setCurrentDate] = useState(new Date())

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const dates = getCalendarDates(year, month)
    console.log(dates)

  return (
    <div className={style.wrapper}>
        <div className={style.container}>
            <table>
                <thead>
                    <tr>
                        <th>ПН</th>
                        <th>ВТ</th>
                        <th>СР</th>
                        <th>ЧТ</th>
                        <th>ПТ</th>
                        <th>СБ</th>
                        <th>НД</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
  )
}
