'use client';
import styles from "@/app/css/newsFeatured.module.css"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${styles.arrow} ${styles.prev}`}
      onClick={onClick}
      aria-label="Anterior"
    >
      ◀
    </button>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${styles.arrow} ${styles.next}`}
      onClick={onClick}
      aria-label="Siguiente"
    >
      ▶
    </button>
  );
}

export default function FeaturedNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news/');
        if (!response.ok) throw new Error('Error al cargar las noticias');
        const data = await response.json();
        setNews(data);
      } catch (err) {
        console.error('Error al cargar news:', err.message || err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Cargando noticias...</p>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.mainContainer}>
      <Slider {...settings}>
        {news.map((item, index) => (



          <div key={index} style={{ padding: '0 10px' }}>
            <a href={item.enlace} target="_blank" rel="noopener noreferrer">
              <div className={styles.card}>

                
                <h2 style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  {item.titulo}
                </h2>
                {item.imagen && (
                  <div style={{ marginBottom: '1rem' }}>
                    <Image
                      src={item.imagen}
                      alt={item.titulo}
                      width={600}
                      height={400}
                      style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
                      priority
                    />
                  </div>
                )}
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
