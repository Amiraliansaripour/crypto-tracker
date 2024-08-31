import React from 'react'
import { Helmet } from 'react-helmet';

const Layout = ({children,title,description}) => {
  return (
    <>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}></meta>
        </Helmet>

        <main>
            {children}
        </main>
      
    </>
  )
}

// Set default props
Layout.defaultProps = {
    title: "AiTradeAll",
    description: "CryptoCurrency App",
    pb:true,
  };

export default Layout
