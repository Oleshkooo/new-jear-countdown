import { useEffect, useState } from 'react'

import Fireworks from '@components/Fireworks'

import './main.scss'

const Main = () => {
    const [currentYear, setCurrentYear] = useState(() => getCurrentYear())
    const [newYear, setNewYear] = useState(() => getNewYear())
    const [timeToNewYear, setTimeToNewYear] = useState(() => getTimeToNewYear())
    const [isFireworks, setFireworks] = useState(false)

    function getCurrentYear() {
        return new Date().getFullYear()
    }
    function getNewYear() {
        return new Date(`January 01 ${currentYear + 1} 00:00:00`).getFullYear()
    }
    function getTimeToNewYear() {
        const currentTime = new Date().getTime()
        const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`).getTime()
        const time = newYearTime - currentTime
        const days = Math.floor(time / (1000 * 60 * 60 * 24))
        const localeTime = new Date(time).toLocaleTimeString('en-GB', {
            hour12: false,
            timeZone: 'UTC',
        })
        return `${addZero(days)}:${localeTime}`
    }
    function addZero(n) {
        if (typeof n === 'number') {
            return (n < 10 ? '0' : '') + n
        }
        if (typeof n === 'string') {
            return (parseInt(n, 10) < 10 ? '0' : '') + n
        }
        throw new Error('Invalid argument type')
    }
    function isNewYear() {
        return new Date().getTime() < new Date(`January 02 ${currentYear} 00:00:00`).getTime()
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentYear !== getCurrentYear()) {
                setCurrentYear(() => getCurrentYear())
                setNewYear(() => getNewYear())
            }
            if (currentYear === newYear) {
                setNewYear(() => getNewYear())
            }
            if (isNewYear()) {
                setFireworks(true)
            }
            setTimeToNewYear(getTimeToNewYear())
        }, 1000)

        return () => clearInterval(timer)
    })

    return (
        <>
            <div className="section-main">
                <h3 className="text__secondary text">
                    {currentYear} - {newYear}
                </h3>
                <h1 id="timer" className="text__primary text">
                    {timeToNewYear}
                </h1>
            </div>
            {isFireworks && <Fireworks />}
        </>
    )
}
export default Main
