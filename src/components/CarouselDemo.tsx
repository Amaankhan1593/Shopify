"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  "https://cdn.shopify.com/theme-store/2w2jiarlnemtl4rbk38bwkyft93n.jpg?width=600",
  "https://cdn.shopify.com/theme-store/cig7t9w5544j87i2f38otyy8t9f2.jpg?width=600",
  "https://cdn.shopify.com/theme-store/6zk8xlltn26kr5m38f7l4ha0zd78.jpg?width=600",
  "https://cdn.shopify.com/theme-store/bdn2hytmg5tnvupxyhfv36epilvr.jpg?width=600",
  "https://cdn.shopify.com/theme-store/5s05g4bcfo6pks2sloeifkl09v0v.jpg?width=600",
]

export function CarouselDemo() {
  return (
    <section className="py-10 bg-[#eaeaea] px-4">
      <Carousel className="w-full max-w-5xl mx-auto">
        {/* Heading + arrows inside Carousel context */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Stores using this theme</h2>
          <div className="flex gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>

        {/* Images */}
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="p-2 basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={src}
                  width={2}
                  height={2}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[240px] object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
