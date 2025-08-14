"use client";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";

const CalenderLook = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
    </div>
  );
};

export default CalenderLook;
