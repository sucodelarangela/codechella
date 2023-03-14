import html2canvas from "html2canvas";

export async function handleScreenshot(id) {
  const canvas = await html2canvas(document.getElementById(id), {
    backgroundColor: '#141414',
    useCORS: true
  });
  const base64image = canvas.toDataURL('image/png');
  const downloadLink = document.createElement('a');
  downloadLink.href = base64image;
  downloadLink.download = `${id}.png`;
  downloadLink.click();
}
