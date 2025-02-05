---
layout: page
title: 年轮
permalink: /year/
---

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" | sort: "name" %}

{% for year in posts_by_year %}
  <h2 id="{{ year.name }}" class="post-meta">
    <a href="/{{ year.name }}">
      {{ year.name }}
    </a>
    ({{ year.items | size }})
  </h2>
  <ul>
    {% for post in year.items %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}