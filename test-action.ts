"use server";

export async function TestServer() {
  try {
    const response = await fetch(
      "https://api-quattrus-main.qualitin.local/api/v1/Login",
      {
        method: "POST",
        body: JSON.stringify({
          username: "HENRIQUE",
          password: "123",
          company: "QUALITIN",
        }),
      }
    );
    console.log("reponse:::", response);

    const json = await response.json();

    console.log("json", json);

    return json;
  } catch (err) {
    console.log(err);
  }
}


export async function ushfduhsd() {
    try {
      const response = await fetch(
        "https://api-quattrus-main.qualitin.local/api/v1/Login",
        {
          method: "POST",
          body: JSON.stringify({
            username: "HENRIQUE",
            password: "123",
            company: "QUALITIN",
          }),
        }
      );
      console.log("reponse:::", response);
  
      const json = await response.json();
  
      console.log("json", json);
  
      return json;
    } catch (err) {
      console.log(err);
    }
  }

  export async function handleClick33(){
    const data = await fetch('https://api-quattrus-main.qualitin.local/api/v1/HealthCheck')
    console.log(data)
    const json = await data.json()
    console.log(json)
    return json
  }