const axios = require('axios');

async function test() {
  try {
    const response = await axios.post('http://127.0.0.1:5100/v1/images/generations', {
      model: "nanobanana",
      prompt: "钱夫人(女性，约50岁，富态端庄，常着华丽长裙，发髻高盘，佩戴金饰。气质威严，面色常带不满。)端坐厅堂高椅，眉间紧蹙",
      ratio: "16:9",
      resolution: "1k",
      sample_strength: 0.5,
      response_format: "url"
    }, {
      headers: {
        'Authorization': 'Bearer us-test-token-123', // Use US prefix to trigger US logic if needed, or just normal token
        'Content-Type': 'application/json'
      }
    });
    console.log("Response:", response.data);
  } catch (error) {
    if (error.response) {
      console.log("Error Status:", error.response.status);
      console.log("Error Data:", error.response.data);
    } else {
      console.log("Error:", error.message);
    }
  }
}

test();
