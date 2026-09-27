// Redirects www to the apex domain; everything else is served from ./public.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.bramley.works") {
      url.hostname = "bramley.works";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
