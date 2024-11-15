import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

async function converse(): Promise<void> {
  const chatCompletion = await client.chat.completions.create({
    messages: [
      {
        role: 'user',
        content:
          'In the context of Hamlet, what does to be or not to be refer to?',
      },
    ],
    model: 'gpt-3.5-turbo',
  });
  console.log(chatCompletion.choices[0].message);
}

converse();
