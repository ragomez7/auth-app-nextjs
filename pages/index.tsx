import React, { useEffect } from "react"
import { GetServerSideProps } from "next"
import { GetStaticProps } from "next"
import prisma from '../lib/prisma';
import Layout from "../components/Layout"
import IndexPage from './login'


const Index = (props) => {
  return (
    <Layout>
      <IndexPage />
    </Layout>
  )
}

export default Index
