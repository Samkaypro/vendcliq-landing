import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroLanding() {
  return (
    <section className="relative overflow-hidden bg-white px-3 py-6 lg:px-8 lg:py-16">
     {/* Left Grid */}
     <div className="pointer-events-none absolute inset-0">
     <div className="absolute bottom-1 left-0 hidden lg:block " >
          <svg
            width={700}
            height={900}
            viewBox="0 0 685 1287"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M612.927 0v87.36H685v1.27h-72.073v84.163H685v1.27h-72.073v84.162H685v1.27h-72.073v84.163H685v1.27h-72.073v84.162H685v1.27h-72.073v84.162H685v1.27h-72.073v84.163H685v1.27h-72.073v84.163H685v1.27h-72.073v84.161H685v1.27h-72.073v84.163H685v1.269h-72.073v84.162H685v1.27h-72.073v84.167H685v1.27h-72.073v84.16H685v1.27h-72.073v84.16H685v1.27h-72.073v87.36h-1.27v-87.36h-69.315v87.36h-1.27v-87.36h-69.311v87.36h-1.27v-87.36h-69.316v87.36h-1.269v-87.36H330.59v87.36h-1.27v-87.36h-69.311v87.36h-1.27v-87.36h-69.32v87.36h-1.27v-87.36h-69.315v87.36h-1.27v-87.36H48.253v87.36h-1.27v-87.36h-69.316v87.36h-1.27v-87.36h-69.31v87.36h-1.27v-87.36H-163.5v87.36h-1.27v-87.36h-69.32v87.36h-1.27v-87.36h-69.311v87.36h-1.27v-87.36h-72.062v-1.27h72.062v-84.16h-72.062v-1.27h72.062v-84.16h-72.062v-1.27h72.062v-84.167h-72.062v-1.269h72.062v-84.163h-72.062v-1.269h72.062v-84.163h-72.062v-1.27h72.062v-84.161h-72.062v-1.27h72.062v-84.163h-72.062v-1.27h72.062v-84.163h-72.062v-1.27h72.062V430.36h-72.062v-1.27h72.062v-84.162h-72.062v-1.27h72.062v-84.163h-72.062v-1.27h72.062v-84.162h-72.062v-1.27h72.062V88.63h-72.062v-1.27h72.062V0h1.27v87.36h69.311V0h1.27v87.36h69.32V0h1.27v87.36h69.315V0h1.27v87.36h69.311V0h1.27v87.36h69.316V0h1.27v87.36h69.311V0h1.27v87.36h69.315V0h1.27v87.36h69.32V0h1.27v87.36h69.311V0h1.27v87.36h69.316V0h1.269v87.36h69.316V0h1.27v87.36h69.311V0h1.27v87.36h69.315V0h1.27zM-304.67 1197.98v-84.16h69.311v84.16h-69.311zm70.581 0v-84.16h69.32v84.16h-69.32zm70.59 0v-84.16h69.315v84.16h-69.315zm70.585 0v-84.16h69.311v84.16h-69.31zm70.581 0v-84.16h69.316v84.16h-69.316zm70.586 0v-84.16h69.311v84.16H48.253zm70.581 0v-84.16h69.315v84.16h-69.315zm70.585 0v-84.16h69.32v84.16h-69.32zm70.59 0v-84.16h69.311v84.16h-69.311zm70.581 0v-84.16h69.316v84.16H330.59zm70.585 0v-84.16h69.316v84.16h-69.316zm70.586 0v-84.16h69.311v84.16h-69.311zm70.581 0v-84.16h69.315v84.16h-69.315zm69.315-85.43v-84.16h-69.315v84.16h69.315zm0-85.43h-69.315v-84.167h69.315v84.167zm-70.585 85.43v-84.16h-69.311v84.16h69.311zm0-85.43h-69.311v-84.167h69.311v84.167zm-70.581 85.43v-84.16h-69.316v84.16h69.316zm0-85.43h-69.316v-84.167h69.316v84.167zm-70.585 85.43v-84.16H330.59v84.16h69.316zm0-85.43H330.59v-84.167h69.316v84.167zm-70.586 85.43v-84.16h-69.311v84.16h69.311zm0-85.43h-69.311v-84.167h69.311v84.167zm-70.581 85.43v-84.16h-69.32v84.16h69.32zm0-85.43h-69.32v-84.167h69.32v84.167zm-70.59 85.43v-84.16h-69.315v84.16h69.315zm0-85.43h-69.315v-84.167h69.315v84.167zm-70.585 85.43v-84.16H48.253v84.16h69.311zm0-85.43H48.253v-84.167h69.311v84.167zm-70.581 85.43v-84.16h-69.316v84.16h69.316zm0-85.43h-69.316v-84.167h69.316v84.167zm-70.586 85.43v-84.16h-69.31v84.16h69.31zm0-85.43h-69.31v-84.167h69.31v84.167zm-70.58 85.43v-84.16H-163.5v84.16h69.315zm0-85.43H-163.5v-84.167h69.315v84.167zm-70.586 85.43v-84.16h-69.32v84.16h69.32zm0-85.43h-69.32v-84.167h69.32v84.167zm-70.59 85.43v-84.16h-69.311v84.16h69.311zm0-85.43h-69.311v-84.167h69.311v84.167zm-69.311-170.868v-84.163h69.311v84.163h-69.311zm70.581 0v-84.163h69.32v84.163h-69.32zm69.32 1.269h-69.32v84.163h69.32v-84.163zm1.27-1.269v-84.163h69.315v84.163h-69.315zm69.315 1.269h-69.315v84.163h69.315v-84.163zm1.27-1.269v-84.163h69.311v84.163h-69.31zm69.311 1.269h-69.31v84.163h69.31v-84.163zm1.27-1.269v-84.163h69.316v84.163h-69.316zm69.316 1.269h-69.316v84.163h69.316v-84.163zm1.27-1.269v-84.163h69.311v84.163H48.253zm69.311 1.269H48.253v84.163h69.311v-84.163zm1.27-1.269v-84.163h69.315v84.163h-69.315zm69.315 1.269h-69.315v84.163l69.315-.001v-84.162zm1.27-1.269v-84.163h69.32v84.163h-69.32zm69.32 1.269h-69.32v84.162h69.32v-84.162zm1.27-1.269v-84.163h69.311v84.163h-69.311zm69.311 1.269h-69.311v84.162h69.311v-84.162zm1.27-1.269v-84.163h69.316v84.163H330.59zm69.316 1.269H330.59v84.162h69.316v-84.162zm1.269-1.269v-84.163h69.316v84.163h-69.316zm69.316 1.269h-69.316v84.162h69.316v-84.162zm1.27-1.269v-84.163h69.311v84.163h-69.311zm69.311 1.269h-69.311v84.162h69.311v-84.162zm1.27-1.269v-84.163h69.315v84.163h-69.315zm69.315 1.269h-69.315v84.162h69.315v-84.162zm-847.016 0h-69.311v84.163h69.311v-84.163zm847.016-86.702v-84.161h-69.315v84.161h69.315zm0-85.431h-69.315v-84.163h69.315v84.163zm-70.585 85.431v-84.161h-69.311v84.161h69.311zm0-85.431h-69.311v-84.163h69.311v84.163zm-70.581 85.431v-84.161h-69.316v84.161h69.316zm0-85.431h-69.316v-84.163h69.316v84.163zm-70.585 85.431v-84.161H330.59v84.161h69.316zm0-85.431H330.59v-84.163h69.316v84.163zm-70.586 85.431v-84.161h-69.311v84.161h69.311zm0-85.431h-69.311v-84.163h69.311v84.163zm-70.581 85.431v-84.161h-69.32v84.161h69.32zm0-85.431h-69.32v-84.163h69.32v84.163zm-70.59 85.431v-84.161h-69.315v84.161h69.315zm0-85.431h-69.315v-84.163h69.315v84.163zm-70.585 85.431v-84.161H48.253v84.161h69.311zm0-85.431H48.253v-84.163h69.311v84.163zm-70.581 85.431v-84.161h-69.316v84.161h69.316zm0-85.431h-69.316v-84.163h69.316v84.163zm-70.586 85.431v-84.161h-69.31v84.161h69.31zm0-85.431h-69.31v-84.163h69.31v84.163zm-70.58 85.431v-84.161H-163.5v84.161h69.315zm0-85.431H-163.5v-84.163h69.315v84.163zm-70.586 85.431v-84.161h-69.32v84.161h69.32zm0-85.431h-69.32v-84.163h69.32v84.163zm-70.59 85.431v-84.161h-69.311v84.161h69.311zm0-85.431h-69.311v-84.163h69.311v84.163zm-69.311-170.866V430.36h69.311v84.162h-69.311zm70.581 0V430.36h69.32v84.162h-69.32zm69.32 1.27h-69.32v84.163h69.32v-84.163zm1.27-1.27V430.36h69.315v84.162h-69.315zm69.315 1.27h-69.315v84.163h69.315v-84.163zm1.27-1.27V430.36h69.311v84.162h-69.31zm69.311 1.27h-69.31v84.163h69.31v-84.163zm1.27-1.27V430.36h69.316v84.162h-69.316zm69.316 1.27h-69.316v84.163h69.316v-84.163zm1.27-1.27V430.36h69.311v84.162H48.253zm69.311 1.27H48.253v84.163h69.311v-84.163zm1.27-1.27V430.36h69.315v84.162h-69.315zm69.315 1.27h-69.315v84.163h69.315v-84.163zm1.27-1.27V430.36h69.32v84.162h-69.32zm69.32 1.27h-69.32v84.163h69.32v-84.163zm1.27-1.27V430.36h69.311v84.162h-69.311zm69.311 1.27h-69.311v84.163h69.311v-84.163zm1.27-1.27V430.36h69.316v84.162H330.59zm69.316 1.27H330.59v84.163h69.316v-84.163zm1.269-1.27V430.36h69.316v84.162h-69.316zm69.316 1.27h-69.316v84.163h69.316v-84.163zm1.27-1.27V430.36h69.311v84.162h-69.311zm69.311 1.27h-69.311v84.163h69.311v-84.163zm1.27-1.27V430.36h69.315v84.162h-69.315zm69.315 1.27h-69.315v84.163h69.315v-84.163zm-847.016 0h-69.311v84.163h69.311v-84.163zm847.016-86.702v-84.162h-69.315v84.162h69.315zm0-85.432h-69.315v-84.163h69.315v84.163zm-70.585 85.432v-84.162h-69.311v84.162h69.311zm0-85.432h-69.311v-84.163h69.311v84.163zm-70.581 85.432v-84.162h-69.316v84.162h69.316zm0-85.432h-69.316v-84.163h69.316v84.163zm-70.585 85.432v-84.162H330.59v84.162h69.316zm0-85.432H330.59v-84.163h69.316v84.163zM329.32 429.09v-84.162h-69.311v84.162h69.311zm0-85.432h-69.311v-84.163h69.311v84.163zm-70.581 85.432v-84.162h-69.32v84.162h69.32zm0-85.432h-69.32v-84.163h69.32v84.163zm-70.59 85.432v-84.162h-69.315v84.162h69.315zm0-85.432h-69.315v-84.163h69.315v84.163zm-70.585 85.432v-84.162H48.253v84.162h69.311zm0-85.432H48.253v-84.163h69.311v84.163zM46.983 429.09v-84.162h-69.316v84.162h69.316zm0-85.432h-69.316v-84.163h69.316v84.163zm-70.586 85.432v-84.162h-69.31v84.162h69.31zm0-85.432h-69.31v-84.163h69.31v84.163zm-70.58 85.432v-84.162H-163.5v84.162h69.315zm0-85.432H-163.5v-84.163h69.315v84.163zm-70.586 85.432v-84.162h-69.32v84.162h69.32zm0-85.432h-69.32v-84.163h69.32v84.163zm-70.59 85.432v-84.162h-69.311v84.162h69.311zm0-85.432h-69.311v-84.163h69.311v84.163zm-69.311-170.865V88.63h69.311v84.163h-69.311zm70.581 0V88.63h69.32v84.163h-69.32zm69.32 1.27h-69.32v84.162h69.32v-84.162zm1.27-1.27V88.63h69.315v84.163h-69.315zm69.315 1.27h-69.315v84.162h69.315v-84.162zm1.27-1.27V88.63h69.311v84.163h-69.31zm69.311 1.27h-69.31v84.162h69.31v-84.162zm1.27-1.27V88.63h69.316v84.163h-69.316zm69.316 1.27h-69.316v84.162h69.316v-84.162zm1.27-1.27V88.63h69.311v84.163H48.253zm69.311 1.27H48.253v84.162h69.311v-84.162zm1.27-1.27V88.63h69.315v84.163h-69.315zm69.315 1.27h-69.315v84.162h69.315v-84.162zm1.27-1.27V88.63h69.32v84.163h-69.32zm69.32 1.27h-69.32v84.162h69.32v-84.162zm1.27-1.27V88.63h69.311v84.163h-69.311zm69.311 1.27h-69.311v84.162h69.311v-84.162zm1.27-1.27V88.63h69.316v84.163H330.59zm69.316 1.27H330.59v84.162h69.316v-84.162zm1.269-1.27V88.63h69.316v84.163h-69.316zm69.316 1.27h-69.316v84.162h69.316v-84.162zm1.27-1.27V88.63h69.311v84.163h-69.311zm69.311 1.27h-69.311v84.162h69.311v-84.162zm1.27-1.27V88.63h69.315v84.163h-69.315zm69.315 1.27h-69.315v84.162h69.315v-84.162zm-847.016 0h-69.311v84.162h69.311v-84.162z"
              fill="url(#paint0_radial_2477_11220)"
              fillOpacity={0.2}
            />
            <defs>
              <radialGradient
                id="paint0_radial_2477_11220"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(229.83827 -688.71531 594.37023 198.3534 173.485 780.292)"
              >
                <stop stopColor="#F50000" />
                <stop offset={1} stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
        </div>


      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl text-center lg:col-span-7 lg:max-w-none lg:pt-6 lg:text-left xl:col-span-6">
             {/* Accent Circles */}
        <div className="absolute -left-4 -top-4 size-8 rounded-full bg-[#4052A3]" />
        <div className="absolute right-12 top-12 size-8 rounded-full bg-[#FFC300]" />

            <h1 className="text-4xl font-bold tracking-tight text-[#4052A3] sm:text-6xl">
              Your Partner for <br></br>
              <span className="inline-block rounded-lg bg-[#EEF0FF] p-1">
              Growth
            </span>{' '}
              
               in the <br></br>Beverage Business
            </h1>
            <div className="mt-6 text-3xl font-semibold text-[#4052A3]">
              <span className="relative inline-block bg-[#EEF0FF]">
                Stock. Connect. Grow.
                {/* <span className="absolute inset-x-0 bottom-0 h-3 bg-yellow-300 opacity-50" /> */}
              </span>
            </div>
            <p className="mt-6 text-sm text-gray-600">
              Vendcliq is your one-stop platform for credit, trusted suppliers, and inventory
              tools to help your business thrive. Access tools, financing, and insights that
              empower you to reach new heights.
            </p>
            <div className="mt-6 flex justify-center lg:mt-8 lg:justify-start">
              <Button size="lg" className="bg-[#FFC300] text-black hover:bg-[#FFC300]/90">
                Get Started with Vendcliq
              </Button>
            </div>
          </div>

          {/* Image section */}
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="relative aspect-[4/3]  ">
              <Image
                src="/_static/images/home-landing.png"
                alt="Happy beverage store owner"
                width={1000}
                height={1500}
                className="absolute inset-0 "
                priority
              />
            
              {/* <div className="absolute left-4 top-4 rounded-lg bg-white/80 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-blue-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Cola Order Received</p>
                    <p className="text-sm text-gray-500">Today at 12:00 PM</p>
                  </div>
                </div>
                <Button size="sm" className="mt-2 w-full">
                  See Order
                </Button>
              </div>
              <div className="absolute bottom-4 right-4 rounded-lg bg-white/80 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">50k</p>
                    <p className="text-sm text-gray-500">Products Sold</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-4 rounded-lg bg-white/80 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Congratulations</p>
                    <p className="text-sm text-gray-500">Your bid is now accepted</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}