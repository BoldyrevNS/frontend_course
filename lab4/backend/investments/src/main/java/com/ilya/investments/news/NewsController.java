package com.ilya.investments.news;


import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/news")
public class NewsController {

    private final List<News> news = new ArrayList(Arrays.asList(
            new News(0, "Акции Nike падают на 5% после выхода отчёта", "Но инвесторов обеспокоили административные издержки: рост до 29% от выручки.","img/news/nike.jpg","24 сентября 2021, 16:58"),
            new News(1, "Цены на уголь в Европе достигли максимума с 2008 года", "Европейские фьючерсы на уголь с поставкой в следующем году растут на фоне высокого спроса в энергетике и низких запасов...","img/news/coal.jpg","24 сентября 2021, 16:34"),
            new News(2, "Газпром продолжает заключать долгосрочные договоры несмотря на обвинения в недопоставках", "По словам депутата Госдумы Владимира Гутенева, компания предпочитает долгосрочные стабильные договоры вместо короткой выгоды от пиковых цен...","img/news/gazprom.jpg","24 сентября 2021, 16:00")

    ));

    @GetMapping("/getnews")
    public News stage(@RequestParam(defaultValue = "0") long id)
    {
        return news.get((int) id);
    }



    @PostMapping("/addnews")
    private Boolean addNews(@RequestParam String name,
                             @RequestParam String text,
                            @RequestParam String img,
                            @RequestParam String date)
    {
        news.add(new News(news.size(), name, text, img,date));
        return true;
    }


}
