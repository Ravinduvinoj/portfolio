// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const data = await req.json();
//     const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

//     if (!webhookUrl) {
//       return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 });
//     }

//     const embed = {
//       username: "Visitor Logger",
//       avatar_url: "https://cdn-icons-png.flaticon.com/512/64/64572.png",
//       embeds: [
//         {
//           title: "🧑‍💻 New Visitor",
//           color: 0x5865f2,
//           timestamp: new Date().toISOString(),
//           fields: [
//             // Location
//             { name: "📍 IP", value: data.ip || "N/A", inline: true },
//             { name: "🌍 Country", value: data.country || "N/A", inline: true },
//             { name: "🏙️ City", value: `${data.city}, ${data.region}` || "N/A", inline: true },
//             { name: "🕐 Timezone", value: data.timezone || "N/A", inline: true },
//             { name: "🏢 ISP / Org", value: data.org || "N/A", inline: true },

//             // Device
//             { name: "💻 Platform", value: data.platform || "N/A", inline: true },
//             { name: "🧠 CPU Cores", value: String(data.hardwareConcurrency || "N/A"), inline: true },
//             { name: "🗂️ RAM", value: data.deviceMemory ? `${data.deviceMemory} GB` : "N/A", inline: true },
//             { name: "👆 Touch", value: data.touchSupport ? `Yes (${data.maxTouchPoints} pts)` : "No", inline: true },

//             // Screen
//             {
//               name: "🖥️ Screen",
//               value: data.screen
//                 ? `${data.screen.width}x${data.screen.height} @ ${data.screen.pixelRatio}x\nOrientation: ${data.screen.orientation}`
//                 : "N/A",
//               inline: true,
//             },
//             {
//               name: "📐 Viewport",
//               value: data.viewport ? `${data.viewport.width}x${data.viewport.height}` : "N/A",
//               inline: true,
//             },

//             // Browser
//             { name: "🌐 Language", value: data.language || "N/A", inline: true },
//             { name: "🍪 Cookies", value: data.cookiesEnabled ? "Enabled" : "Disabled", inline: true },
//             { name: "🚫 Do Not Track", value: data.doNotTrack || "N/A", inline: true },
//             { name: "📶 Online", value: data.onLine ? "Yes" : "No", inline: true },

//             // Network
//             {
//               name: "📡 Network",
//               value: data.network
//                 ? `Type: ${data.network.effectiveType}\nSpeed: ${data.network.downlink} Mbps\nLatency: ${data.network.rtt}ms\nData Saver: ${data.network.saveData}`
//                 : "N/A",
//               inline: true,
//             },

//             // Battery
//             {
//               name: "🔋 Battery",
//               value: data.battery
//                 ? `${data.battery.level} (${data.battery.charging ? "Charging ⚡" : "Not Charging"})`
//                 : "N/A",
//               inline: true,
//             },

//             // Navigation
//             { name: "🔗 Referrer", value: data.referrer || "Direct", inline: true },
//             { name: "📄 Page URL", value: data.pageUrl || "N/A", inline: false },
//             { name: "🕒 Local Time", value: data.localTime || "N/A", inline: true },

//             // User Agent
//             { name: "🤖 User Agent", value: `\`\`\`${data.userAgent}\`\`\`` || "N/A", inline: false },
//           ],
//         },
//       ],
//     };

//     const discordRes = await fetch(webhookUrl, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(embed),
//     });

//     if (!discordRes.ok) {
//       const err = await discordRes.text();
//       return NextResponse.json({ error: err }, { status: 500 });
//     }

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error("Visitor log error:", err);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }