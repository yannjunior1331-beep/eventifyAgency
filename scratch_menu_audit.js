const fs = require('fs');

const pages = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const stats = pages.map(file => {
  const c = fs.readFileSync(file, 'utf8');
  return {
    file,
    hasIcon2: c.includes('icon2'),
    icon2Class: (c.match(/class="icon2[^"]*"/) || [''])[0],
    hasMenuButton9: c.includes('menu-button-9'),
    hasMenuPopup: c.includes('class="menu w-nav-menu"'),
    logo: (c.match(/src="assets\/images\/logo-Eventify-[23]\.png"/) || [''])[0]
  };
});

console.log(JSON.stringify(stats, null, 2));
