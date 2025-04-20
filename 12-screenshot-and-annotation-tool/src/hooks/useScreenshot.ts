import html2canvas from "html2canvas";

export async function useScreenshot(id = "screenshot-area") {
  const element = document.getElementById(id);
  if (!element) return null;

  const canvas = await html2canvas(element);
  return canvas.toDataURL("image/png");
}
