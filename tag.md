---
layout: page
title: 标签
permalink: /tag/
---

{% assign tags = site.tags | sort %}
<p>
  {% for tag in tags %}
    <span id="{{ tag[0] }}" class="post-meta">
      <a href="/tag/{{ tag[0] | downcase }}">
        {{ tag[0] }} ({{ tag[1] | size }})
      </a>
      <!-- {% unless forloop.last %}
        |
      {% endunless %} -->
    </span>
  {% endfor %}
</p>
