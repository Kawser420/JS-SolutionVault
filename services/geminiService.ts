import { GoogleGenAI } from "@google/genai";

// This service follows the provided @google/genai coding guidelines.

// Initialize the GoogleGenAI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

/**
 * Fetches an explanation for a given JavaScript solver function from the Gemini API.
 * @param problemTitle The title of the problem the function solves.
 * @param solverName The name of the solver function.
 * @param code The source code of the solver function.
 * @returns A promise that resolves to a string containing the explanation.
 */
export const getExplanation = async (problemTitle: string, solverName: string, code: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';

    const prompt = `
      As an expert JavaScript developer and teacher, explain the following JavaScript function.
      The function is named \`${solverName}\` and it solves the problem: "${problemTitle}".

      Function Code:
      \`\`\`javascript
      ${code}
      \`\`\`

      Your explanation should be:
      1.  **Clear and concise:** Easy for an intermediate JS developer to understand.
      2.  **Step-by-step:** Break down the logic.
      3.  **Use Markdown:** Use **bold** for emphasis and \`code\` for inline code snippets or variable names. Do not use headers. Start directly with the explanation.
      4.  **Focus on the "how" and "why":** Explain the purpose of key lines or blocks of code.
    `;

    // Generate content using the Gemini API.
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    // Extract the text from the response as per the guidelines.
    const explanation = response.text;
    
    if (!explanation) {
      return "Could not generate an explanation at this time.";
    }

    return explanation;

  } catch (error) {
    console.error("Error fetching explanation from Gemini API:", error);
    // Provide a user-friendly error message.
    return "An error occurred while fetching the AI explanation. Please check your API key and network connection.";
  }
};