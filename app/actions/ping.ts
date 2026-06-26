"use server";

export async function pingServer(payload: string) {
    try {
        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
        if (!webhookUrl) return;

        const data = JSON.parse(payload);

        // Use the IP sent from the client (real public IP fetched client-side)
        const ip = data.ip || "unknown";

        // Fetch geo server-side using client's real IP
        let geo: Record<string, string> = {};
        try {
            const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=country,regionName,city,timezone,org,isp`);
            geo = await geoRes.json();
        } catch { }

        await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: "Visitor Logger",
                embeds: [{
                    title: "🧑‍💻 New Visitor",
                    color: 0x5865f2,
                    timestamp: new Date().toISOString(),
                    fields: [
                        { name: "📍 IP", value: ip, inline: true },
                        { name: "🌍 Country", value: geo.country || "N/A", inline: true },
                        { name: "🏙️ City", value: `${geo.city || "?"}, ${geo.regionName || "?"}`, inline: true },
                        { name: "🕐 Timezone", value: geo.timezone || "N/A", inline: true },
                        { name: "🏢 ISP / Org", value: geo.isp || geo.org || "N/A", inline: true },
                        { name: "💻 Platform", value: data.platform || "N/A", inline: true },
                        { name: "🧠 CPU Cores", value: String(data.hardwareConcurrency || "N/A"), inline: true },
                        { name: "🗂️ RAM", value: data.deviceMemory ? `${data.deviceMemory} GB` : "N/A", inline: true },
                        { name: "👆 Touch", value: data.touchSupport ? `Yes (${data.maxTouchPoints} pts)` : "No", inline: true },
                        { name: "🖥️ Screen", value: data.screen ? `${data.screen.width}x${data.screen.height} @${data.screen.pixelRatio}x\nOrientation: ${data.screen.orientation}` : "N/A", inline: true },
                        { name: "📐 Viewport", value: data.viewport ? `${data.viewport.width}x${data.viewport.height}` : "N/A", inline: true },
                        { name: "🌐 Language", value: data.language || "N/A", inline: true },
                        { name: "🍪 Cookies", value: data.cookiesEnabled ? "Enabled" : "Disabled", inline: true },
                        { name: "🚫 Do Not Track", value: data.doNotTrack || "N/A", inline: true },
                        { name: "📶 Online", value: data.onLine ? "Yes" : "No", inline: true },
                        { name: "📡 Network", value: data.network ? `Type: ${data.network.effectiveType}\nSpeed: ${data.network.downlink} Mbps\nLatency: ${data.network.rtt}ms\nData Saver: ${data.network.saveData}` : "N/A", inline: true },
                        { name: "🔋 Battery", value: data.battery ? `${data.battery.level} (${data.battery.charging ? "Charging ⚡" : "Not Charging"})` : "N/A", inline: true },
                        { name: "🔗 Referrer", value: data.referrer || "Direct", inline: true },
                        { name: "📄 Page URL", value: data.pageUrl || "N/A", inline: false },
                        { name: "🕒 Local Time", value: data.localTime || "N/A", inline: true },
                        { name: "🤖 User Agent", value: `\`\`\`${data.userAgent}\`\`\``, inline: false },
                    ],
                }],
            }),
        });
    } catch { }
}