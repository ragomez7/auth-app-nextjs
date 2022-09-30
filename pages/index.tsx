import React, { useEffect } from "react"
import { GetServerSideProps } from "next"
import { GetStaticProps } from "next"
import prisma from '../lib/prisma';
import Layout from "../components/Layout"
import IndexPage from './login/random'
import IndexPage2 from './login'


const Index = (props) => {
  return (
    <Layout>
      <IndexPage />
      {/* <IndexPage2 /> */}
    </Layout>
  )
}

export default Index
