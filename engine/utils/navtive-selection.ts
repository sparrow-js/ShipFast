"use client"

let nativeSelectionEnabled = true;
const preventSelection = (e: Event) => {
  if (nativeSelectionEnabled) {
    return null;
  }
  e.preventDefault();
  e.stopPropagation();
  return false;
};
window.document.addEventListener('selectstart', preventSelection, true);
window.document.addEventListener('dragstart', preventSelection, true);

export function setNativeSelection(enableFlag: boolean) {
  nativeSelectionEnabled = enableFlag;
}
