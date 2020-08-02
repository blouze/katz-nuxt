<template>
  <b-table
    ref="table"
    :data="orders"
    narrowed
    hoverable
    detailed
    detail-key="id"
  >
    <template slot-scope="props">
      <b-table-column field="description" label="Description">
        <a @click="toggleDetails(props.row)">
          {{ props.row.items.map(({ name }) => name).join(', ') }}
        </a>
      </b-table-column>
      <b-table-column field="summary.total" label="Total" sortable>
        <strong>{{ props.row.summary.total }}€</strong>
      </b-table-column>
      <b-table-column field="createdAt" label="Date" width="260" sortable>
        {{ $date.formatDate(props.row.createdAt) }}
      </b-table-column>
    </template>

    <template slot="detail" slot-scope="props">
      <article v-for="item in props.row.items" :key="item.id" class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img :src="item.image" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ item.name }}</strong>
              <small> — {{ item.unitPrice }}€</small>
              <small v-if="item.quantity > 1"> x {{ item.quantity }}</small>
            </p>
          </div>
        </div>
      </article>
    </template>
  </b-table>
</template>

<script>
import orders from '~/apollo/queries/orders'

export default {
  name: 'UserOrdersPage',
  apollo: {
    orders: {
      query: orders,
      variables() {
        return {}
      },
    },
  },
  methods: {
    toggleDetails(row) {
      this.$refs.table.toggleDetails(row)
    },
  },
}
</script>
