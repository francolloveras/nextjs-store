'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import Typography from '@/ui/typography'

import Icon from './icon'

interface GalleryProps {
  media: {
    type: 'image' | 'video'
    id: number
    src: string
    thumbnail: string
  }[]
}

export default function Gallery({ media }: GalleryProps) {
  const previewRef = useRef<HTMLUListElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === media.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? media.length - 1 : prev - 1))
  }

  const setSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const scroll = (scrollOffset: number) => {
    if (previewRef.current) {
      previewRef.current.scrollLeft += scrollOffset
    }
  }

  useEffect(() => {
    const adjustPreviewScroll = () => {
      if (previewRef.current) {
        const previewWidth = previewRef.current.offsetWidth
        const previewScrollLeft = previewRef.current.scrollLeft
        const previewScrollRight = previewScrollLeft + previewWidth

        const currentSlideElement = previewRef.current.children[currentSlide] as HTMLLIElement

        if (currentSlideElement) {
          const slideLeft = currentSlideElement.offsetLeft
          const slideRight = slideLeft + currentSlideElement.offsetWidth

          if (slideLeft < previewScrollLeft) {
            previewRef.current.scrollTo({
              left: slideLeft,
              behavior: 'smooth'
            })
          } else if (slideRight > previewScrollRight) {
            previewRef.current.scrollTo({
              left: slideRight - previewWidth,
              behavior: 'smooth'
            })
          }
        }
      }
    }

    adjustPreviewScroll()
  }, [currentSlide])

  useEffect(() => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause()
    }
  }, [currentSlide])

  return (
    <div className="flex w-full flex-col gap-y-2">
      <div className="group relative shadow-lg">
        <div className="aspect-video overflow-hidden rounded-md">
          <div className="flex">
            {media.map(({ src, type }, index) =>
              type === 'video' ? (
                <video
                  ref={videoRef}
                  key={index}
                  src={src}
                  style={{ transform: `translateX(${-currentSlide * 100}%)` }}
                  className="size-full object-cover transition-transform duration-500"
                  controls
                />
              ) : (
                <Image
                  key={index}
                  src={src}
                  width={1080}
                  height={1920}
                  quality={100}
                  priority
                  alt={`Image ${index + 1}`}
                  style={{ transform: `translateX(${-currentSlide * 100}%)` }}
                  className="size-full object-cover transition-transform duration-500"
                />
              )
            )}
          </div>
        </div>
        <Typography
          as="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full p-2 text-2xl text-white hover:bg-neutral-800/80 group-hover:block"
          icon="arrowBack"
        />
        <Typography
          as="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full p-2 text-2xl text-white hover:bg-neutral-800/80 group-hover:block"
          icon="arrowForward"
        />
      </div>
      <div className="relative">
        <ul
          ref={previewRef}
          className="flex gap-x-2 overflow-hidden"
          style={{ scrollBehavior: 'smooth' }}
        >
          {media.map(({ thumbnail, type }, index) => (
            <li key={index}>
              <button className="relative w-48" onClick={() => setSlide(index)}>
                <Image
                  src={thumbnail}
                  width={600}
                  height={338}
                  quality={30}
                  alt={`Image ${index + 1}`}
                  className={clsx('rounded-md object-cover', {
                    border: currentSlide === index,
                    'border border-transparent': currentSlide !== index
                  })}
                />
                {type === 'video' && (
                  <Icon
                    icon="play"
                    className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-4xl shadow-md"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
        <Typography
          as="button"
          onClick={() => scroll(-500)}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-xl text-white hover:bg-neutral-800/80"
          icon="arrowBack"
        />
        <Typography
          as="button"
          onClick={() => scroll(500)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-xl text-white hover:bg-neutral-800/80"
          icon="arrowForward"
        />
      </div>
    </div>
  )
}
