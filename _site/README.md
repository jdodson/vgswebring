# Video Game Site Webring
Is a platform for discovering retro video game & other non top 20 video game sites.

# including the webring on your site or sharing it on social

All you need to do is link to https://jdodson.github.io/vgswebring/ and that will redirect you to a random webring site!

Example of how to link to the Video Game Webring on your site:

    <a href="https://jdodson.github.io/vgswebring/">Send me to an awesome Video Game Webring Site!</a>

# What kinds of video game sites do we include in the webring?

* Game communities
* News websites
* Retro websites
* Console websites
* Game blogs

# What kinds of video game sites do we avoid?

* The very most popular video games sites.  If you are IGN, Kotaku, Polygon RPS or the like you don't need the help.  Nothing in the top 20.
* Anything owned by a large media conglomerate
* Podcasts
* YouTube & Twitch Channels
* Video game sites that have not posted new content in a year
* Steam key reselling websites
* Loot box/crate websites
* Site focusing primarily on commerce or purchasing games

# install

    gem install bundle
    bundle

# serve the pages and regenerate when there is a change
    bundle exec jekyll serve --watch

# build a fresh version of the site
    bundle exec jekyll build --destination docs
