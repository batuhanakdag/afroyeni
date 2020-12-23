const config = {
  token: "Nzg0MzczNzk1MjgzNjY0OTA2.X8oXBQ.a7On7xjsFdgudJ29WqhI0woruLI", //Botunuzun Tokeni
  sahip: "755412954492698694", //idniz

  dashboard: {
    oauthSecret: "519612900692983829", // Secrec Keyiniz
    callbackURL: "https://admitted-slender-raven.glitch.me/callback", //Dönüş Linki
    sessionSecret: "super-secret-session-thing", //Burayı Ellemiyoruz
    domain: "https://admitted-slender-raven.glitch.me", //alanadınız domaininiz
    port: 8080 //glitch kullanıyorsanız ellemeyin vds ise 80 yapın // SSL için cloudflare kullanıcaz 443 yapmayın portu 80 kalsın (vds için)
  }
};

module.exports = config;
