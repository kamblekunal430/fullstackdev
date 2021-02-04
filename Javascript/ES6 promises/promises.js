/*
function fakeDownload(done) {
  setTimeout(function () {
    let data = "hello world";
    done(data);
  }, 1000);
}

fakeDownload(function (data) {
  console.log("Downloaded data is");
  console.log(data);
})
*/

function promiseDownload(correct) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let data = "hello world";
      if (correct) {
        resolve(data);
      } else {
        reject(new Error("Could not download data"));
      }
    }, 1000);
  });
}

/*

promiseDownload(false)
  .then(function (data) {
    console.log("Downloaded data is");
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
*/

let download = promiseDownload(true);

download.catch(function (err) {
  console.log(err);
});

setTimeout(function () {
  download.then(function (data) {
    console.log("Downloaded datas is");
    console.log(data);
  });
}, 3000);
