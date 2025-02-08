export const handleCursorHoverStop = () => {
  const cursorWrapper = document.querySelector(".cursor-wrapper");
  if (cursorWrapper) {
    cursorWrapper.classList.remove("hovering");
    document.body.classList.remove("hovering");
    cursorWrapper.classList.remove("hovering-text");
    document.body.classList.remove("hovering-text");
  }
};

export const handleCursorHoverStart = () => {
  const cursorWrapper = document.querySelector(".cursor-wrapper");
  if (cursorWrapper) {
    cursorWrapper.classList.remove("hovering-text");
    document.body.classList.remove("hovering-text");
    cursorWrapper.classList.add("hovering");
    document.body.classList.add("hovering");
  }
};

export const handleCursorHoverStartText = () => {
  const cursorWrapper = document.querySelector(".cursor-wrapper");
  if (cursorWrapper) {
    cursorWrapper.classList.remove("hovering");
    document.body.classList.remove("hovering");
    cursorWrapper.classList.add("hovering-text");
    document.body.classList.add("hovering-text");
  }
};
