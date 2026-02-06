interface MacRelease {
  url: string;
  version: string;
  pubDate: string;
}

const pickTag = (tagName: string) => {
  const re = new RegExp(`<${tagName}>([^<]+)<\/${tagName}>`, "i");
  return (xml: string) => (xml.match(re)?.[1] ?? "").trim();
};

const pickAttr = (attr: string) => {
  const re = new RegExp(`${attr}="([^"]+)"`, "i");
  return (xml: string) => (xml.match(re)?.[1] ?? "").trim();
};

export default defineEventHandler(async (): Promise<MacRelease> => {
  const appcastUrl =
    "https://updates.lucidclip.app/macos/appcast.xml";

  const xml = await $fetch<string>(appcastUrl, {
    responseType: "text",
    headers: {"Cache-Control": "no-cache"},
  });

  const itemMatch = xml.match(/<item>[\s\S]*?<\/item>/i);
  if (!itemMatch) throw new Error("No <item> found in appcast");
  const item = itemMatch[0];

  const enclosureMatch = item.match(/<enclosure[\s\S]*?\/>/i);
  if (!enclosureMatch) throw new Error("No <enclosure> found in appcast");
  const enclosure = enclosureMatch[0];

  const url = pickAttr("url")(enclosure);
  const shortVersion = pickTag("sparkle:shortVersionString")(item);
  const version = shortVersion || pickTag("sparkle:version")(item);
  const pubDate = pickTag("pubDate")(item);

  if (!url || !version) throw new Error("Missing url/version in appcast");
  return {url, version, pubDate};
});
