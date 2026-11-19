---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<!-- {% if site.author.googlescholar %}
  You can also find my articles on <a href="{{ site.author.googlescholar }}">my Google Scholar profile</a>.
{% endif %} -->

## Paper

{% for pub in site.data.publications.papers %}
  {% include publication-entry.html pub=pub %}
{% endfor %}

## Poster

{% for pub in site.data.publications.posters %}
  {% include publication-entry.html pub=pub %}
{% endfor %}
