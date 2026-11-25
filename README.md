# MED 101
Static site (HTML, CSS, vanilla JS). No build step, no backend.
## Run
VS Code > install "Live Server" > right-click `index.html` > Open with Live Server. Or `python3 -m http.server` and open localhost:8000.
## Deploy (GitHub Pages)
`git init && git add . && git commit -m "MED 101 v0.4"` > create repo > `git remote add origin <url>` > `git push -u origin main` > Settings > Pages > main / root.
## Files
index/learning/careers/opportunities/resources .html | style.css (tokens, colour per section) | data.js (all content) | app.js (rendering, filters, quiz scoring)
## Counts (B1): 5 sections | 8 topics | 10 careers | 18 opportunities | 8 sources | 3 videos | 3 quizzes
## Test plan (actual results: PENDING until you run each test)
| ID | Feature | Action | Expected | Actual | Pass/Fail |
|---|---|---|---|---|---|
| T1 | Nav | Click each of 5 links from Home | Each page loads in 1 click, active link highlighted | | |
| T2 | Filter | Search "genetics" | CCMB x2 and CSHL only | | |
| T3 | Filter | Year 11-12 + Where Hyderabad | BioAsia, CCMB Open Day, NSD programme | | |
| T4 | Filter | Subject Research + Where International | ISEF, RSI, NIH | | |
| T5 | Filter | Year 6-8 + Subject Medicine | Empty state shows, Clear works | | |
| T6 | Filter | Search "zzzz" | Empty state, count 0 of 18 | | |
| T7 | Quiz | Each quiz: all right / all wrong / skip one | 4/4, 0/4, warning message | | |
| T8 | Video | Play 2 embeds, open 3rd link | Loads, no autoplay | | |
| T9 | Links | Click all external links | Reach intended page (some may have moved) | | |
| T10 | Mobile | Chrome DevTools 375px | No sideways scroll, menu works | | |
