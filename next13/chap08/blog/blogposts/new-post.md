---
title: 'Revalidation (ISR)'
date: '2023-07-15'
---

Next.js allows you to update specific static routes without needing to rebuild your entire site. Revalidation (also known as Incremental Static Regeneration) allows you to retain the benefits of static while scaling to millions of pages.

There are two types of revalidation in Next.js:

- Background: Revalidates the data at a specific time interval.
- On-demand: Revalidates the data based on an event such as an update.
