module.exports = ({
          name: "say",
          code: `
          $author[1;$guildName[$guildID];$guildIcon[$guildID]]
          $description[
          > $membersCount[$guildID;all;true]
          ]
          $color[#fff490]
          $thumbnail[$guildIcon[$guildID]]
          $footer[Made By 💖 Just1nwashere.]`
});