<template>
  <b-table
    ref="table"
    :data="orders"
    narrowed
    hoverable
    detailed
    detail-key="token"
    default-sort="creationDate"
    default-sort-direction="DESC"
    :loading="$apollo.loading"
  >
    <template slot-scope="props">
      <b-table-column
        field="creationDate"
        label="Date"
        sortable
        width="120"
        class="has-text-right"
      >
        {{ $date.formatDate(props.row.creationDate) }}
      </b-table-column>

      <b-table-column field="invoiceNumber" label="Reference" sortable>
        {{ props.row.invoiceNumber }}
      </b-table-column>

      <b-table-column field="description" label="Description">
        <a @click="toggleDetails(props.row)">
          {{ props.row.items.map(({ name }) => name).join(', ') }}
        </a>
      </b-table-column>

      <b-table-column
        field="summary.total"
        label="Total"
        sortable
        width="80"
        class="has-text-right"
      >
        <strong>{{ props.row.summary.total }}€</strong>
      </b-table-column>
    </template>

    <template slot="detail" slot-scope="props">
      <article v-for="item in props.row.items" :key="item.token" class="media">
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
      update(data) {
        return data.customerOrders
      },
      prefetch: false,
    },
  },
  methods: {
    toggleDetails(row) {
      this.$refs.table.toggleDetails(row)
    },
  },
}
</script>
