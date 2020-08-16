import { format, parseISO } from "date-fns"
import { fr } from "date-fns/locale"

const date = {
  formatDate(date) {
    return format(parseISO(date), "ee LLLL yyyy", {
      locale: fr,
    })
  },
}

export default (context, inject) => {
  inject("date", date)
}
