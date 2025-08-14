"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

interface FocusListElement {
  id: number;
  text: string;
  completed: boolean;
}
const workTasks: FocusListElement[] = [
  { id: 1, text: "Finish reading React docs", completed: false },
  { id: 2, text: "Review pull requests", completed: true },
  { id: 3, text: "Prepare sprint report", completed: false },
];

const personalTasks: FocusListElement[] = [
  { id: 1, text: "Go for a 30-minute run", completed: true },
  { id: 2, text: "Organize workspace", completed: false },
  { id: 3, text: "Plan weekend grocery list", completed: false },
];
const Focus = () => {
  const [mainFocus, setMainFocus] = useState<FocusListElement[]>(workTasks);
  const [extras, setExtras] = useState<FocusListElement[]>(personalTasks);
  const [input, setInput] = useState("");

  const handleMainFocus = (task: string) => {
    const t = task.trim();
    if (!t) return;
    setMainFocus((prev) => {
      const nextId = (prev[prev.length - 1]?.id ?? 0) + 1;
      return [...prev, { id: nextId, text: t, completed: false }];
    });
    setInput("");
  };
  const handleExtras = (task: string) => {
    const t = task.trim();
    if (!t) return;
    setExtras((prev) => {
      const nextId = (prev[prev.length - 1]?.id ?? 0) + 1;
      return [...prev, { id: nextId, text: t, completed: false }];
    });
    setInput("");
  };
  const handleCheckBoxMainFocus = (boxId: number) => {
    setMainFocus((prev) =>
      prev.map((item) =>
        item.id === boxId ? { ...item, completed: !item.completed } : item
      )
    );
  };
  const handleCheckBoxExtras = (boxId: number) => {
    setExtras((prev) =>
      prev.map((item) =>
        item.id === boxId ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <div className="flex flex-col">
      <div className="flex gap-3">
        <Input
          type="text"
          placeholder="Add Tasks"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></Input>
        <Button variant="destructive" onClick={() => handleMainFocus(input)}>
          {" "}
          Main Focus
        </Button>
        <Button className="text-black" onClick={() => handleExtras(input)}>
          {" "}
          Extras
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-xl"> Main tasks</h4>
        {mainFocus.map((i) => (
          <div key={i.id} className="flex gap-2">
            <Checkbox
              id={i.id.toString()}
              checked={i.completed}
              onChange={() => handleCheckBoxMainFocus(i.id)}
            ></Checkbox>
            <Label htmlFor={i.id.toString()}>{i.text} </Label>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-xl"> Extras</h4>
        {extras.map((i) => (
          <div key={i.id} className="flex gap-2">
            <Checkbox
              id={i.id.toString()}
              checked={i.completed}
              onChange={() => handleCheckBoxExtras(i.id)}
            ></Checkbox>
            <Label htmlFor={i.id.toString()}>{i.text} </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Focus;
