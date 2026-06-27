import React from 'react'

export default function Gallery() {
  const images=[
    {
      id:1,
      image:"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
    },
    {
      id:2,
      image:"https://r1.ilikewallpaper.net/iphone-wallpapers/download/77636/Maldives-iphone-wallpaper-ilikewallpaper_com_640.jpg"
    },
    {
      id:3,
      image:"https://m.media-amazon.com/images/I/71Xu66Nem-L._AC_UF894,1000_QL80_.jpg"
    },
    {
      id:4,
      image:"https://cdn.magicdecor.in/com/2023/10/20174720/Anime-Scenery-Wallpaper-for-Walls-710x488.jpg"
    },
    {
      id:5,
      image:"https://i.pinimg.com/564x/27/4b/01/274b0146d9364205b9d8335515adf911.jpg"
    },
    {
      id:6,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNe44xp4K6QrT3dfePu4HkyY74lrOgsNFnKEKK5TpIFfvqU2s2xqT3yv6&s=10"
    },
    {
      id:7,
      image:"https://m.media-amazon.com/images/I/61qbMx4oXJL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id:8,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6zCvcp5qaJI2kGIq2Ym6f3sGn6tAOgJLtHlxbcaPsvFkzJfZ4zqy76c&s=10"
    },
    {
      id:9,
      image:"https://static.vecteezy.com/system/resources/thumbnails/057/054/899/small/flowers-wallpaper-hd-wallpaper-free-photo.jpeg"
    },
    {
      id:10,
      image:"https://w0.peakpx.com/wallpaper/64/103/HD-wallpaper-best-walpaper-art-artwork-bird-artificial-stars-original-phone-wall-night.jpg"
    },
    {
      id:11,
      image:"https://wallpapers-clan.com/wp-content/uploads/2026/02/lofi-datsun-240z-palm-trees-retro-sunset-desktop-wallpaper-cover.jpg"
    },
     {
      id:12,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd58mk9rNXWpYxcic4lNS9KSOQzc46FZC0qI09WIl1TgHtodTFa1uOtLoy&s=10"
    },
     {
      id:13,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAV6cgAuucYKZAqObH5GwyMj5FN8NMf6cOMRx7bqncjbj4ruMJ_KJOZE&s=10"
    },
    {
      id:14,
      image:"https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-art-1080p-2k-4k-5k-hd-wallpapers-free-download-background-image_16123072.jpg"
    },
  ]
  return (
    <div className='bg-[#0f172a] min-h-screen p-3 md:p-5'>
      <div className='columns-1 sm:columns-2 md:columns-3 lg-columns-4 gap-4 space-y-3'>
      <div className=' break-inside-avoid bg-[#161B22] border border-gray-8-- rounded-none flex justify-center items-center p-6mb-3 aspect-[3/1]'>
        <h1 className='text-7xl font-black font-morganite text-white'>Gallery</h1>
      </div>
      {
        images.map((img)=>(
          <div className='break-inside-avoid group overflow-hidden rounded-lg ' key={img.id}>
            <img src={img.image} alt="" className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300' />
          </div>
        ))
      }
      </div>
    </div>
  )
}
