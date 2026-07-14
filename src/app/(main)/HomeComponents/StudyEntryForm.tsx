"use client";

import { useState } from "react";

export default function StudyEntryForm() {
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [category, setCategory] = useState("coding");

  const submitHandler = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log(date, hours, minutes, category);
  };

  return (
    <section className="border  border-zinc-900 rounded-2xl w-full p-8 max-w-lg  bg-zinc-900">
      <header>
        <h2 className="text-2xl font-semibold">Study Entry</h2>
        <div className="text-zinc-400 text-sm">
          Log the date and time you studied
        </div>
      </header>
      <form onSubmit={submitHandler} className=" flex flex-col gap-6 ">
        <div className="flex flex-col">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-button"
            required
          />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="hours">Hours</label>
            <input
              type="number"
              id="hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              min={0}
              max={24}
              className="input-button"
              required
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="minutes">Minutes</label>
            <input
              type="number"
              id="minutes"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              min={0}
              max={60}
              className="input-button"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              className="input-button"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="coding">Coding</option>
              <option value="dsa">DSA</option>
              <option value="writing">Writing</option>
              <option value="reading">Reading</option>
              <option value="assignment">Assignment</option>
              <option value="other">other</option>
            </select>
          </div>
        </div>

        <input type="submit" className="primary-button" />
      </form>
    </section>
  );
}
