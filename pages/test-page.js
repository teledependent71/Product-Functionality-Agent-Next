import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Product Functionality Agent</title>
          <meta
            property="og:title"
            content="test-page - Product Functionality Agent"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_z2s3h) => (
            <>
              <h1>{context_z2s3h?.Name}</h1>
            </>
          )}
          initialData={props.contextZ2s3hProp}
          persistDataDuringLoading={true}
          key={props?.contextZ2s3hProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextZ2s3hProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextZ2s3hProp: contextZ2s3hProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
