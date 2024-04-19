import OpenAI from 'openai';

export async function streamGenerateCode() {
    const openai = new OpenAI({
      apiKey: process.env['OPENAI_KEY'],
      baseURL: process.env['OPENAI_BASE_URL'],
    });
  
    const stream = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-1106',
      temperature: 0,
      max_tokens: 4096,
      response_format: { type: "json_object" },
      messages:  [
        {"role": "system", "content": "You are a helpful assistant designed to output JSON."},
        {"role": "user", "content": "Who won the world series in 2020?"}
      ]
    });
    let full_response = '';

    return full_response;
  }
  