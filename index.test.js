function sample_test(){
    const message = "SUCCESS";
    console.log(message);
    return message;
  }

describe("master test", () => {
  test("sample_test", () => {
    let response = sample_test();
    expect(response).toEqual("SUCCESS")
  })
})