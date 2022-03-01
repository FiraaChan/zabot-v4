const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;ZaBot-MD;;;\nFN:ZaBot-MD\nitem1.TEL;waid=6283830815715:+62 8383-0815-715\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:ɪᴹ᭄✿ 𝐟𝐢𝐫𝐚𝐚\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
