new Promise((resolve, reject) => {
  setTimeout(resolve, 2000);
})
.then(
  () => {throw "up"},
  error => console.log("then", error)
)
.catch(
  error => {
    console.log("catch", error);
    // throw "again???";
  }
).catch(
  error => {
    console.log("catch", error);
    throw "again???";
  }
);
