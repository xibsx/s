const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "⌚",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const status = `╭━━〔 *✦DADMARK-XMD✦* 〕━━┈⊷
┃🦄╭─────────────·๏
┃🦄┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃🦄┃• *📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}GB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}TB
┃🦄┃• *⚙️ HostName*: ${os.hostname()}
┃🦄┃• *👨‍💻 Owner*: DADMARK 💫 
┃🦄┃• *🧬 Version*: 1.0.0
✦ DADMARK ✦ XMD ✦
╰──────────────┈⊷
> © ✦ DADMARK✦ XMD ✦`;

        // 1. Send image + alive message
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/FLjRKTNK/lordcasey.jpg` },  
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400354004723@newsletter',
                    newsletterName: 'DADMARK-XMD💖',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // 2. Send voice note (PTT)
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/x9t8vj.mp3' },
            mimetype: 'audio/mpeg',
            ptt: true // ✅ This makes it a voice note
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
