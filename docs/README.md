# Video Game Site Webring

Is a platform for discovering video game sites you've never heard of.

# Include the webring on your site or share it on social

All you need to do is link to http://vgw.io and that will redirect you to a random webring site!

Example of how to link to the Video Game Webring on your site:

    <a href="http://vgw.io">Send me to an awesome Video Game Webring Site!</a>

Example of how to share the Video Game Webring on social:

    Yo kids, hit this URL to find a randomly awesome video game site! http://vgw.io

# What's the process to get games on the list?

  <a href="http://vgw.io/submit.html">Read up on a few things on how to submit your game site!</a>

# install

    gem install bundle
    bundle

# serve the pages and regenerate when there is a change
    bundle exec jekyll serve --watch

# build a fresh version of the site
    bundle exec jekyll build --destination docs
    echo "vgw.io" > docs/CNAME
    cp webring.txt docs/webring.txt
