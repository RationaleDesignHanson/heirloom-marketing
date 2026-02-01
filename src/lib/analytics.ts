export type TrackProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: TrackProps }) => void;
    posthog?: { capture: (eventName: string, props?: TrackProps) => void };
  }
}

export function track(eventName: string, props?: TrackProps) {
  if (typeof window === "undefined") return;

  if (typeof window.plausible === "function") {
    window.plausible(eventName, { props });
    return;
  }

  if (window.posthog && typeof window.posthog.capture === "function") {
    window.posthog.capture(eventName, props);
  }
}
