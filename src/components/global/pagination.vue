<template>
  <nav class="pagination is-small" role="navigation" aria-label="pagination">
    <a class="pagination-previous" @click="$emit('previous')">
      <span class="icon">
        <b-icon icon="step-backward" size="is-small" type="is-primary"></b-icon>
      </span>
    </a>
    <a class="pagination-next" @click="$emit('next')">
      <span class="icon">
        <b-icon icon="step-forward" size="is-small" type="is-primary"></b-icon>
      </span>
    </a>

    <ul v-if="pages > 1" class="pagination-list">
      <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li>
        <a class="pagination-link" :aria-label="`Page ${current - 1}`">
          {{ current - 1 }}
        </a>
      </li>
      <li>
        <a
          class="pagination-link is-current"
          :aria-label="`Page ${current}`"
          aria-current="page"
          >{{ current }}</a
        >
      </li>
      <li>
        <a class="pagination-link" :aria-label="`Page ${current + 1}`">
          {{ current + 1 }}
        </a>
      </li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li>
        <a class="pagination-link" :aria-label="`Goto page ${pages}`">
          {{ pages }}
        </a>
      </li>
    </ul>

    <ul v-else class="pagination-list">
      <li v-for="index in pages" :key="index">
        <a class="pagination-link" :aria-label="`Goto page ${index}`">
          {{ index }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pages: { type: Number, required: true },
    current: { type: Number, required: true },
  },
}
</script>
