"use server";

export async function pingServer(payload: string) {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) return;

    const data = JSON.parse(payload);

    const { headers } = await import("next/headers");
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      null;

    let geo: Record<string, string> = {};
    // Skip geo on localhost
    if (ip && ip !== "::1" && ip !== "127.0.0.1") {
      try {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        geo = await geoRes.json();
      } catch {}
    }

    const fields = [
      { name: "📍 IP", value: ip || "localhost", inline: true },
      { name: "🌍 Country", value: geo.country_name || "localhost (no geo)", inline: true },
      { name: "🏙️ City", value: geo.city && geo.region ? `${geo.city}, ${geo.region}` : "N/A", inline: true },
      { name: "🕐 Timezone", value: geo.timezone || "N/A", inline: true },
      { name: "🏢 ISP", value: geo.org || "N/A", inline: true },
      { name: "💻 Platform", value: data.platform || "N/A", inline: true },
      { name: "🧠 CPU Cores", value: data.hardwareConcurrency ? String(data.hardwareConcurrency) : "N/A", inline: true },
      { name: "🗂️ RAM", value: data.deviceMemory ? `${data.deviceMemory} GB` : "N/A", inline: true },
      { name: "👆 Touch", value: data.touchSupport ? `Yes (${data.maxTouchPoints} pts)` : "No", inline: true },
      { name: "🌐 Language", value: data.language || "N/A", inline: true },
      { name: "🍪 Cookies", value: data.cookiesEnabled ? "Enabled" : "Disabled", inline: true },
      { name: "📶 Online", value: data.onLine ? "Yes" : "No", inline: true },
      {
        name: "🖥️ Screen",
        value: data.screen
          ? `${data.screen.width}x${data.screen.height} @${data.screen.pixelRatio}x\nOrientation: ${data.screen.orientation || "N/A"}`
          : "N/A",
        inline: true,
      },
      {
        name: "📐 Viewport",
        value: data.viewport ? `${data.viewport.width}x${data.viewport.height}` : "N/A",
        inline: true,
      },
      {
        name: "📡 Network",
        value: data.network
          ? `Type: ${data.network.effectiveType}\nSpeed: ${data.network.downlink} Mbps\nLatency: ${data.network.rtt}ms\nData Saver: ${data.network.saveData ? "On" : "Off"}`
          : "N/A",
        inline: true,
      },
      {
        name: "🔋 Battery",
        value: data.battery
          ? `${data.battery.level} ${data.battery.charging ? "⚡ Charging" : "🔌 Not Charging"}`
          : "N/A",
        inline: true,
      },
      { name: "🔗 Referrer", value: data.referrer || "Direct", inline: true },
      { name: "🕒 Local Time", value: data.localTime || "N/A", inline: true },
      { name: "📄 Page URL", value: data.pageUrl || "N/A", inline: false },
      {
        name: "🤖 User Agent",
        value: data.userAgent ? `\`\`\`${data.userAgent.slice(0, 900)}\`\`\`` : "N/A",
        inline: false,
      },
    ];

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Visitor Logger",
        embeds: [{
          title: "🧑‍💻 New Visitor",
          color: 0x5865f2,
          timestamp: new Date().toISOString(),
          fields,
        }],
      }),
    });
  } catch {}
}