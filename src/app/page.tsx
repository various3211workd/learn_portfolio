import Layout from '../components/layout'
import Skils from '../components/skils'
import Myprojects from '../components/myprojects'
import Intro from '../components/intro'
import MyNameIs from '../components/mynameis'

import '../styles/globals.css';

export default function Home() {
  return (
    <Layout>

      <Intro />

      <MyNameIs />

      <Myprojects />
      <Skils />
    </Layout>
  );
}


