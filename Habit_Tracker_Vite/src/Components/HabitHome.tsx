import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons"; // ✅ this is free
import { useState } from "react";

function HabitHome() {
  const [selected, setSelected] = useState("All");

  const dummy = [
    "Morning Meditation",
    "Morning Meditation",
    "Morning Meditation",
    "Morning Meditation",
  ];

  const filters = [
    "All",
    "Completed",
    "Pending",
    "Welness",
    "Learning",
    "Fitness",
    "Health",
    "Hobby",
  ];

  return (
    <>
      <div className="w-full pt-20">
        <div className="max-w-5xl mx-20 pt-3 flex flex-row justify-between">
          <h1 className=" font-sans font-extrabold text-2xl">Your Habits</h1>
          <button className=" border-1 bg-black p-2 rounded-xl font-light text-white text-m">
            <FontAwesomeIcon
              icon={faSquarePlus}
              className="text-l text-white mr-2"
            />
            Add Habit
          </button>
        </div>

        <div className="max-w-5xl mx-20 mt-5 pt-5 p-8 rounded-lg shadow-2xl w-full border border-gray-00">
          <div className="flex flex-row justify-between items-center">
            {/* Left side: Heading */}
            <h1 className="font-sans font-bold text-xl">My Habits</h1>

            {/* Right side: Button group */}
            <div className="flex space-x-3">
              <button className="border border-gray-300 p-2 rounded-xl">
                <FontAwesomeIcon icon={faFilter} style={{ color: "#000000" }} />{" "}
                Filter
              </button>
              <button className="bg-black p-2 rounded-xl font-light text-white text-m">
                <FontAwesomeIcon icon={faSquarePlus} className="mr-2" /> New
                Habit
              </button>
            </div>
          </div>

          <div className=" max-w-fit rounded-xl bg-gray-100 mt-5 h-10 flex flex-row gap-x-5 px-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelected(filter)}
                className={`px-3 py-1 rounded-md transition-all ${
                  selected === filter
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "text-gray-500"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="max-w-5xl mt-5 pt-5 p-8  w-full">
            {dummy.map((dumm) => (
              <div
                key={dumm}
                className=" rounded-xl border-1 p-3 shadow-l border-gray-200 w-full mt-5 max-h-fit flex flex-row items-center gap-x-5 px-3"
              >
                <input type="checkbox" className="" />
                <div>
                  <h1 className="font-bold text-l">{dumm}</h1>
                  <div className="flex flex-row">
                    <button className="border-1 text-[12px] rounded-[9px] font-medium p-1 border-gray-200">
                      Daily
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HabitHome;
