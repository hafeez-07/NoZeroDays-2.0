"use client";

import { useState } from "react";

export default function StudyEntryForm() {
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const submitHandler = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log(date, hours, minutes);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="border flex flex-col gap-6 border-zinc-900 rounded-2xl w-full p-8 max-w-lg  bg-zinc-900"
    >
      <div>
        <h2 className="text-2xl font-semibold">Study Entry</h2>
        <div className="text-zinc-400 text-sm">Log the date and time you studied</div>
      </div>

      <div className="flex flex-col">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input-button"
          required
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col flex-1">
          <label>Hours</label>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            min={0}
            max={24}
            className="input-button"
            required
          />
        </div>
        <div className="flex flex-col flex-1">
          <label>Minutes</label>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            min={0}
            max={60}
            className="input-button"
            required
          />
        </div>
      </div>

      <input type="submit" className="primary-button" />
    </form>
  );
}
