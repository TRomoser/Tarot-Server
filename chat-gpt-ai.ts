// const url = 'https://spur-chatgpt.openai.azure.com/openai/deployments/spur-persona-driven-chatbot/chat/completions?api-version=2023-05-15'
// const body = {"messages":[
//     {"role": "system", "content": "You are a helpful assistant."},
//     {"role": "assistant", "content": "Hi, how can I help?"},
//     {"role": "user", "content": "Does Azure OpenAI support customer managed keys?"},
//     {"role": "assistant", "content": "Yes, customer managed keys are supported by Azure OpenAI."},
//     {"role": "user", "content": "Do other Azure AI services support this too?"}
// ]};

// async function submitGPTPrompt(messages) {
//     const response = await fetch(url, {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         headers: {
//             "Content-Type": "application/json",
//             "api-key": process.env.AZURE_GPT_KEY
//         },
//         body: JSON.stringify(messages), // body data type must match "Content-Type" header
//     });

//     return response.json();
// }

// module.exports = {
//   submitGPTPrompt
// }
