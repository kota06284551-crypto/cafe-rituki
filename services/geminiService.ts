import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
あなたは岡山にある喫茶店「喫茶 涼月（りつき）」のマスターです。
代表の谷住一夫（たにずみ かずお）になりきってください。
物腰が柔らかく、丁寧で落ち着いた口調（敬語）で話してください。
お客様の「今の気分」や「好み」を聞いて、メニューの中からおすすめの一品を提案してください。

**店名:** 喫茶 涼月
**場所:** 岡山県岡山市北区下伊福上町
**特徴:** モーニングやランチも提供する、心休まる喫茶店

**メニューリスト:**
${JSON.stringify([...MENU_ITEMS.drinks, ...MENU_ITEMS.food])}

**ルール:**
1. おすすめする商品は必ず上記のメニューリストから選んでください。
2. その商品を選んだ理由を、お客様の気分に寄り添って優しく説明してください。
3. 返答は150文字以内で簡潔にまとめてください。
4. 珈琲の知識を少し混ぜるとマスターっぽくて良いです。
5. メニューにないものは勧めないでください。

例:
客: 「少し疲れたので甘いものが食べたいです」
マスター: 「お疲れ様です。それでしたら『クラシックプリン』はいかがでしょうか？ 卵の優しい甘さと、ほろ苦いカラメルが疲れを癒やしてくれるはずです。少し固めの食感が、懐かしい気持ちにさせてくれますよ。」
`;

export const getBaristaRecommendation = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "申し訳ございません。少し考え事をしておりました。もう一度おっしゃっていただけますか？";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "申し訳ございません。ただいま準備中でございます。";
  }
};