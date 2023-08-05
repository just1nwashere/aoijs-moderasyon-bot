//Made By 💖 Just1N
const aoijs = require("aoi.js");
module.exports = [{
          name: "ban",
          code: `
          $ban[$guildID;$mentioned[1];7;$noMentionMessage[1]]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİLER** Kullanabilir.]
          $onlyIf[$mentioned[1]!=;.ban @etiket]`
},{
          name: "unban",
          code: `
          $unban[$guildID;$mentioned[1];$noMentionMessage[1]]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİLER** Kullanabilir.]
          $onlyIf[$mentioned[1]!=;.unban @etiket]`
}];
























//Made By 💖 Just1N