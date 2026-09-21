"use client";

import { useEffect, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export function OfflineReady() {
  const online = useSyncExternalStore(subscribe, () => navigator.onLine, () => true);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js").catch(() => undefined);
    }
  }, []);

  return (
    <p className={online ? "network-status" : "network-status is-offline"} role="status">
      <span aria-hidden="true" />
      {online
        ? "Online · guidance will be kept available after this visit"
        : "Offline · showing previously saved guidance; official links need a connection"}
    </p>
  );
}
