<template>
 <section>

   <NewsItem
    v-for="news of news"
    v-bind:news="news"
   />
 </section>
</template>

<script>


import NewsItem from "@/components/News-item";
export default {
  name: 'News',
  data(){
    return{
      news:[
        {id:0, image: 'img/news/nike.jpg', title: 'Акции Nike падают на 5% после выхода отчёта', date: '24 сентября 2021, 16:58' , text: 'Но инвесторов обеспокоили административные издержки: рост до 29% от выручки.'  },
        {id:1, image: 'img/news/coal.jpg', title: 'Цены на уголь в Европе достигли максимума с 2008 года ', date: '24 сентября 2021, 16:34 ' , text: 'Европейские фьючерсы на уголь с поставкой в следующем году растут на фоне высокого спроса в энергетике и низких запасов...'  },
        {id:2, image: 'img/news/gazprom.jpg', title: 'Газпром продолжает заключать долгосрочные договоры несмотря на обвинения в недопоставках', date: '24 сентября 2021, 16:00' , text: 'По словам депутата Госдумы Владимира Гутенева, компания предпочитает долгосрочные стабильные договоры вместо короткой выгоды от пиковых цен...'  }
      ]
    }
  },
  components: {
    NewsItem

  }
}
</script>
