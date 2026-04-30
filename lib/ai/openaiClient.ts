export function getOpenAIConfig() {
  return { apiKeyConfigured: !!process.env.OPENAI_API_KEY, model: process.env.OPENAI_MODEL ?? 'placeholder-model' };
}
