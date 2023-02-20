const url1 = "https://example.com/api/endpoint1";
const url2 = "https://example.com/api/endpoint2";
const url3 = "https://example.com/api/endpoint3";

const data1 = { key1: "value1" };
const data2 = { key2: "value2" };
const data3 = { key3: "value3" };

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};

const request1 = fetch(url1, options);
const request2 = fetch(url2, options);
const request3 = fetch(url3, options);

Promise.all([request1, request2, request3])
  .then((responses) => {
    console.log("All requests resolved successfully");
    // You can access the responses of each request as follows:
    console.log("Response 1: ", responses[0]);
    console.log("Response 2: ", responses[1]);
    console.log("Response 3: ", responses[2]);
  })
  .catch((error) => {
    console.error("Error making requests: ", error);
  });
