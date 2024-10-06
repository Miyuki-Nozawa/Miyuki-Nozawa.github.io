export const handleCursorHoverStop = () => {
  const cursorWrapper = document.querySelector(".cursor-wrapper");
  if (cursorWrapper) {
    cursorWrapper.classList.remove("hovering");
    document.body.classList.remove("hovering");
  }
};

export const handleCursorHoverStart = () => {
  const cursorWrapper = document.querySelector(".cursor-wrapper");
  if (cursorWrapper) {
    cursorWrapper.classList.add("hovering");
    document.body.classList.add("hovering");
  }
};
