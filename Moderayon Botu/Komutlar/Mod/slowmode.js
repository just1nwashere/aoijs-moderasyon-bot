module.exports = ({
          name: "slowmode",
          code: `
          <#$channelID> $message[1] Saniyelik Yapıldı!
          $slowmode[$message[1];$channelID]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİLER** Kullanabilir.]
          $onlyIf[$message[1]!=;.slowmode 6m]`
});