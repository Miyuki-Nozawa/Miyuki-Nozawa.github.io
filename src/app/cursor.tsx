export const handleCursorHoverStop = () => {
  const cursorWrapper = document.querySelector(".cursor-wrapper");
  if (cursorWrapper) {
    cursorWrapper.classList.remove("hovering");
  }
};

export const handleCursorHoverStart = () => {
  const cursorWrapper = document.querySelector(".cursor-wrapper");
  if (cursorWrapper) {
    cursorWrapper.classList.add("hovering");
  }
};
