import { NextResponse } from 'next/server';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';

export async function GET() {
  try {
    const rssUrl = 'https://www.crhoy.com/feed/';
    const response = await axios.get(rssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MyNewsBot/1.0; +https://tusitio.com)',
        'Accept': 'application/rss+xml, application/xml;q=0.9, */*;q=0.8'
      }
    });
    const data = await parseStringPromise(response.data, { trim: true });

    const noticias = data.rss.channel[0].item.map((item) => {
      const description = item.description[0];
      const imageRegex = /<img[^>]*src="([^"]+)"/;
      const imageMatch = description.match(imageRegex);
      const imageUrl = imageMatch ? imageMatch[1] : null;

      return {
        titulo: item.title[0],
        enlace: item.link[0],
        imagen: imageUrl,
      };
    });

    return NextResponse.json(noticias);
  } catch (error) {
    console.error('❌ Error al obtener noticias:', error.message);
    return NextResponse.json({ error: 'Error al obtener noticias' }, { status: 500 });
  }
}
