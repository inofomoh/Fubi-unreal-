
async function generate() {
  const prompt = document.getElementById("prompt").value;
  const outputType = document.getElementById("outputType").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Loading...";

  try {
    const response = await fetch("https://fubi-backend-3.onrender.com/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt, output_type: outputType })
    });

    const data = await response.json();
    if (data && data.output_url) {
      resultDiv.innerHTML = `<a href="${data.output_url}" target="_blank">View Result</a>`;
    } else {
      resultDiv.innerHTML = "Failed to generate output.";
    }
  } catch (error) {
    resultDiv.innerHTML = "Error: " + error.message;
  }
}
