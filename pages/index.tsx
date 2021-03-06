// 10分钟上手next.js https://juejin.cn/post/7017303191687528485

import Page from '@/pages/learn/api-use/layout'
import styles from '@/styles/Home.module.scss'
import { Button } from 'antd'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => (
  <div className={styles.container}>
    {/* 在不同的页面组件里写不同的 Meta Data */}
    <Head>
      <title>标题</title>
      <meta name="description" content="描述" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* 路由使用 */}
    <h1>动态路由</h1>
    <Button>
      <Link href="/learn/dynamic-route/static/1">静态生成</Link>
    </Button>
    <Button>
      <Link href="/learn/dynamic-route/nest-router/2/3">嵌套静态生成</Link>
    </Button>
    <Button>
      <Link href="/learn/dynamic-route/server/xbox">服务端渲染</Link>
    </Button>
    <Button>
      <Link href="/learn/dynamic-route/all-router/xbox/1/2">所有参数的路由，参数为[]类型</Link>
    </Button>
    <h1>静态路由</h1>
    <Button>
      <Link href="/learn/static-route/static-generation?a=1">静态生成</Link>
    </Button>
    <Button>
      <Link href="/learn/static-route/server-side-rendering?category=xbox">服务端渲染</Link>
    </Button>
    <h1>API使用</h1>
    <Button>
      <Link href="/learn/api-use/image">图片</Link>
    </Button>
    <Button>
      <Link href="/learn/api-use/router">编程式路由</Link>
    </Button>

    <Page />
  </div>
)

export default Home
