async function analyzeRepo() {

  const githubUrl =
    document.getElementById("githubUrl").value;

  if (!githubUrl) {
    alert("Please enter GitHub URL");
    return;
  }

  document
    .getElementById("loading")
    .classList.remove("hidden");

  document
    .getElementById("result")
    .classList.add("hidden");

  try {

    const response = await fetch(
      "https://aadya.app.n8n.cloud/webhook-test/analyze-repo",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          github_url: githubUrl,
        }),
      }
    );

    const data = await response.json();

    document
      .getElementById("result")
      .classList.remove("hidden");

    document.getElementById("summary").innerText =
      data.summary || "No summary available";

    document.getElementById("tech").innerText =
      data.techStack || "No tech stack found";

    document.getElementById("linkedin").innerText =
      data.linkedinPost || "No LinkedIn post generated";

    document.getElementById("resume").innerText =
      data.resumePoints || "No resume points generated";

  }

  catch (error) {

    console.log(error);

    alert("Something went wrong");

  }

  finally {

    document
      .getElementById("loading")
      .classList.add("hidden");

  }

}