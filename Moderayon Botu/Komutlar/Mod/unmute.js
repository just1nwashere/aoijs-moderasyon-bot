module.exports = ({
          name: "unmute",
          code: `
          <@$mentioned[1]> Adlı Kullanıcıdan Mute Kaldırıldı!
          $muteUser[$guildID;$mentioned[1];false]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİLER** Kullanabilir.]
          $onlyIf[$mentioned[1]!=;.unmute @etiket]`
});