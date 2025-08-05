const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🐇",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` ⤪ ⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤮ 
⤬ *SAGITTARIUSTERMINATOR* ⤬
⤪ ⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤮


█░█ █▀▀ █░ █░ █▀█ █  
█▀█ ██▄ █▄ █▄ █▄█ ▄  
╭━━〔 STATUS〕━━┈⊷    
│USER: ${config.OWNER_NAME}
│ MODE : [${config.MODE}]
│ PREFIX : [${config.PREFIX}]  
╰──┬─━〔 *X*〕━┈⊷  
        ├─━〔  *I*〕━┈⊷
        ├─━〔 *B*〕━┈⊷  
        ╰─━〔 *S*〕━┈⊷

╭━━〔 MENU 〕━━┈⊷
│
│
├──┬〔  COMMANDS 〕
│      ├➤ SETTINGSMENU
│      ├➤ AIMENU
│      ├➤ ALLMENU
│      ├➤ ANIMEMENU
│      ├➤ BIBLELIST
│      ├➤ CONVERTMENU
│      ├➤ DLMENU
│      ├➤ FUNMENU
│      ├➤ GROUPMENU
│      ├➤ LISTCMD
│      ├➤ LOGO>text
│      ├➤ LOGOMENU
│      ├➤ MAINMENU
│      ├➤ MPESAMENU
│      ├➤ OTHERMENU
│      ├➤ OWNERMENU
│      ├➤ PRAYERTIME
│      ├➤ QURANMENU
│      ├➤ REACTIONMENU
│      ├➤ REPO
│      ├➤ ADULTMENU
│      ├➤ TEMPMAIL
│      ╰〔 EXIT 〕
╰────────────────╯
➢ ➣
⤪⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤮ 
⤬ *EXPANDED MENU*    ⤬
⤪⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤬⤮ 
         
     ⤪⤬⤬⤬⤬⤬⤬⤬⤮ 
     ⤪⤬⤬⤬⤬⤬⤬⤬⤮ 
     ⤪⤬⤬⤬⤬⤬⤬⤬⤮ 
         
        
     
╭━〔DOWNLOAD MENU 〕━⊷
│   
├➤ facebook
├➤ mediafire
├➤ tiktok
├➤ twitter
├➤ insta
├➤ apk
├➤ img
├➤ spotify
├➤ play
├➤ play2
├➤ play3
├➤ tt2
├➤ audio
├➤ playx
├➤ video
├➤ video1
├➤ ytmp3
├➤ ytmp4
├➤ pdf
├➤ sss
├➤ song
├➤ darama
├➤ git
├➤ gdrive
├➤ smovie
├➤ baiscope
├➤ ginisilia
├➤ bible
├➤ xxx
├➤ mp3
├➤ mp4
├➤ gemini
➢ ➣

╭━〔GROUP MENU 〕━⊷
│   
├➤ grouplink
├➤ kickall
├➤ kickall2
├➤ kickall3
├➤ add
├➤ remove
├➤ kick
├➤ promote
├➤ demote
├➤ dismiss
├➤ revoke
├➤ setgoodbye
├➤ setwelcome
├➤ delete
├➤ getpic
├➤ ginfo
├➤ disappear on
├➤ disappear off
├➤ disappear 7D,24H
├➤ allreq
├➤ updategname
├➤ updategdesc
├➤ joinrequests
├➤ senddm
├➤ nikal
├➤ mute
├➤ unmute
├➤ lockgc
├➤ unlockgc
├➤ invite
├➤ tag
├➤ hidetag
├➤ tagall
├➤ tagadmins
➢ ➣

╭━〔REACTIONS MENU〕 ━⊷
│   
├➤ bully
├➤ cuddle
├➤ cry
├➤ hug
├➤ awoo
├➤ kiss
├➤ lick
├➤ pat
├➤ smug
├➤ bonk
├➤ yeet
├➤ blush
├➤ smile
├➤ wave
├➤ highfive
├➤ handhold
├➤ nom
├➤ bite
├➤ glomp
├➤ slap
├➤ kill
├➤ happy
├➤ wink
├➤ poke
├➤ dance
├➤ cringe
➢ ➣

╭━〔 FUN MENU 〕━⊷
│   
├➤ insult
├➤ compatibility
├➤ aura
├➤ roast
├➤ compliment
├➤ lovetest
├➤ emoji
├➤ ringtone
├➤ pickup
├➤ ship
├➤ character
├➤ hack
├➤ joke
├➤ hrt
├➤ hpy
├➤ syd
├➤ anger
├➤ shy
├➤ kiss
├➤ mon
├➤ cunfuzed
├➤ getpp
├➤ setpp
├➤ hand
├➤ nikal
├➤ hold
├➤ hug
├➤ nikal
├➤ hifi
├➤ poke
➢ ➣

╭━〔 SETTINGS MENU 〕━⊷
│   
├➤ setprefix
├➤ statusview
├➤ mode
├➤ statusreply
├➤ alwaysonline
├➤ autorecording
├➤ autotyping
├➤ setbotnumber
├➤ anticall
├➤ autovoice
├➤ autosticker
├➤ autoreply
├➤ statusreact
├➤ autoreact
├➤ welcome
├➤ customreacts
├➤ antibad
├➤ antibot
├➤ antilink
├➤ readmessage
├➤ settings
➢ ➣

╭━〔 OTHER MENU 〕━⊷
│   
├➤ vv
├➤ pair
├➤ pair2
├➤ fact
├➤ font
├➤ define
├➤ news
├➤ movie
├➤ weather
├➤ srepo
├➤ insult
├➤ save
├➤ wikipedia
├➤ gpass
├➤ githubstalk
├➤ yts
├➤ ytv
➢ ➣

╭━〔 MAIN MENU 〕━⊷
│   
├➤ ping
├➤ live
├➤ alive
├➤ runtime
├➤ uptime
├➤ repo
├➤ owner
├➤ menu
├➤ menu2
├➤ restart
➢ ➣

╭━〔 OWNER MENU 〕━⊷
│   
├➤ owner
├➤ menu
├➤ menu2
├➤ listcmd
├➤ allmenu
├➤ repo
├➤ block
├➤ unblock
├➤ fullpp
├➤ setpp
├➤ restart
├➤ shutdown
├➤ updatecmd
├➤ alive
├➤ ping
├➤ gjid
├➤ jid
├➤ casey
├➤ tinyurl
├➤ bibelist
├➤ get
├➤ Terminate
├➤ family
├➤ test
➢ ➣

╭━〔 CONVERT MENU 〕━┈⊷
│   
├➤ sticker
├➤ sticker2
├➤ fancy
├➤ photo
├➤ take
├➤ tomp3
├➤ tts
├➤ trt
➢ ➣

╭━〔  ANIME MENU 〕━⊷
│   
├➤ fack
├➤ dog
├➤ awoo
├➤ garl
├➤ waifu
├➤ neko
├➤ megnumin
├➤ maid
├➤ loli
├➤ animegirl
├➤ animegirl1
├➤ animegirl2
├➤ animegirl3
├➤ animegirl4
├➤ animegirl5
├➤ anime1
├➤ anime2
├➤ anime3
├➤ anime4
├➤ anime5
├➤ animenews
├➤ foxgirl
├➤ naruto
➢ ➣

╭━〔 AI MENU 〕━⊷
│   
├➤ ai
├➤ gpt
├➤ meta
├➤ blackbox
├➤ gpt3
├➤ bing
├➤ gemini
├➤ copilot
➢ ➣
`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/apuyxw.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400354004723@newsletter',
                        newsletterName: 'DADMARK-𝐗𝐌𝐃👻⚡',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/ygz6lu.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "💚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `  
╭━〔DOWNLOAD MENU 〕━⊷
│   
├➤ facebook
├➤ mediafire
├➤ tiktok
├➤ twitter
├➤ insta
├➤ apk
├➤ img
├➤ spotify
├➤ play
├➤ play2
├➤ play3
├➤ tt2
├➤ audio
├➤ playx
├➤ video
├➤ video1
├➤ ytmp3
├➤ ytmp4
├➤ pdf
├➤ sss
├➤ song
├➤ darama
├➤ git
├➤ gdrive
├➤ smovie
├➤ baiscope
├➤ ginisilia
├➤ bible
├➤ xxx
├➤ mp3
├➤ mp4
├➤ gemini
➢ ➣`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/1YCH2Dd9/lordcasey.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400354004723@newsletter',
                        newsletterName: 'DADMARK-XMD💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `╭━━〔 *Group Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• grouplink
┃◈┃• kickall
┃◈┃• kickall2
┃◈┃• kickall3
┃◈┃• add
┃◈┃• remove
┃◈┃• kick
┃◈┃• promote 
┃◈┃• demote
┃◈┃• dismiss 
┃◈┃• revoke
┃◈┃• setgoodbye
┃◈┃• setwelcome
┃◈┃• delete 
┃◈┃• getpic
┃◈┃• ginfo
┃◈┃• delete 
┃◈┃• disappear on
┃◈┃• disappear off
┃◈┃• disappear 7D,24H
┃◈┃• allreq
┃◈┃• updategname
┃◈┃• updategdesc
┃◈┃• joinrequests
┃◈┃• senddm
┃◈┃• nikal
┃◈┃• mute
┃◈┃• unmute
┃◈┃• lockgc
┃◈┃• unlockgc
┃◈┃• invite
┃◈┃• tag
┃◈┃• hidetag
┃◈┃• tagall
┃◈┃• tagadmins
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/8gHCXCV9/IMG-20250216-WA0009.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400354004723@newsletter',
                        newsletterName: 'DADMARK-XMD 💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "reactionmenu",
    desc: "Shows the reaction commands",
    category: "menu",
    react: "💫",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        let dec = `╭━━〔 *Reactions Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• bully 
┃◈┃• cuddle 
┃◈┃• cry 
┃◈┃• hug 
┃◈┃• awoo 
┃◈┃• kiss 
┃◈┃• lick 
┃◈┃• pat 
┃◈┃• smug 
┃◈┃• bonk
┃◈┃• yeet 
┃◈┃• blush 
┃◈┃• smile
┃◈┃• wave 
┃◈┃• highfive 
┃◈┃• handhold 
┃◈┃• nom 
┃◈┃• bite 
┃◈┃• glomp 
┃◈┃• slap
┃◈┃• kill
┃◈┃• happy
┃◈┃• wink 
┃◈┃• poke 
┃◈┃• dance 
┃◈┃• cringe 
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/52dotx.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400354004723@newsletter',
                        newsletterName: 'DADMARK-XMD 💖🦄',
                        serverMessageId: 144
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `╭━━〔 *Fun Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• insult
┃◈┃• compatibility
┃◈┃• aura
┃◈┃• roast
┃◈┃• compliment
┃◈┃• lovetest
┃◈┃• emoji
┃◈┃• ringtone 
┃◈┃• pickup
┃◈┃• ship
┃◈┃• character
┃◈┃• hack
┃◈┃• joke
┃◈┃• hrt
┃◈┃• hpy
┃◈┃• syd
┃◈┃• anger
┃◈┃• shy
┃◈┃• kiss
┃◈┃• mon
┃◈┃• cunfuzed
┃◈┃• getpp
┃◈┃• setpp
┃◈┃• hand
┃◈┃• nikal
┃◈┃• hold
┃◈┃• hug
┃◈┃• nikal
┃◈┃• hifi
┃◈┃• poke
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/8gHCXCV9/IMG-20250216-WA0009.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400354004723@newsletter',
                        newsletterName: 'DADMARK-XMD 💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// settings menu

cmd({
    pattern: "settingsmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝖲𝖤𝖳𝖳𝖨𝖭𝖦𝖲 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ *setprefix* 
┋ ☻ *statusview*
┋ ☻ *mode*
┋ ☻ *statusreply*
┋ ☻ *alwaysonline*
┋ ☻ *autorecording*
┋ ☻ *autotyping*
┋ ☻ *setbotnumber*
┋ ☻ *anticall*
┋ ☻ *autovoice*
┋ ☻ *autosticker*
┋ ☻ *autoreply*
┋ ☻ *autoreply*
┋ ☻ *statusreact*
┋ ☻ *autoreact*
┋ ☻ *welcome*
┋ ☻ *customreacts*
┋ ☻ *antibad*
┋ ☻ *antibot*
┋ ☻ *antilink*
┋ ☻ *readmessage*
┋ ☻ *settings*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/27X4G1Cd/lordcasey.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400354004723@newsletter',
                        newsletterName: 'DADMARK-XMD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Other Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• vv
┃◈┃• pair
┃◈┃• pair2
┃◈┃• fact
┃◈┃• font
┃◈┃• define
┃◈┃• news
┃◈┃• movie
┃◈┃• weather
┃◈┃• srepo
┃◈┃• insult
┃◈┃• save
┃◈┃• wikipedia
┃◈┃• gpass
┃◈┃• githubstalk
┃◈┃• yts
┃◈┃• ytv
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/8gHCXCV9/IMG-20250216-WA0009.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363351424590490@newsletter',
                        newsletterName: 'DADMARK-XMD 💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Main Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ping
┃◈┃• live 
┃◈┃• alive
┃◈┃• runtime
┃◈┃• uptime 
┃◈┃• repo
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• restart
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
               image: { url: `https://i.ibb.co/8gHCXCV9/IMG-20250216-WA0009.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400354004723@newsletter',
                        newsletterName: 'DADMARK-XMD 💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Owner Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• listcmd
┃◈┃• allmenu
┃◈┃• repo
┃◈┃• block
┃◈┃• unblock
┃◈┃• fullpp
┃◈┃• setpp
┃◈┃• restart
┃◈┃• shutdown
┃◈┃• updatecmd
┃◈┃• alive
┃◈┃• ping 
┃◈┃• gjid
┃◈┃• jid
┃◈┃• casey
┃◈┃• tinyurl 
┃◈┃• bibelist
┃◈┃• get
┃◈┃• Terminate
┃◈┃• family 
┃◈┃• test
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/8gHCXCV9/IMG-20250216-WA0009.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400354004723@newsletter',
                        newsletterName: 'DADMARK-XMD 💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Convert Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• sticker
┃◈┃• sticker2
┃◈┃• fancy
┃◈┃• photo
┃◈┃• take
┃◈┃• tomp3
┃◈┃• tts
┃◈┃• trt
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/8gHCXCV9/IMG-20250216-WA0009.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400354004723@newsletter',
                        newsletterName: 'DADMARK-XMD 💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `╭━━〔 *Anime Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• fack
┃◈┃• dog
┃◈┃• awoo
┃◈┃• garl
┃◈┃• waifu
┃◈┃• neko
┃◈┃• megnumin
┃◈┃• neko
┃◈┃• maid
┃◈┃• loli
┃◈┃• animegirl
┃◈┃• animegirl
┃◈┃• animegirl1
┃◈┃• animegirl2
┃◈┃• animegirl3
┃◈┃• animegirl4
┃◈┃• animegirl5
┃◈┃• anime1
┃◈┃• anime1
┃◈┃• anime2
┃◈┃• anime3
┃◈┃• anime4
┃◈┃• anime5
┃◈┃• animenews
┃◈┃• foxgirl
┃◈┃• naruto
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/8gHCXCV9/IMG-20250216-WA0009.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400354004723@newsletter',
                        newsletterName: 'DADMARK-XMD 💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Ai Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ai
┃◈┃• gpt
┃◈┃• meta
┃◈┃• blackbox
┃◈┃• gpt3
┃◈┃• bing
┃◈┃• gemini
┃◈┃• copilot
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/8gHCXCV9/IMG-20250216-WA0009.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400354004723@newsletter',
                        newsletterName: 'DADMARK-XMD 💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
/*test*/

/*test*/
});
