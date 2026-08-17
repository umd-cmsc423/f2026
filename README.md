# CMSC 423 · Fall 2026 course website

This is a Jekyll site for the Fall 2026 offering of CMSC 423. The inherited Fall
2025 Markdown content remains in place while semester details are reviewed.
The shared header includes a persistent light/dark theme control that defaults
to the visitor's system preference.

## Update the semester

- Edit `_data/course.yml` for the term, status, logistics, links, and release
  controls.
- Edit `_data/people.yml` when the teaching team is confirmed.
- Add announcements in `_announcements/`.
- Update lecture metadata in `_lectures/`; set `materials_visible: true` on
  a lecture when its links are ready.
- Set an assignment's `published` value to `true` only when it should be
  publicly accessible. Assignments are initially unpublished.

Lecture PDFs under `static_files/presentations/` are intentionally ignored by
Git. They can remain in the local working copy while they are revised.

## Preview locally

Install Ruby 3.3 and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

The site is configured for the project URL `/f2026`.

## Deployment

The repository is designed to deploy from `main` with the workflow in
`.github/workflows/pages.yml`. The workflow builds a Pages artifact and
publishes it without committing generated files or maintaining a `gh-pages`
branch.
