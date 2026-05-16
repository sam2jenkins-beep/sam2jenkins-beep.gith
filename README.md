# The Junkmail Newsletter

A New Yorker–style long-form article. Static HTML + CSS. No build step.

## Files

- `index.html` — the article
- `styles.css` — typography and layout
- `netlify.toml` — Netlify config (publishes the root)
- `images/` — drop article images here (see filenames below)

## Adding images

Each figure in the article references a file in `images/`. Drop a JPG/PNG
at the matching path and it will render in place of the placeholder. The
expected filenames are:

```
montreal-spring.jpg     voice-to-text.jpg       cognitively-fried.jpg
george-night.jpg        by-hand.jpg             grading-pile.jpg
classroom.jpg           bench.jpg               proposal.jpg
gym.jpg                 academy.jpg             kate.jpg
kate-sam.jpg            couch.jpg               workout.jpg
little-box.jpg          george-home.jpg         jane-daniel.jpg
nice.jpg                signoff.jpg
```

## Local preview

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

See the **Hosting** section in the conversation for Netlify steps.
