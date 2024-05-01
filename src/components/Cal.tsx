"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalComponent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({} as string);
      cal("ui", {
        styles: { branding: { brandColor: "#FABF1A" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      calLink="lifafa-works/30min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
