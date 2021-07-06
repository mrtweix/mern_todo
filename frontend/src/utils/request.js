const callApi = async (api, data = null, type = "GET") => {
  const options = {
    method: type,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  };
  if (data) {
    options.body = JSON.stringify(data);
  }
  const url = `${process.env.REACT_APP_BASEURL}${api}`;
  const res = await fetch(url, options);
  const result = await checkResult(res);
  return result;
};

async function checkResult(res) {
  return await res.json();
}

export default callApi;
