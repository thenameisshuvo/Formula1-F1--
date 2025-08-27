import React, { useState, useEffect } from "react"
import { getNextRace } from "../data/seasons-data"
import "../styles/next-race.css"
import "../styles/races.css"

const NextRace = ({ formatDate }) => {
  const [nextRace, setNextRace] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSeason = async () => {
      try {
        const data = await getNextRace()
        setNextRace(data)
        setLoading(false)
      } catch (error) {
        setError("Error fetching data.")
        setLoading(false)
        console.error("Error fetching current season:", error)
      }
    }
    fetchSeason()
  }, [])

  useEffect(() => {
    if (nextRace) {
      const date = new Date(nextRace.date + " " + nextRace.time)
      const localHour = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
      if (localHour !== nextRace.localTime) {
        setNextRace((prevRace) => ({ ...prevRace, localTime: localHour }))
      }
    }
  }, [nextRace])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!nextRace) return <div>No upcoming race found.</div>

  const convertToLocaleTime = (time) => {
  const date = new Date(nextRace.date + " " + time)
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="next-race-container">
      <div className="info">
        <p className="round">ROUND {nextRace.round} - UP NEXT</p>
        <h3 className="circuit">
          {nextRace.raceName} {nextRace.season}
        </h3>
        <p>{nextRace?.Circuit?.circuitName || ""}</p>
      </div>
      <div className="sessions-container">
        {nextRace.FirstPractice && (
          <p className="sessions-data">
            <span>PRACTICE 1 </span>
            <span className="date-info">{formatDate(nextRace.FirstPractice.date)}</span>
            <span className="time">{convertToLocaleTime(nextRace.FirstPractice.time)}</span>
          </p>
        )}
        {nextRace.SecondPractice && (
          <p className="sessions-data">
            <span>PRACTICE 2 </span>
            <span className="date-info">{formatDate(nextRace.SecondPractice.date)}</span>
            <span className="time">{convertToLocaleTime(nextRace.SecondPractice.time)}</span>
          </p>
        )}
        {nextRace.ThirdPractice && (
          <p className="sessions-data">
            <span>PRACTICE 3 </span>
            <span className="date-info">{formatDate(nextRace.ThirdPractice.date)}</span>
            <span className="time">{convertToLocaleTime(nextRace.ThirdPractice.time)}</span>
          </p>
        )}
        {nextRace.Qualifying && (
          <p className="sessions-data">
            <span>QUALIFYING </span>
            <span className="date-info">{formatDate(nextRace.Qualifying.date)}</span>
            <span className="time">{convertToLocaleTime(nextRace.Qualifying.time)}</span>
          </p>
        )}
        {nextRace.Sprint && (
          <p className="sessions-data">
            <span>SPRINT </span>
            <span className="date-info">{formatDate(nextRace.Sprint.date)}</span>
            <span className="time">{convertToLocaleTime(nextRace.Sprint.time)}</span>
          </p>
        )}
  <p className="sessions-data">
          <span>RACE </span>
          <span className="date-info">{formatDate(nextRace.date)}</span>
          <span className="time">{nextRace.localTime}</span>
        </p>
      </div>
      <div className="location">
  <span>{nextRace?.Circuit?.Location?.locality}, {nextRace?.Circuit?.Location?.country}</span>
      </div>
    </div>
  )
}

export default NextRace
