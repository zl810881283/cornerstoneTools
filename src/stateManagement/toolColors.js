let defaultColor = 'white',
  activeColor = 'greenyellow',
  fillColor = 'transparent';

function setFillColor(color) {
  fillColor = color;
}

function getFillColor() {
  return fillColor;
}

function setToolColor(color) {
  defaultColor = color;
}

function getToolColor() {
  return defaultColor;
}

function setActiveColor(color) {
  activeColor = color;
}

function getActiveColor() {
  return activeColor;
}

function getColorIfActive(data) {
  if (data.active === true) {
    return data.activeColor || activeColor;
  }

  return data.color || activeColor;
}

const toolColors = {
  setFillColor,
  getFillColor,
  setToolColor,
  getToolColor,
  setActiveColor,
  getActiveColor,
  getColorIfActive,
};

export default toolColors;
