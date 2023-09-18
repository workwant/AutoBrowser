keyboard.hotkey:ctrl,c
let.str:clipboard.value
let.url.format:"https://www.google.com/search?q={1}",[let.str]
os.open:let.url