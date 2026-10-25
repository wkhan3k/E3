import sunglassesUrl from "./assets/sunglasses.svg?no-inline";
import hatUrl from "./assets/hat.svg?no-inline";

const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// Build the complete face and return the SVG.
function buildFace(): SVGSVGElement {
  const svgNS = "http://www.w3.org/2000/svg";

  const face = document.createElementNS(svgNS, "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute(
    "aria-label",
    "A face wearing dark sunglasses and a teal hat",
  );

  // Create the head.
  const head = document.createElementNS(svgNS, "ellipse");
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "#f3cf87");
  head.setAttribute("stroke", "#302c29");
  head.setAttribute("stroke-width", "4");
  face.append(head);

  // Create the left eye.
  const leftEye = document.createElementNS(svgNS, "ellipse");
  leftEye.setAttribute("cx", "72");
  leftEye.setAttribute("cy", "82");
  leftEye.setAttribute("rx", "6");
  leftEye.setAttribute("ry", "9");
  leftEye.setAttribute("fill", "#302c29");
  face.append(leftEye);

  // Create the right eye.
  const rightEye = document.createElementNS(svgNS, "ellipse");
  rightEye.setAttribute("cx", "128");
  rightEye.setAttribute("cy", "82");
  rightEye.setAttribute("rx", "6");
  rightEye.setAttribute("ry", "9");
  rightEye.setAttribute("fill", "#302c29");
  face.append(rightEye);

  // Create the nose.
  const nose = document.createElementNS(svgNS, "line");
  nose.setAttribute("x1", "100");
  nose.setAttribute("y1", "96");
  nose.setAttribute("x2", "96");
  nose.setAttribute("y2", "112");
  nose.setAttribute("stroke", "#302c29");
  nose.setAttribute("stroke-width", "4");
  nose.setAttribute("stroke-linecap", "round");
  face.append(nose);

  // Create the mouth.
  const mouth = document.createElementNS(svgNS, "line");
  mouth.setAttribute("x1", "75");
  mouth.setAttribute("y1", "137");
  mouth.setAttribute("x2", "125");
  mouth.setAttribute("y2", "137");
  mouth.setAttribute("stroke", "#302c29");
  mouth.setAttribute("stroke-width", "4");
  mouth.setAttribute("stroke-linecap", "round");
  face.append(mouth);

  // Branch B: Add sunglasses.
  // File: src/assets/sunglasses.svg
  const sunglasses = document.createElementNS(svgNS, "image");
  sunglasses.setAttribute("href", sunglassesUrl);
  sunglasses.setAttribute("x", "44");
  sunglasses.setAttribute("y", "65");
  sunglasses.setAttribute("width", "112");
  sunglasses.setAttribute("height", "42");
  face.append(sunglasses);

  // Branch B: Add the teal hat.
  // File: src/assets/hat.svg
  const hat = document.createElementNS(svgNS, "image");
  hat.setAttribute("href", hatUrl);
  hat.setAttribute("x", "17");
  hat.setAttribute("y", "0");
  hat.setAttribute("width", "166");
  hat.setAttribute("height", "76");
  face.append(hat);

  return face;
}

// Build and mount the completed face.
const face = buildFace();
portrait.append(face);

// Keep the Spin functionality outside buildFace().
spin.addEventListener("click", () => {
  // Cancel previous animations before starting another.
  for (const animation of face.getAnimations()) {
    animation.cancel();
  }

  face.animate(
    [
      { transform: "rotate(0deg)" },
      { transform: "rotate(360deg)" },
    ],
    {
      duration: 800,
      easing: "ease-in-out",
    },
  );
});
