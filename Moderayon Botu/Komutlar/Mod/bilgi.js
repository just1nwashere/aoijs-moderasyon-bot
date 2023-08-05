//Made By 💖 Just1N
const aoijs = require("aoi.js");
module.exports = ({
          name: "bilgi",
          code: `
          $author[1;$username[$authorID];$userAvatar]
          $description[
          <@$authorID> adlı üyenin sunucu içerisi detaylı istatistikleri;

          Kullanıcının Adı: <@$mentioned[1]>

          Kullanıcının ID'si: $mentioned[1]

          Kullanıcının İsim Etiketi: $userTag[$mentioned[1]]

          Kullanıcının Rozetleri: $userBadges[$mentioned[1];, ]
          ]
          $color[#fff490]
          $thumbnail[$guildIcon[$guildID]]
          $footer[Made By 💖 Just1nwashere.]`
});


















//Made By 💖 Just1N