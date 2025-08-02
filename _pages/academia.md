---
layout: page
permalink: /academia/
title: academia
description: >
  A collection of coursework, notes, and projects from my journey through Computer Science and Applied Math. Built to document what I’ve learned and share how I think.
nav: true
nav_order: 5
---

## Computer Science

{% assign cs_courses = site.academia | where: "category", "computer-science" %}
{% for course in cs_courses %}
-  [{{ course.title }}]({{ course.url }})
---
{% endfor %}

## Mathematics

{% assign math_courses = site.academia | where: "category", "math" %}
{% for course in math_courses %}
-  [{{ course.title }}]({{ course.url }})
---
{% endfor %}
