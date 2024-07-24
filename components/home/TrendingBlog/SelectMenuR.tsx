import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const selectDetail = [
  {
    id: 1,
    title: "Solana Volume Booster",
    value: "solona",
  },
  {
    id: 2,
    title: "Base Volume Booster",
    value: "base",
  },
  ,
  {
    id: 3,
    title: "Moonshot Volume Booster",
    value: "moonshot",
  },
  {
    id: 4,
    title: "TON Volume Booster",
    value: "ton",
  },
];

export function SelectDMenuR() {
  return (
    <Select>
      <SelectTrigger className="w-full rounded-full border-[#40E9FD] text-gray-600">
        <SelectValue placeholder="Solana Volume Booster" />
      </SelectTrigger>
      <SelectContent className="bg-[#101432] text-white rounded-[20px] border-[#40E9FD]">
        {selectDetail.map((item: any) => (
          <SelectGroup key={item.id}>
            <SelectItem
              value={item.value}
              style={{
                transition: "background-color 0.3s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#5563FA")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#101432")
              }
            >
              <SelectLabel>{item.title}</SelectLabel>
            </SelectItem>
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
