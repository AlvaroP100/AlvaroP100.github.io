---
title: "Scooly"
subtitle: "An AI learning assistant that explains homework step by step and adapts to each student's school context."
description: "Scooly is an AI learning assistant built by Alvaro Petro (Alvaro P100). It explains homework, adapts to school context, and supports images, mathematics, and focused learning skills."
role: "Product development"
status: "Prototype"
year: "2026"
image: "/assets/images/project-process.jpg"
image_alt: "Hands sketching an early interface for Scooly"
stack:
  - "Next.js"
  - "TypeScript"
  - "Tailwind CSS"
  - "IONOS AI Model Hub"
project_url: "https://scooly.dev"
repository_url: ""
featured: true
sitemap: true
---

## The short version

Scooly helps students understand homework instead of copying an answer. It explains solutions step by step and adapts its language, depth, and notation to the student's grade, school type, and German federal state.

## The problem

General-purpose assistants often give a finished answer without matching the way a subject is taught at school. That can make an answer technically correct but difficult to learn from or inconsistent with a teacher's method.

## The approach

Scooly begins each conversation with a subject and supports focused learning modes for explanations, exam preparation, learning plans, text feedback, summaries, and vocabulary. Students can upload a photo of a task, and mathematical work is rendered clearly with KaTeX.

School search data helps set the relevant state and school type. Students can also add details about their textbook, teacher, or individual learning needs so the explanation has useful context.

## The current state

The present version is a prototype. It stores data in the browser and does not yet have production-grade authentication. Those limits are documented openly, and the application is not presented as ready for public use.

## What comes next

The next milestone is server-side accounts and storage with Supabase so chats, images, and learning context can work securely across devices. Scooly Notes will then connect handwritten iPad notes to the same learning context.
