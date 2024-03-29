import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ptBR from 'date-fns/locale/pt-BR'
import { GetStaticProps } from 'next'
import { format, parseISO } from 'date-fns'

import { usePlayer } from '../hooks/usePlayer'
import { useTheme } from '../hooks/useTheme'
import { api } from '../services/api'
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString'

import { Container, LatestEpisodes, EpisodeDetails, AllEpisodes } from '../styles/pages/home/styles'

interface Episode {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  publishedAt: string;
  durationAsString: string;
  duration: number;
  url: string;
}

interface HomeProps {
  latestEpisodes: Episode[];
  allEpisodes: Episode[];
  isDarkMode: boolean;
}

export default function Home({ latestEpisodes, allEpisodes, isDarkMode }: HomeProps) {
  const { playList } = usePlayer()

  const episodeList = [...latestEpisodes, ...allEpisodes]

  return (
    <Container>
      <Head>
        <title>Home | Podcastr</title>
      </Head>

      <LatestEpisodes isDarkMode={isDarkMode}>
        <h2>Últimos lançamentos</h2>

        <ul>
          { latestEpisodes.map((episode, index) => (
            <li key={episode.id}>
              <Image
                width={192}
                height={192}
                src={episode.thumbnail}
                alt={episode.title}
                objectFit='cover'
              />

              <EpisodeDetails>
                <Link href={`/episodes/${episode.id}`}>
                  <a>{episode.title}</a>
                </Link> 
                <p>{episode.members}</p>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationAsString}</span>
              </EpisodeDetails>

              <button type='button' onClick={() => playList(episodeList, index)}>
                <img src="/play-green.svg" alt="Tocar episódio"/>
              </button>
            </li>
          )) }
        </ul>
      </LatestEpisodes>

      <AllEpisodes>
        <h2>Todos episódios</h2>

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allEpisodes.map((episode, index) => (
              <tr key={episode.id}>
                <td style={{ width: 72 }}>
                  <Image 
                    width={120}
                    height={120}
                    src={episode.thumbnail}
                    alt={episode.title}
                    objectFit='cover'
                  />
                </td>
                <td>
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                </td>
                <td>{episode.members}</td>
                <td style={{ width: 100 }}>{episode.publishedAt}</td>
                <td>{episode.durationAsString}</td>
                <td>
                <button 
                  type='button' 
                  onClick={() => playList(episodeList, index + latestEpisodes.length)}
                >
                  <img src="/play-green.svg" alt="Tocar episódio"/>
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </AllEpisodes>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      duration: Number(episode.file.duration),
      url: episode.file.url
    }
  })

  const latestEpisodes = episodes.slice(0, 2)
  const allEpisodes = episodes.slice(2, episodes.length)

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 8 // 8 hours
  }
}