function sayHello(name) {
  console.log("Hello " + name);
}

// Global   - no window
// __dirname    - path to current directory
// __filename   - file name
// require      - function to use module (CommonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed

setInterval(() => {
  console.log("hello world");
}, 1000);
