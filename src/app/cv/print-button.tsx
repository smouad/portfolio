"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrintButton() {
  return (
    <Button
      size="sm"
      className="rounded-full gap-1.5 px-4 print:hidden"
      onClick={() => window.print()}
    >
      <Printer className="size-3.5" aria-hidden />
      Save as PDF
    </Button>
  );
}
