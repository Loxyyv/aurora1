const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const ayarlar = require('../ayarlar.json');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  console.log(`Komutlar Yüklendi.`);
  console.log(`(${client.user.username}) Bot Hazır`);
  client.user.setStatus("acitve");
  client.user.setPresence({ activity: { name: (ayarlar.botdurum) }, status: "active" });
  client.channels.cache.get((ayarlar.seskanalı)).join() 
    console.log(`Bot Aktif`);

};
