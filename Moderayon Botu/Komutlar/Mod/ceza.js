//Made By 💖 Just1N
const aoijs = require("aoi.js");
module.exports = [{
          name: "ceza",
          code: `
          <@$mentioned[1]> Adlı Kullanıcıya $message Sebebiyle Ceza Verildi.
          $setUserVar[ceza;$noMentionMessage[1]]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİLER** Kullanabilir.]
          $onlyIf[$mentioned[1]!=;.ceza @etiket Sebep]`
},{
          name: "ceza-liste",
          code: `
          __$username[$mentioned[1]] Adlı Kullanıcının Cezalar__
          
          __$getUserVar[ceza]__
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİLER** Kullanabilir.]
          $onlyIf[$mentioned[1]!=;.ceza-liste @etiket]`
}];





















//Made By 💖 Just1N