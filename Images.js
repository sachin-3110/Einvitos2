import React, { useState } from 'react'

const useImages = () => {

   const data=[
    {index: 1,url:"https://i.postimg.cc/W3NVXWcc/IMG-20250308-WA0081.jpg", altText:"trio"},
    {index:2 ,url:"https://i.postimg.cc/bJmhMxqD/IMG-20250308-WA0096.jpg", altText:"onlyHe"},
    {index: 3,url:"https://i.postimg.cc/yxWHzDNf/IMG-20250308-WA0097.jpg", altText:"onlyHe"},
    {index: 4,url:"https://i.postimg.cc/Y0Vw2tGt/IMG-20250308-WA0098.jpg", altText:"onlyHeandHer"},
    {index: 5,url:"https://i.postimg.cc/xjFQ33sB/IMG-20250308-WA0099.jpg", altText:"onlyHe"},
    {index: 6,url:"https://i.postimg.cc/fTtN2Spy/IMG-20250308-WA0100.jpg", altText:"onlyHeLandscape"},
    {index: 7,url:"https://i.postimg.cc/PrgkBrn4/IMG-20250308-WA0101.jpg", altText:"OnlyHE"},
    {index: 8,url:"https://i.postimg.cc/Gmv1rwc1/IMG-20250308-WA0102.jpg", altText:"onlyHe"},
    {index: 9,url:"https://i.postimg.cc/k59Pg14R/IMG-20250308-WA0103.jpg", altText:"onlyHe"},
    {index: 10,url:"https://i.postimg.cc/xdRDJvJx/IMG-20250308-WA0104.jpg", altText:"onlyHe"},
    {index: 11,url:"https://i.postimg.cc/Kz8Xn1tZ/IMG-20250308-WA0105.jpg", altText:"onlyHe"},
    {index: 12,url:"https://i.postimg.cc/zBtspqkT/IMG-20250308-WA0106.jpg", altText:"onlyHe"},
    {index: 13,url:"https://i.postimg.cc/RhWjD2Py/IMG-20250308-WA0107.jpg", altText:"onlyHe"},
    {index: 14,url:"https://i.postimg.cc/Gt6ZwzV2/IMG-20250308-WA0108.jpg", altText:"onlyHe"},
    {index: 15,url:"https://i.postimg.cc/J7gwk40L/IMG-20250308-WA0109.jpg", altText:"onlyHe"},
    {index: 16,url:"https://i.postimg.cc/TYWzqM5W/IMG-20250308-WA0110.jpg", altText:"onlyHe"},
    {index: 17,url:"https://i.postimg.cc/FH52TW0C/IMG-20250308-WA0111.jpg", altText:"onlyHe"},
    {index: 18,url:"https://i.postimg.cc/Mp7gN7D6/IMG-20250308-WA0112.jpg", altText:"onlyHe"},
    {index: 19,url:"https://i.postimg.cc/ZqJXSW7r/IMG-20250308-WA0113.jpg", altText:"onlyHe"},
    {index: 20,url:"https://i.postimg.cc/rmmbDvLs/IMG-20250308-WA0114.jpg", altText:"onlyHe"},
    {index: 21,url:"https://i.postimg.cc/5tpTNfTD/IMG-20250308-WA0115.jpg", altText:"onlyHe"},
    {index: 22,url:"https://i.postimg.cc/j2nFXP2r/IMG-20250308-WA0116.jpg", altText:"onlyHe"},
    {index: 23,url:"https://i.postimg.cc/sXNL7wVc/IMG-20250308-WA0117.jpg", altText:"onlyHe"},
    {index: 24,url:"https://i.postimg.cc/fW3zFP0M/IMG-20250308-WA0118.jpg", altText:"onlyHe"},
    {index: 25,url:"https://i.postimg.cc/Lhd005gg/IMG-20250308-WA0119.jpg", altText:"trio"},
    {index: 26,url:"https://i.postimg.cc/15w9RNHT/IMG-20250308-WA0120.jpg", altText:"onlyHe"},
    {index: 27,url:"https://i.postimg.cc/vZyG4H2m/IMG-20250308-WA0121.jpg", altText:"onlyHe"},
    {index: 28,url:"https://i.postimg.cc/sftjRJp7/IMG-20250308-WA0122.jpg", altText:"trio"},
    {index: 29,url:"https://i.postimg.cc/SxGkCFHf/IMG-20250308-WA0123.jpg", altText:"onlyHe"},
    {index: 31,url:"https://i.postimg.cc/MGKxY3S2/IMG-20250308-WA0124.jpg", altText:"onlyHeandHer"},
    {index: 32,url:"https://i.postimg.cc/JnsLfy0p/IMG-20250308-WA0125.jpg", altText:"onlyHe"},
    {index: 33,url:"https://i.postimg.cc/FKWvCbrf/IMG-20250308-WA0126.jpg", altText:"trio"},
    {index: 34,url:"https://i.postimg.cc/gJ1WmY6m/IMG-20250308-WA0127.jpg", altText:"onlyHe"},
    {index: 35,url:"https://i.postimg.cc/qBCrQC9R/IMG-20250308-WA0128.jpg", altText:"trio"},
    {index: 36,url:"https://i.postimg.cc/rFXkHwk9/IMG-20250308-WA0129.jpg", altText:"onlyHe"},
    {index: 37,url:"https://i.postimg.cc/5yvMtZwv/IMG-20250308-WA0130.jpg", altText:"trio"}
   ]
    const NewDatatrio= data.filter((e)=>e.altText=="trio")
    const NewDataHeandHer= data.filter((e)=>e.altText=="onlyHeandHer")
    const NewDataHe= data.filter((e)=>e.altText=="onlyHe")
  
  return {
    allImages: data,
    NewDataHe,
    NewDataHeandHer,
    NewDatatrio
  }
}

export default useImages



