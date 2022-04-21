import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head> 
        
       
       
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    )
  }
}

export default MyDocument
