import { NextRequest, NextResponse } from "next/server";
import { portfolioData, systemPrompt } from "@/data/portfolio";

// Fallback responses when API is unavailable
function getFallbackResponse(message: string): string {
  const msg = message.toLowerCase();

  // Check FAQ first
  for (const faq of portfolioData.faq) {
    if (
      faq.q.toLowerCase().includes(msg.slice(0, 20)) ||
      msg.includes(faq.q.toLowerCase().slice(0, 15))
    ) {
      return faq.a;
    }
  }

  // Keyword-based responses
  if (msg.includes("who") || msg.includes("about") || msg.includes("introduce")) {
    return `Shreya Rathore is a **Business Development Associate** at **CloudNexus**, based in Bhopal, Madhya Pradesh, India. She holds a B.Tech in Computer Science Engineering from SISTec-R (2021–2025) and specializes in client relations, growth strategy, and technology consulting. You can connect with her on [LinkedIn](https://www.linkedin.com/in/shreya-singh-rathore310/).`;
  }

  if (msg.includes("experience") || msg.includes("work") || msg.includes("job") || msg.includes("cloudnexus")) {
    return `Shreya is currently working as a **Business Development Associate at CloudNexus** (May 2025 – Present). Her key responsibilities include lead generation, client relationship management, market research, and collaborative strategy development. She bridges technical knowledge with business expertise to drive growth.`;
  }

  if (msg.includes("skill") || msg.includes("expertise") || msg.includes("good at")) {
    return `Shreya's core competencies span **Business Development, Client Relations, Strategic Planning, Market Research**, and **Lead Generation**. On the technical side, she's proficient in data analysis, CRM tools, and has a solid CSE foundation. Her soft skills include exceptional communication, leadership, and critical thinking.`;
  }

  if (msg.includes("education") || msg.includes("study") || msg.includes("college") || msg.includes("degree")) {
    return `Shreya completed her **B.Tech in Computer Science Engineering** from **Sagar Institute of Science Technology & Research (SISTec-R)** in Bhopal, graduating in **2025**. This technical background gives her a unique edge in understanding technology products and translating them into business value.`;
  }

  if (msg.includes("hire") || msg.includes("recruit") || msg.includes("opportunity") || msg.includes("available")) {
    return `Shreya is open to exciting new opportunities! She brings a rare combination of **technical understanding + business acumen**, strong client relationship skills, and a proven track record at CloudNexus. Connect with her on [LinkedIn](https://www.linkedin.com/in/shreya-singh-rathore310/) to start a conversation!`;
  }

  if (msg.includes("contact") || msg.includes("reach") || msg.includes("connect")) {
    return `You can connect with Shreya through:\n\n• **LinkedIn**: [shreya-singh-rathore310](https://www.linkedin.com/in/shreya-singh-rathore310/)\n• **Location**: Bhopal, Madhya Pradesh, India\n• Or use the **Contact Form** on this page to send her a direct message!`;
  }

  if (msg.includes("project") || msg.includes("work done") || msg.includes("portfolio")) {
    return `Shreya has contributed to key initiatives including:\n\n• **Client Onboarding Portal** — reduced time-to-value by 40%\n• **Tier 2 Market Expansion Strategy** — identified 50+ enterprise prospects\n• **Campus Innovation Hub** — 200+ participants, 15 industry mentors\n\nEach project reflects her ability to create measurable business impact.`;
  }

  if (msg.includes("certification") || msg.includes("course") || msg.includes("learn")) {
    return `Shreya holds a certification in **Introduction to Data Structures and Algorithms** from **LearnTube.ai** (January 2024, Credential ID: INT-M-2-3118-772014). She's a continuous learner committed to staying sharp in both technical and business domains.`;
  }

  if (msg.includes("location") || msg.includes("where") || msg.includes("city")) {
    return `Shreya is based in **Bhopal, Madhya Pradesh, India** — where she works with CloudNexus on expanding their enterprise client base across the region.`;
  }

  // Default fallback
  return `Thank you for your question! I'm Shreya AI, and I'm here to help you learn about **Shreya Rathore** — a Business Development Associate at CloudNexus with expertise in client relations, growth strategy, and technology consulting.\n\nYou can ask me about her **experience**, **education**, **skills**, **projects**, or how to **contact her**. What would you like to know?`;
}

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  // Try Gemini API
  if (apiKey && apiKey !== "your_gemini_api_key_here") {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: systemPrompt }],
            },
            contents: [
              {
                role: "user",
                parts: [{ text: message }],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 512,
            },
          }),
        }
      );

      if (!response.ok) throw new Error(`Gemini API error: ${response.status}`);

      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text) {
        return NextResponse.json({ response: text, source: "gemini" });
      }
      throw new Error("No response text from Gemini");
    } catch (error) {
      console.error("Gemini API failed, using fallback:", error);
      // Fall through to fallback
    }
  }

  // Fallback: local knowledge base response
  const fallbackResponse = getFallbackResponse(message);
  return NextResponse.json({ response: fallbackResponse, source: "fallback" });
}
