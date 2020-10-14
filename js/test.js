const Promise = require("./promise");

const http = require("http");
const baseUrl = "http://127.0.0.1:3000";
function ajax(type = "get", url, succeed, fail) {
  if (type === "get") {
    http
      .get(
        baseUrl + url,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        (res) => {
          const { statusCode } = res;
          const contentType = res.headers["content-type"];

          let error;
          if (statusCode !== 200) {
            error = new Error(`请求失败，状态码：${statusCode}`);
          } else if (!/^application\/json/.test(contentType)) {
            error = new Error(
              `无效的 content-type，应该是 'application/json，现在是：${contentType}'。`
            );
          }

          if (error) {
            fail(error.message);
            res.resume();
            return;
          }
          res.setEncoding("utf8");
          let rawData = "";
          res.on("data", (chunk) => {
            rawData += chunk;
          });
          res.on("end", () => {
            try {
              const parsedData = JSON.parse(rawData);
              succeed(parsedData);
            } catch (e) {
              fail(e.message);
            }
          });
        }
      )
      .on("error", (e) => {
        console.error(`异常：${e.message}`);
        fail(e.message);
      });
  }
}
const p = new Promise(function (resolve, reject) {
  ajax(
    "get",
    "/test",
    (data) => resolve(JSON.stringify(data)),
    (e) => reject(e)
  );
});

p.then(
  function rs0(value) {
    console.log({ value }, "rs0");
  },
  function rj0(reason) {
    console.log({ reason }, "rj0");
  }
);

// p.then(
//   function rs1(value) {
//     console.log({ value }, "rs1");
//   },
//   function rj1(reason) {
//     console.log({ reason }, "rj1");
//   }
// );
