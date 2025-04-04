const redirects = {
    "/discord": "https://discord.com/users/1231279454496624812",
    "/youtube": "https://youtube.com/@pixelbeastt",
    "/instagram": "https://instagram.com/jac_ob_w"
  };

  const path = window.location.pathname;
  if (redirects[path]) {
    window.location.href = redirects[path];
  }