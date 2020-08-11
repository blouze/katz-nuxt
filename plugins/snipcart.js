export default (context, inject) => {
  const head = document.getElementsByTagName('head')[0]

  const link = document.createElement('script')
  link.rel = 'preconnect'
  link.href = 'https://app.snipcart.com'
  head.appendChild(link)

  link.href = 'https://cdn.snipcart.com'
  head.appendChild(link)

  link.rel = 'stylesheet'
  link.href = 'https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.css'
  head.appendChild(link)

  const script = document.createElement('script')
  script.src = 'https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.js'

  head.appendChild(script)

  document.addEventListener('snipcart.ready', () => {
    console.log('snipcart.ready')
    // You can safely use window.Snipcart here
  })
}
