import { SliderInstance } from "keen-slider";

export function AutoplayPlugin(
  slider: any,
  { interval = 3000 }: { interval?: number } = {}
) {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  function clearNextTimeout() {
    if (timeout) clearTimeout(timeout);
  }

  function nextTimeout() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      slider.next();
    }, interval);
  }

  slider.on("created", () => {
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
} 