const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// Keep the portrait inline until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute(
  "aria-label",
  "A friendly face with a blue-to-purple gradient and a curved smile",
);

// Branch C: Create a gradient using two different colors.
const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

const gradient = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "linearGradient",
);
gradient.setAttribute("id", "face-gradient");
gradient.setAttribute("x1", "0%");
gradient.setAttribute("y1", "0%");
gradient.setAttribute("x2", "100%");
gradient.setAttribute("y2", "100%");

const firstColor = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
firstColor.setAttribute("offset", "0%");
firstColor.setAttribute("stop-color", "#60a5fa");
gradient.append(firstColor);

const secondColor = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
secondColor.setAttribute("offset", "100%");
secondColor.setAttribute("stop-color", "#a855f7");
gradient.append(secondColor);

defs.append(gradient);
face.append(defs);

// Draw the face with the gradient.
const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "url(#face-gradient)");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

// Left eye.
const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

// Right eye.
const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

// Nose.
const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

// Branch C: Use a quadratic Bézier curve for the smile.
const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
mouth.setAttribute("d", "M 65 130 Q 100 175 135 130");
mouth.setAttribute("fill", "none");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "5");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

portrait.append(face);

// Keep the original Spin functionality.
spin.addEventListener("click", () => {
  // Restart rather than accumulate animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();

  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
