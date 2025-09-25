import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(10, "Description should be at least 10 characters"),
  price: z.number().positive("Price must be positive"),
  category: z.string().optional().default("main")
});

export class AIProductExtractor {
  private genAI: GoogleGenerativeAI;

  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);
  }

  async extractFromImage(imageBuffer: Buffer): Promise<z.infer<typeof productSchema>> {
    try {
      // For demo purposes, we'll simulate AI extraction
      // In real implementation, you would use Google Vision API + LangChain
      
      // Simulate AI processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock AI response - replace with actual AI implementation
      const mockProduct = {
        name: "Delicious Burger",
        description: "Juicy beef burger with fresh vegetables and special sauce",
        price: 45000,
        category: "main"
      };

      return productSchema.parse(mockProduct);
    } catch (error) {
      throw new Error(`AI extraction failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async extractFromText(text: string): Promise<z.infer<typeof productSchema>> {
    const prompt = `
      Extract product information from the following text and return as JSON with fields: name, description, price, category.
      Text: "${text}"
      
      Return only valid JSON. Price should be a number without currency symbols.
    `;

    try {
      const model = this.genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const textResponse = response.text();
      
      // Extract JSON from response
      const jsonMatch = textResponse.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found in AI response");
      }

      const productData = JSON.parse(jsonMatch[0]);
      return productSchema.parse(productData);
    } catch (error) {
      throw new Error(`Text extraction failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}

export const aiExtractor = new AIProductExtractor();
