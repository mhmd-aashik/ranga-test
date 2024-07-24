import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { networkBot } from "@/constants";
import Image from "next/image";

const DropDownSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-full rounded-full border mt-4 border-[#CA62F6] bg-[#000] text-gray-500">
        <SelectValue placeholder="Select Your Volume Bot" />
      </SelectTrigger>
      <SelectContent className="rounded-[20px] border-[#CA62F6] !bg-[#000]">
        {networkBot.map((bot) => (
          <SelectGroup
            key={bot.id}
            className="hover:bg-blue-500 rounded-[10px]"
          >
            <SelectItem value={bot.name} className="cursor-pointer">
              <div className="flex items-center gap-4">
                <Image
                  src={bot.image}
                  alt={bot.name}
                  height={100}
                  width={100}
                  className="max-h-7 max-w-7"
                />
                <h3 className="text-white">{bot.name}</h3>
              </div>
            </SelectItem>
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DropDownSelect;
