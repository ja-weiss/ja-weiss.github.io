const redirects = {
    "/discord": "https://discord.com/users/1231279454496624812",
    "/youtube": "https://youtube.com/@pixelbeastt",
    "/instagram": "https://instagram.com/jac_ob_w",
    "/naturtheater": "https://www.naturtheater.de/",
    "/lukasplitz": "https://www.google.com/search?q=idiot",
    "/secret": "https://youtu.be/dQw4w9WgXcQ",
  };

  const path = window.location.pathname;
  if (redirects[path]) {
    window.location.href = redirects[path];
  }