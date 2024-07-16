'use client'

import Link from 'next/link'
import { useState } from 'react'

import Icon from '@/ui/icon'
import Typography from '@/ui/typography'

interface AboutGameProps {
  developers: string[]
  publishers: string[]
  releaseDate: string
  languages: string
  website?: string
}

export default function AboutGame({
  developers,
  publishers,
  releaseDate,
  languages,
  website
}: AboutGameProps) {
  const parseLanguages = languages
    .replaceAll('<strong>*</strong>', '')
    .replaceAll('<br>languages with full audio support', '')
    .split(',')
  const manyLanguages = parseLanguages.length > 5

  const [viewAll, setViewAll] = useState(!manyLanguages)

  const handleViewAll = () => {
    setViewAll((prev) => !prev)
  }

  return (
    <div>
      <ul className="divide-y divide-neutral-700">
        <li className="flex justify-between py-2">
          <span className="text-neutral-400">Developers</span>
          <span className="text-right">{developers.join(', ')}</span>
        </li>
        <li className="flex justify-between py-2">
          <span className="text-neutral-400">Publishers</span>
          <span className="text-right">{publishers.join(', ')}</span>
        </li>
        <li className="flex justify-between py-2">
          <span className="text-neutral-400">Languages</span>
          <div className="flex flex-col justify-end">
            <ul
              className="overflow-hidden text-right transition-grow duration-200 ease-in-out"
              style={{ height: viewAll ? parseLanguages.length * 24 : 5 * 24 }}
            >
              {parseLanguages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
            {manyLanguages && (
              <button
                onClick={handleViewAll}
                className="text-right text-sm text-blue-200 transition-colors hover:text-blue-300"
              >
                {viewAll ? 'Show less' : `Show all (${parseLanguages.length - 5} more)`}
              </button>
            )}
          </div>
        </li>
        <li className="flex justify-between py-2">
          <span className="text-neutral-400">Release Date</span>
          <span className="text-right">{releaseDate}</span>
        </li>
        {website && (
          <li className="flex justify-between py-2">
            <span className="text-neutral-400">Website</span>
            <div className="flex items-center hover:underline">
              <Typography
                as={Link}
                href={website}
                className="max-w-60 truncate text-right"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                {website.split('://')[1]}
              </Typography>
              <Icon icon="externalLink" className="text-xs"></Icon>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
