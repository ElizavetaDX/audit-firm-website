import { NextResponse } from "next/server";

const TELEGRAM_API = "https://api.telegram.org";

type TelegramRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as TelegramRequestBody;
    const { name, phone, email, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Потрібні поля: name, phone, email" },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId || chatId.startsWith("ВСТАВЬ")) {
      return NextResponse.json(
        { error: "Telegram не налаштовано: перевірте TELEGRAM_BOT_TOKEN та TELEGRAM_CHAT_ID у .env.local" },
        { status: 500 }
      );
    }

    const text = [
      "🚀 Нова заявка з сайту АудитПартнер",
      "",
      `👤 Ім'я: ${String(name).trim()}`,
      `📞 Телефон: ${String(phone).trim()}`,
      `📧 Email: ${String(email).trim()}`,
      `📝 Повідомлення: ${String(message || "").trim() || "—"}`,
    ].join("\n");

    const url = `${TELEGRAM_API}/bot${token}/sendMessage`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    const data = (await res.json()) as { ok?: boolean; description?: string };

    if (!res.ok || !data.ok) {
      console.error("Telegram API error:", data);
      return NextResponse.json(
        { error: data.description || "Помилка відправки в Telegram" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("send-telegram error:", err);
    return NextResponse.json(
      { error: "Помилка сервера" },
      { status: 500 }
    );
  }
}
