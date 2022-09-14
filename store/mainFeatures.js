
const state = ()=> ({
  mainFeatures:[
    {
      id: 1,
      image:'',
      sub:'Layanan Terintegrasi',
      text:'Dashboard, API, Dan Mobile kami sediakan untuk mengontrol & monitoring lebih mudah.'
    },
    {
      id: 2,
      image:'',
      sub:'Ekspedisi Terbaik',
      text:'Kamu bisa pilih layanan sameday, next day, reguler, ekonomi, kargo dan lainya sesukamu.'
    },
    {
      id: 3,
      image:'',
      sub:'Sistem Otomatis',
      text:'Cetak resi / AWB, tracking, saldo COD dan banyak fitur lainnya.'
    },
    {
      id: 4,
      image:'',
      sub:'Selalu Ada Untukmu',
      text:'Kami selalu ada tanpa libur 24 Jam non stop, dan pihak ekpedisi.'
    },
    {
      id: 5,
      image:'',
      sub:'Laporan Aktual',
      text:'Kemudahan pantau paket, pencairan COD, saldo, semuanya.'
    },
    {
      id: 6,
      image:'',
      sub:'Friendly',
      text:'Ciptakan solusi terbaik dengan masukan, kritik, dan diskusi.'
    }
  ],
  trackingData:[
    {id:1,
      text:"Berbagai service expedisi sameday, kargo dan lainnya."
    },
    {id:2,
      text:"Penjemputan paket tanpa minimal kiriman."
    },
    {id:3,
      text:"Fitur dropoff atau cashless."
    },
    {id:4,
      text:"Kirim paket COD dengan pencairan tercepat."
    }
    , {id:5,
      text:"Platform mudah digunakan (user friendly)."
    }
    , {id:6,
      text:"Meminimalisir rasio retur."
    }
  ],
  ourMission:[
    {id:1,
      text:"Meningkatkan penjualan produk UMKM secara online."
    },
    {id:2,
      text:"Memberikan inovasi-inovasi terbaru dan terbaik.."
    },
    {id:3,
      text:"Memberikan pelayanan yang maksimal dan optimal untuk pelanggan."
    },
    {id:4,
      text:"Mengenalkan KiriminAja seluas-luasnya ke seluruh Indonesia."
    }

  ]
})

const a= {}
const m={}

const getters = {
  mainFeatures: (state)=>{
      return state.mainFeatures
  },
  trackData: (state)=>{
    return state.trackingData
  },
  ourMission: (state)=>{
    return state.ourMission
  }

}
export default {
  namespaced: true,
  state,
  mutations:m,
  actions:a,
  getters
}
