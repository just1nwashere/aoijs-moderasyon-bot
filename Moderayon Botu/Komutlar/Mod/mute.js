module.exports = ({
          name: "mute",
          code: `
          <@$mentioned[1]> Adlı Kullanıcıya Mute Atıldı!
          $muteUser[$guildID;$mentioned[1];true]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİLER** Kullanabilir.]
          $onlyIf[$mentioned[1]!=;.mute @etiket]`
});