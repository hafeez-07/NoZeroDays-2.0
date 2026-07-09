"use client";

type Habit = {
  id: string;
  name: string;
  streak: number;
  days: boolean[];
};

import { Plus } from "lucide-react";
import { useState } from "react";

export default function HabitCard() {
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: crypto.randomUUID(),
      name: "morning-walk",
      streak: 10,
      days: [false, false, false, false, false, false, false],
    },
    {
      id: crypto.randomUUID(),
      name: "drink-3l-water",
      streak: 15,
      days: [false, false, false, false, false, false, false],
    },
    {
      id: crypto.randomUUID(),
      name: "workout",
      streak: 3,
      days: [false, false, false, false, false, false, false],
    },
  ]);

  const toggleHabit = (clickedHabitId: string, dayIndex: number) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id != clickedHabitId) {
          return habit;
        }
        return {
          ...habit,
          days: habit.days.map((day, index) => {
            if (index != dayIndex) {
              return day;
            }
            return !day;
          }),
        };
      }),
    );
  };

  return (
    <div
      id="habitCard"
      className="border border-zinc-800 rounded-2xl bg-zinc-900 w-fit p-8"
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold">Habit Tracker</h2>
          <p className="text-sm text-zinc-400">
            This week - tap any cell to toggle
          </p>
        </div>

        <button className="flex items-center  gap-1 bg-zinc-700 rounded-2xl px-2 py-1">
          <Plus size={16} />
          Add Habit
        </button>
      </div>

      <div className="mt-4 space-y-4 text-sm">
        <div className=" grid gap-2 grid-cols-[1fr_1fr_4fr] ">
          <div>Habit</div>
          <div className="text-center">Streak</div>
          <div className="flex gap-6 text-zinc-400">
            <div className="w-8">Sun</div>
            <div className="w-8">Mon</div>
            <div className="w-8">Tue</div>
            <div className="w-8">Wed</div>
            <div className="w-8">Thur</div>
            <div className="w-8">Fri</div>
            <div className="w-8">Sat</div>
          </div>
        </div>
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="grid gap-2 grid-cols-[1fr_1fr_4fr] items-center"
          >
            <div>{habit.name}</div>
            <div className="text-zinc-400 text-center">{habit.streak}d</div>
            <div className="flex gap-6 text-zinc-400">
              {habit.days.map((day, dayIndex) => (
                <button
                  key={dayIndex}
                  onClick={() => toggleHabit(habit.id, dayIndex)}
                  className={`toggle-button ${day ? "bg-emerald-400 border-emerald-200 flex justify-center items-center transition duration-300 ease-out " : ""}`}
                >
                  <div
                    className={`${day ? " bg-emerald-200 h-2 w-2 rounded-full" : ""}`}
                  ></div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
