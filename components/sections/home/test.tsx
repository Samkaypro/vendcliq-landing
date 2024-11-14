import darkPreview from "@/public/_static/images/dark-preview.jpg";
import lightPreview from "@/public/_static/images/light-preview.png";

import BlurImage from "@/components/shared/blur-image";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroLanding() {
  return (
    <section className="container relative mx-auto grid min-h-screen gap-12 px-6 py-10 lg:grid-cols-2 lg:items-center">
      {/* Grid Pattern Overlays */}
      <div className="pointer-events-none absolute inset-0">
        {/* Left Grid */}
        <div className="absolute left-0 " >
          <svg
            width={550}
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

        {/* Circle prttan */}
        <div
          className="pr-100 pt-100 absolute  right-10 top-10 ">
          <svg
            width={700}
            height={500}
            viewBox="0 0 833 625"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <circle
              cx={8.04408}
              cy={123.431}
              r={6.93097}
              transform="rotate(-8.815 8.044 123.431)"
              fill="#DCE2EE"
            />
            <circle
              cx={20.7902}
              cy={205.62}
              r={6.93097}
              transform="rotate(-8.815 20.79 205.62)"
              fill="#DCE2EE"
            />
            <circle
              cx={33.5363}
              cy={287.809}
              r={6.93097}
              transform="rotate(-8.815 33.536 287.809)"
              fill="#DCE2EE"
            />
            <circle
              cx={46.2824}
              cy={369.999}
              r={6.93097}
              transform="rotate(-8.815 46.282 369.999)"
              fill="#DCE2EE"
            />
            <circle
              cx={59.0285}
              cy={452.188}
              r={6.93097}
              transform="rotate(-8.815 59.029 452.188)"
              fill="#DCE2EE"
            />
            <circle
              cx={71.7745}
              cy={534.377}
              r={6.93097}
              transform="rotate(-8.815 71.775 534.377)"
              fill="#DCE2EE"
            />
            <circle
              cx={84.5167}
              cy={616.565}
              r={6.93097}
              transform="rotate(-8.815 84.517 616.565)"
              fill="#DCE2EE"
            />
            <circle
              cx={90.2355}
              cy={110.685}
              r={6.93097}
              transform="rotate(-8.815 90.236 110.685)"
              fill="#DCE2EE"
            />
            <circle
              cx={102.974}
              cy={192.874}
              r={6.93097}
              transform="rotate(-8.815 102.974 192.874)"
              fill="#DCE2EE"
            />
            <circle
              cx={115.72}
              cy={275.064}
              r={6.93097}
              transform="rotate(-8.815 115.72 275.064)"
              fill="#DCE2EE"
            />
            <circle
              cx={128.47}
              cy={357.252}
              r={6.93097}
              transform="rotate(-8.815 128.47 357.252)"
              fill="#DCE2EE"
            />
            <circle
              cx={141.216}
              cy={439.441}
              r={6.93097}
              transform="rotate(-8.815 141.216 439.441)"
              fill="#DCE2EE"
            />
            <circle
              cx={153.962}
              cy={521.632}
              r={6.93097}
              transform="rotate(-8.815 153.962 521.632)"
              fill="#DCE2EE"
            />
            <circle
              cx={166.708}
              cy={603.82}
              r={6.93097}
              transform="rotate(-8.815 166.708 603.82)"
              fill="#DCE2EE"
            />
            <circle
              cx={172.419}
              cy={97.9393}
              r={6.93097}
              transform="rotate(-8.815 172.419 97.94)"
              fill="#DCE2EE"
            />
            <circle
              cx={185.165}
              cy={180.128}
              r={6.93097}
              transform="rotate(-8.815 185.165 180.128)"
              fill="#DCE2EE"
            />
            <circle
              cx={197.911}
              cy={262.317}
              r={6.93097}
              transform="rotate(-8.815 197.911 262.317)"
              fill="#DCE2EE"
            />
            <circle
              cx={210.661}
              cy={344.506}
              r={6.93097}
              transform="rotate(-8.815 210.661 344.506)"
              fill="#DCE2EE"
            />
            <circle
              cx={223.407}
              cy={426.696}
              r={6.93097}
              transform="rotate(-8.815 223.407 426.696)"
              fill="#DCE2EE"
            />
            <circle
              cx={236.153}
              cy={508.885}
              r={6.93097}
              transform="rotate(-8.815 236.153 508.885)"
              fill="#DCE2EE"
            />
            <circle
              cx={248.9}
              cy={591.074}
              r={6.93097}
              transform="rotate(-8.815 248.9 591.074)"
              fill="#DCE2EE"
            />
            <circle
              cx={254.61}
              cy={85.1932}
              r={6.93097}
              transform="rotate(-8.815 254.61 85.193)"
              fill="#DCE2EE"
            />
            <circle
              cx={267.357}
              cy={167.383}
              r={6.93097}
              transform="rotate(-8.815 267.357 167.383)"
              fill="#DCE2EE"
            />
            <circle
              cx={280.099}
              cy={249.572}
              r={6.93097}
              transform="rotate(-8.815 280.099 249.572)"
              fill="#DCE2EE"
            />
            <circle
              cx={292.845}
              cy={331.761}
              r={6.93097}
              transform="rotate(-8.815 292.845 331.761)"
              fill="#DCE2EE"
            />
            <circle
              cx={305.591}
              cy={413.95}
              r={6.93097}
              transform="rotate(-8.815 305.591 413.95)"
              fill="#DCE2EE"
            />
            <circle
              cx={318.337}
              cy={496.138}
              r={6.93097}
              transform="rotate(-8.815 318.337 496.138)"
              fill="#DCE2EE"
            />
            <circle
              cx={331.087}
              cy={578.329}
              r={6.93097}
              transform="rotate(-8.815 331.087 578.329)"
              fill="#DCE2EE"
            />
            <circle
              cx={336.798}
              cy={72.4471}
              r={6.93097}
              transform="rotate(-8.815 336.798 72.447)"
              fill="#DCE2EE"
            />
            <circle
              cx={349.544}
              cy={154.637}
              r={6.93097}
              transform="rotate(-8.815 349.544 154.637)"
              fill="#DCE2EE"
            />
            <circle
              cx={362.29}
              cy={236.826}
              r={6.93097}
              transform="rotate(-8.815 362.29 236.826)"
              fill="#DCE2EE"
            />
            <circle
              cx={375.036}
              cy={319.014}
              r={6.93097}
              transform="rotate(-8.815 375.036 319.014)"
              fill="#DCE2EE"
            />
            <circle
              cx={387.782}
              cy={401.203}
              r={6.93097}
              transform="rotate(-8.815 387.782 401.203)"
              fill="#DCE2EE"
            />
            <circle
              cx={400.528}
              cy={483.393}
              r={6.93097}
              transform="rotate(-8.815 400.528 483.393)"
              fill="#DCE2EE"
            />
            <circle
              cx={413.278}
              cy={565.582}
              r={6.93097}
              transform="rotate(-8.815 413.278 565.582)"
              fill="#DCE2EE"
            />
            <circle
              cx={418.989}
              cy={59.7015}
              r={6.93097}
              transform="rotate(-8.815 418.989 59.702)"
              fill="#DCE2EE"
            />
            <circle
              cx={431.735}
              cy={141.89}
              r={6.93097}
              transform="rotate(-8.815 431.735 141.89)"
              fill="#DCE2EE"
            />
            <circle
              cx={444.482}
              cy={224.08}
              r={6.93097}
              transform="rotate(-8.815 444.482 224.08)"
              fill="#DCE2EE"
            />
            <circle
              cx={457.228}
              cy={306.268}
              r={6.93097}
              transform="rotate(-8.815 457.228 306.268)"
              fill="#DCE2EE"
            />
            <circle
              cx={469.97}
              cy={388.458}
              r={6.93097}
              transform="rotate(-8.815 469.97 388.458)"
              fill="#DCE2EE"
            />
            <circle
              cx={482.716}
              cy={470.647}
              r={6.93097}
              transform="rotate(-8.815 482.716 470.647)"
              fill="#DCE2EE"
            />
            <circle
              cx={495.462}
              cy={552.836}
              r={6.93097}
              transform="rotate(-8.815 495.462 552.836)"
              fill="#DCE2EE"
            />
            <circle
              cx={501.177}
              cy={46.9554}
              r={6.93097}
              transform="rotate(-8.815 501.177 46.955)"
              fill="#DCE2EE"
            />
            <circle
              cx={513.923}
              cy={129.144}
              r={6.93097}
              transform="rotate(-8.815 513.923 129.144)"
              fill="#DCE2EE"
            />
            <circle
              cx={526.669}
              cy={211.334}
              r={6.93097}
              transform="rotate(-8.815 526.669 211.334)"
              fill="#DCE2EE"
            />
            <circle
              cx={539.415}
              cy={293.523}
              r={6.93097}
              transform="rotate(-8.815 539.415 293.523)"
              fill="#DCE2EE"
            />
            <circle
              cx={552.161}
              cy={375.712}
              r={6.93097}
              transform="rotate(-8.815 552.161 375.712)"
              fill="#DCE2EE"
            />
            <circle
              cx={564.907}
              cy={457.902}
              r={6.93097}
              transform="rotate(-8.815 564.907 457.902)"
              fill="#DCE2EE"
            />
            <circle
              cx={577.653}
              cy={540.091}
              r={6.93097}
              transform="rotate(-8.815 577.653 540.091)"
              fill="#DCE2EE"
            />
            <circle
              cx={583.368}
              cy={34.2088}
              r={6.93097}
              transform="rotate(-8.815 583.368 34.209)"
              fill="#DCE2EE"
            />
            <circle
              cx={596.114}
              cy={116.399}
              r={6.93097}
              transform="rotate(-8.815 596.114 116.399)"
              fill="#DCE2EE"
            />
            <circle
              cx={608.86}
              cy={198.587}
              r={6.93097}
              transform="rotate(-8.815 608.86 198.587)"
              fill="#DCE2EE"
            />
            <circle
              cx={621.607}
              cy={280.777}
              r={6.93097}
              transform="rotate(-8.815 621.607 280.777)"
              fill="#DCE2EE"
            />
            <circle
              cx={634.353}
              cy={362.967}
              r={6.93097}
              transform="rotate(-8.815 634.353 362.967)"
              fill="#DCE2EE"
            />
            <circle
              cx={647.095}
              cy={445.155}
              r={6.93097}
              transform="rotate(-8.815 647.095 445.155)"
              fill="#DCE2EE"
            />
            <circle
              cx={659.841}
              cy={527.345}
              r={6.93097}
              transform="rotate(-8.815 659.841 527.345)"
              fill="#DCE2EE"
            />
            <circle
              cx={665.552}
              cy={21.4632}
              r={6.93097}
              transform="rotate(-8.815 665.552 21.463)"
              fill="#DCE2EE"
            />
            <circle
              cx={678.298}
              cy={103.653}
              r={6.93097}
              transform="rotate(-8.815 678.298 103.653)"
              fill="#DCE2EE"
            />
            <circle
              cx={691.048}
              cy={185.842}
              r={6.93097}
              transform="rotate(-8.815 691.048 185.842)"
              fill="#DCE2EE"
            />
            <circle
              cx={703.794}
              cy={268.031}
              r={6.93097}
              transform="rotate(-8.815 703.794 268.031)"
              fill="#DCE2EE"
            />
            <circle
              cx={716.54}
              cy={350.22}
              r={6.93097}
              transform="rotate(-8.815 716.54 350.22)"
              fill="#DCE2EE"
            />
            <circle
              cx={729.286}
              cy={432.409}
              r={6.93097}
              transform="rotate(-8.815 729.286 432.409)"
              fill="#DCE2EE"
            />
            <circle
              cx={742.032}
              cy={514.599}
              r={6.93097}
              transform="rotate(-8.815 742.032 514.599)"
              fill="#DCE2EE"
            />
            <circle
              cx={747.743}
              cy={8.7176}
              r={6.93097}
              transform="rotate(-8.815 747.743 8.718)"
              fill="#DCE2EE"
            />
            <circle
              cx={760.489}
              cy={90.9061}
              r={6.93097}
              transform="rotate(-8.815 760.489 90.906)"
              fill="#DCE2EE"
            />
            <circle
              cx={773.239}
              cy={173.096}
              r={6.93097}
              transform="rotate(-8.815 773.239 173.096)"
              fill="#DCE2EE"
            />
            <circle
              cx={785.985}
              cy={255.285}
              r={6.93097}
              transform="rotate(-8.815 785.985 255.285)"
              fill="#DCE2EE"
            />
            <circle
              cx={798.732}
              cy={337.473}
              r={6.93097}
              transform="rotate(-8.815 798.732 337.473)"
              fill="#DCE2EE"
            />
            <circle
              cx={811.478}
              cy={419.664}
              r={6.93097}
              transform="rotate(-8.815 811.478 419.664)"
              fill="#DCE2EE"
            />
            <circle
              cx={824.22}
              cy={501.852}
              r={6.93097}
              transform="rotate(-8.815 824.22 501.852)"
              fill="#DCE2EE"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative space-y-8">2

        {/* Accent Circles */}
        <div className="absolute -left-4 -top-4 size-8 rounded-full bg-[#4052A3]" />
        <div className="absolute right-12 top-12 size-8 rounded-full bg-[#FFC300]" />

        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
            <span className="relative inline-block">
              Your Partner for
              <span className="absolute inset-0 -z-10 translate-y-2 rounded-2xl bg-[#E3E9FA]" />
            </span>
            <br />
            <span className="relative inline-block text-[#4052A3]">
              Growth in the
              <br />
              Beverage Business
              <span className="absolute inset-0 -z-10 translate-y-2 rounded-2xl bg-[#E3E9FA]" />
            </span>
          </h1>

          <div className="relative inline-block">
            <h2 className="text-2xl font-semibold text-[#4052A3] lg:text-3xl">
              Stock. Connect. Grow.
            </h2>
            <span className="absolute inset-0 -z-10 translate-y-2 rounded-lg bg-[#E3E9FA]" />
          </div>
        </div>

        <p className="max-w-xl text-lg text-muted-foreground">
          Vendcliq is your one-stop platform for credit, trusted suppliers, and inventory
          tools to help your business thrive. Access tools, financing, and insights that
          empower you to reach new heights.
        </p>

        <Button
          size="lg"
          className="bg-[#FFC300] text-black hover:bg-[#FFC300]/90"
        >
          Get Started with Vendcliq
        </Button>
      </div>
      {/* Dashboard Preview */}
      {/* <div className="pb-6 sm:pb-10">
      <MaxWidthWrapper>
        <div className="h-auto rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div className="relative overflow-hidden rounded-xl border md:rounded-lg">
            <BlurImage
              src={lightPreview}
              alt="ligth preview landing"
              className="flex size-full object-contain object-center dark:hidden"
              width={1500}
              height={750}
              priority
              placeholder="blur"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div> */}
    </section>
  )
}