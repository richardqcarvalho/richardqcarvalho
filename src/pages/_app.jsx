import '../styles.css'

const RootLayout = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

// const RootLayout = ({ children }) => {
//   return (
//     <html lang='en'>
//       <body>{children}</body>
//     </html>
//   )
// }

export const metadata = {
  title: 'Richard Carvalho',
  description: 'Personal profile of',
}

export default RootLayout
