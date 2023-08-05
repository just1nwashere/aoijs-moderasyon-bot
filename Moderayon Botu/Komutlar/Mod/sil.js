module.exports = ({
          name: "sil",
          code: `
          $message[1] Kadar Mesaj Uzaya Yollandı!
          $clear[150]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİLER** Kullanabilir.]
          $onlyIf[$message[1]!=;.sil <Mesaj Miktarı>]`
});