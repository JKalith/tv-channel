import { NextResponse } from 'next/server';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';

export async function GET() {
  try {
    const rssUrl = 'https://www.crhoy.com/feed/';
    const response = await axios.get(rssUrl);
    const data = await parseStringPromise(response.data, { trim: true });

    const noticias = data.rss.channel[0].item.map((item) => {
      const description = item.description[0];
      // Usamos una expresión regular para extraer el src de la etiqueta <img>
      const imageRegex = /<img[^>]*src="([^"]+)"/;
      const imageMatch = description?.match(imageRegex);
      const imageUrl = imageMatch ? imageMatch[1] : null;

      return {
        titulo: item.title?.[0] ?? 'Sin título',
        enlace: item.link?.[0] ?? '#',
        imagen: imageUrl,
      };
    });

    return NextResponse.json(noticias);
  } catch (error) {
    console.error('❌ Error al obtener noticias:', error.message);
    return NextResponse.json({ error: `Error al obtener noticias: ${error.message}` }, { status: 500 });
  }
}
