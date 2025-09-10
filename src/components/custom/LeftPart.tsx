import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { PersonStanding } from "lucide-react";
import { cn, scrollToView } from "@/lib/utils";
import { combinedInformation } from "@/lib/DynamicValues";

const LeftPart: React.FC = () => {
  const [isHovered, setHovered] = useState(false);

  const customRoutes = ["About", "Skills", "Projects", "Contact"];

  return (
    <Card className="lg:w-1/3 xl:w-1/3 2xl:w-1/4 h-full p-0 m-0 lg:block hidden">
      <CardContent className="p-0 m-0 flex flex-col h-full justify-between">
        {/* Person Icon and Info */}
        <div className="flex flex-col w-full items-center p-10">
          <div
            className="w-28 h-28 border-2 rounded-md my-8 p-2 relative cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <PersonStanding
              className={cn("w-full h-full", isHovered ? "glowing-person-icon" : "")}
            />
          </div>

          <h1 className="text-xl font-extrabold tracking-normal">
            {combinedInformation.initialInformation.name}
          </h1>

          <h1 className="text-sm font-bold tracking-normal mt-0.5">
            {combinedInformation.initialInformation.occupation}
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col w-full p-3 gap-y-2">
          {customRoutes.map((item) => {
            const onButtonClicked = () => {
              scrollToView(`section-${item.toLowerCase()}`);
            };

            return (
              <Button
                variant="outline"
                onClick={onButtonClicked}
                key={item}
                className="transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                {item}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeftPart;
