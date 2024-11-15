'use strict';
async function converse() {
  const apiKey = prompt('Enter API Key');
  if (!apiKey) return;
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const clientPrompt = prompt('Ask ChatGPT something:'); // 'Summarize in 1 sentence the book "1984"';
  if (!clientPrompt) return;
  document.querySelector('#prompt').textContent = clientPrompt;
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: clientPrompt }],
      }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const summary = await response.json();
    const promptResponse = summary.choices[0].message.content;
    console.log(promptResponse);
    document.querySelector('#response').textContent = promptResponse;
  } catch {
    console.error('Failed to retrieve AI summary:', Error);
  }
}
converse();
