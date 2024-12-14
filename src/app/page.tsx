"use client";

import { Button, Cell, Section } from "@telegram-apps/telegram-ui";
import WebApp from "@twa-dev/sdk";
import { useState } from "react";

export default function Home() {
  const [val, setVal] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Button size="l" onClick={() => setVal(val + 1)}>
        Increment
      </Button>
      
      <Section header="Counter">
        <Cell>{val}</Cell>
      </Section>

      <Button size="l" onClick={() => setVal(val - 1)}>
        Decrement
      </Button>

      {WebApp.initData ? (
        <Button size="l" onClick={() => WebApp.showAlert("Alert")}>
          Show alert
        </Button>
      ) : null}
    </div>
  );
}
