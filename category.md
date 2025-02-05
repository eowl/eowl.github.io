---
layout: page
title: 分类
permalink: /category/
---

{% assign categories = site.categories | sort %}

<div class="card">
  {% for category in categories %}
    <h2 id="{{ category[0] }}" class="post-meta">
      <a href="/category/{{ category[0] | downcase }}">
        {{ category[0] }}
      </a>
      ({{ category[1] | size }})
    </h2>
    <ul>
      {% for post in category[1] %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>