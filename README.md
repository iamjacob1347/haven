# Haven

A responsive, static HTML/CSS/JavaScript prototype for Haven. Desktop uses a full website layout with side navigation, a video feed, and an encouragement column. Smaller screens use mobile navigation.

## Run locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser. No package installation or build step is required.

## Experience

The animated intro transitions to sign-up. Choose a sample community name, email, and made-up password, or select “Explore the preview first.” Navigate between Home, FaithBridge, Post, Prayer, Community, Profile, and Settings.

## Source files

- `index.html`: document, intro, sign-up form, and application container; includes the original opening styles.
- `opening.js`: canvas dove animation and intro/sign-up/home transitions.
- `signup.js`: sample form validation and password visibility.
- `app.js`: navigation, feed, prayer, discussions, local video previews, organization resources, profile, and settings.
- `app.css`: shared app styles.
- `social.css`: feed and community styles.
- `signup.css`: sign-up styles.
- `website.css`: responsive full-width website and desktop layouts.
- `assets/`: Haven dove and purple background PNGs.
- `dist/`: identical publish-ready static files and assets.
- `.openai/hosting.json`: configuration for the existing Haven Site.

When editing root files, copy changed HTML, CSS, JavaScript, and assets into `dist/` before publishing. Both root and `dist/` can be served directly.

## Prototype scope

This is the entire current application. There is no hidden backend, database, account service, or dependency bundle. Sign-up does not create accounts or send or save credentials. Posts, replies, preferences, and video selections exist only in browser memory for the current session. Video files are previewed through local object URLs and are not uploaded. Refreshing clears session activity. Organization cards link to public websites; no partnership, assistance eligibility, or referral integration is represented.

This archive includes the source and assets but excludes Git history, credentials, and temporary publishing archives.
