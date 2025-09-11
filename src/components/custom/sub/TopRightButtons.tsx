import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import React from "react";
import { Github, UserRound } from "lucide-react";
import { combinedInformation } from "@/lib/DynamicValues";
import { IRoutedSection } from "@/lib/Models";
import { getValueAtIndex, scrollToView } from "@/lib/utils";
import { Amplitude, amplitudeEvents } from "@/lib/Amplitude";

interface Props {}

const TopRightButtons: React.FC<Props> = () => {
  const gotoTop = () => {
    Amplitude.trackCustomEvent(amplitudeEvents.clicked_on_goto_top, {});
    const item = getValueAtIndex(combinedInformation.routes, 0) as IRoutedSection;
    scrollToView(`section-${item.name.toLowerCase()}`);
  };

  return (
    <Card className="w-full h-12">
      <CardContent className="p-1 flex flex-row h-full items-center justify-between">
        {/* Person icon + Portfolio title with left margin */}
        <div className="flex flex-row items-center gap-x-2 ml-3">
          <UserRound className="h-4 w-4" />
          <h1
            className="text-sm font-bold tracking-wider cursor-pointer"
            onClick={gotoTop}
          >
            Portfolio
          </h1>
        </div>

        {/* GitHub button */}
        <div className="flex flex-row items-center gap-x-2">
          <Button
            variant="ghost"
            size="icon"
            title="Source code"
            onClick={() => {
              const url = `https://github.com/Jaganr07`;
              Amplitude.trackCustomEvent(amplitudeEvents.clicked_github_icon, { url });
              window.open(url, "_blank");
            }}
          >
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopRightButtons;
