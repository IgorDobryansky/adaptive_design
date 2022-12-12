export function createElement(name, className) {
  const newElement = document.createElement(name);
  newElement.className = className;
  return newElement;
}
