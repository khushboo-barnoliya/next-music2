'use client'

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="text-center">
          <h1 className="uppercase text-base text-teal-600 font-semibold tracking-wide">featured webinars</h1>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-normal text-white sm:text-4xl">Enhance your Musical Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect items={featuredWebinars.map(webinar => ({
            title: webinar.title,
            description: webinar.description,
            link: "/"
          }))} />
        </div>

        <div className='mt-10 sm:mt-20 text-center'>
          <Link href={"/courses"} className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-slate-300 transition-all duration-200">View all Webinars</Link>
        </div>

      </div>
    </div>
  )
}

export default UpcomingWebinars